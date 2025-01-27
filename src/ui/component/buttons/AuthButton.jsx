"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import React from "react";
import LoginSignup from "../modal/LoginSignup";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Cookies from "js-cookie";

import { setLoginState } from "@/redux/slices/loginPopupSlice";
import { setBookState } from "@/redux/slices/bookSessionSlice";

const AuthButton = (props) => {
  const IsAuthenticate = Cookies.get("_token");
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setLoginState({ redirectUrl: props.url, status: "true" }));
  };

  const handleClickChange = () => {
    dispatch(setBookState({ status: "true" }));
  };

  return (
    <>
      {IsAuthenticate ? (
        <>
          {props?.booksession === "true" ? (
            <div {...props} onClick={handleClickChange}>
              {props.children}
            </div>
          ) : (
            <Link prefetch={false} href={props.url} {...props}>
              {props.children}
            </Link>
          )}
        </>
      ) : (
        <>
          {props?.mocktest === "true" ? (
            <Link
              prefetch={false}
              href={`${process.env.NEXT_PUBLIC_LARAVEL_APP_URL}/test-preparation/${props?.examname}/mock-test/instruction`}
              {...props}
            >
              {props.children}
            </Link>
          ) : props?.booksession === "true" ? (
            <div {...props} onClick={handleClickChange}>
              {props.children}
            </div>
          ) : (
            <div {...props} onClick={handleClick}>
              {props.children}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default AuthButton;
