"use client";

import { setAuthData } from "@/redux/slices/authSlice";
import { setLoginState } from "@/redux/slices/loginPopupSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function GoogleOneTapLogin() {
  const dispatch = useDispatch();
  const router = useRouter();
  const IsAuthenticate = Cookies.get("_token");
  useEffect(() => {
    if (!IsAuthenticate) {
      const handleCredentialResponse = (response) => {
        const credential = encodeURIComponent(response.credential);

        fetch(
          `${process.env.NEXT_PUBLIC_LARAVEL_APP_URL}/auth/google/handleRedirect?credential=${credential}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.status == 0) {
              dispatch(setLoginState({ redirectUrl: "", status: "true" }));
            } else if (data.status == 1) {
              const userData = {
                name: data?.user?.name,
                lastName: data?.user?.last_name,
                countryCode: data?.user?.country_code,
                countryName: data?.user?.country,
                phoneNumber: data?.user?.phone,
                email: data?.user?.email,
              };
              dispatch(setAuthData(userData));
              const jwtToken = data?.token;
              const expirationTime = 86400 * 30;
              document.cookie = `_token=${jwtToken}; expires=${new Date(Date.now() + expirationTime * 1000).toUTCString()}; path=/; domain=${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}`;
              router.refresh();
            } else {
              console.error("Login failed", data.message);
            }
          })
          .catch((err) => console.error("Error during login", err));
      };

      const initializeGoogleOneTap = () => {
               
        if (window.google) {
          google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: handleCredentialResponse,
          });
          google.accounts.id.prompt();
        } else {
          console.error("Google API not loaded");
        }
      };

      const onUserInteraction = () => {
        initializeGoogleOneTap();
        window.removeEventListener("mousemove", onUserInteraction);
        window.removeEventListener("touchstart", onUserInteraction);
      };

      window.addEventListener("mousemove", onUserInteraction);
      window.addEventListener("touchstart", onUserInteraction);

      return () => {
        window.removeEventListener("mousemove", onUserInteraction);
        window.removeEventListener("touchstart", onUserInteraction);
      };
    }
  }, []);

  return <div id="g_id_onload"></div>;
}
