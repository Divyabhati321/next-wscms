"use client";
import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalContent, ModalBody, Button, Select, Avatar, SelectItem, Input, Checkbox, useDisclosure, Spinner, } from "@nextui-org/react";
import pinlottie from "../../../../public/lottie/pin.json";
import successlottie from "../../../../public/lottie/success.json";
import { FaGlobe } from "react-icons/fa";
import { BsPencilFill } from "react-icons/bs";
import { InputOTP, InputOTPGroup, InputOTPSlot, } from "@/components/ui/input-otp";
import Link from "next/link";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { getCountryArray, getMobileVerification, getPinVerification, sentOtp, getOtpVerification, PinGenerate, } from "@/lib/website";
import { useDispatch, useSelector } from "react-redux";
import { setAuthData } from "@/redux/slices/authSlice";
import { navigate } from "@/lib/navigate";
import { setLoginState } from "@/redux/slices/loginPopupSlice";
import { getCookie } from '@/lib/cookies';
import Timer from "@/ui/component/common/Timer";
import Cookies from 'js-cookie'
import dynamic from "next/dynamic";

const deleteCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};


const LoginSignup = ({ examname }) => {

  const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
  );

  const [initialDuration, setInitialDuration] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const router = useRouter();
  const openPopup = useSelector((state) => state.loginPopup.onOpen);
  const redirectUrl = useSelector((state) => state.loginPopup.redirectUrl);

  const dispatch = useDispatch();

  const [countryArray, setCountryArray] = useState("");
  const inputRef = useRef(null);
  const [error, setError] = useState("");
  const [verification, setVerification] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [countryCode, setCountryCode] = useState("91");
  const [countryName, setCountryName] = useState("India");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [otp, setOtp] = useState("");
  const [pinText, setPinText] = useState("enter your 4 digit login pin");
  const [optionsVisible, setOptionsVisible] = useState(true);
  const [pinStatus, setPinStatus] = useState(true);
  const [btnFirst, setBtnFirst] = useState("Continue");
  const [btnSecond, setBtnSecond] = useState("Verify & Continue");
  const [btnThird, setBtnThird] = useState("Continue");
  const [activeModal, setActiveModal] = useState("modal1");
  const [otpCode, setOtpCode] = useState('');
  const [timer, setTimer] = useState(30);
  const [resendCode, setResendCode] = useState(false);
  const [isCounrtyIndia, setIsCounrtyIndia] = useState(true);
  const [userEmail, setUserEmail] = useState('');
  const [isIPhoneNot, setIsIPhoneNot] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [defaultKey, setDefaultKey] = useState(null);


  const handlePinReset = () => {
    setBtnThird(<Spinner color="default" />);
    setBtnSecond(<Spinner color="default" />);
    otpSent("reset");
  };

  useEffect(() => {
    handleInputAndChange();
  }, [countryData]);

  const handleCountryChange = async () => {
    let countryIndia = true;
    if (countryData) {
      let code = countryData.split("-")[0];
      let name = countryData.split("-")[1];
      if (code == "91") {
        setIsCounrtyIndia(true);
        countryIndia = true;
      } else {
        countryIndia = false;
        setIsCounrtyIndia(false);
      }
      setCountryCode(code);
      setCountryName(name);
      return countryIndia;
    }
    return countryIndia;
  };

  const openFirstModal = () => {
    setActiveModal("modal1");
  };

  const handleModalClose = () => {
    dispatch(setLoginState({ redirectUrl: '', status: 'false' }))
    setActiveModal("modal1");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getCountryArray();
        setCountryArray(responseData);
      } catch (error) {
        console.error("Error Fetching Country Data: ", error);
      }
    };

    const handleEvent = () => {
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('touchstart', handleEvent);
      if (countryArray?.length === 0 || countryArray === "") {
        fetchData();
      }
      handleOtpVerification();
    };

    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('touchstart', handleEvent);

    let intervalId = setInterval(() => {
      const countryName = Cookies.get("userCountryName") || null;
      const countryCode = Cookies.get("userCountryCode") || null;

      if (countryName && countryCode) {
        const key =
          countryCode && countryName
            ? countryCode + "-" + countryName.replace("%20")
            : null;
        setDefaultKey(key);
        setIsCounrtyIndia(countryCode != "91" ? false : true);
        setCountryCode(countryCode);
        setCountryName(countryName);
        clearInterval(intervalId);
      }
    }, 1000);
  }, []);


  useEffect(() => {
    if (openPopup == 'true') {
      onOpen();
    }
  }, [openPopup, onOpen]);

  const validateForm = (formData, section) => {
    const errors = {};
    let requiredKeys = "";
    if (section == "mobile-verification") {
      {
        isVisible
          ? (requiredKeys = ["phone"])
          : (requiredKeys = ["name", "last_name", "phone"]);
        !isCounrtyIndia && !isVisible ? requiredKeys.push("email") : "";
      }
    } else if (section == "pin-verification" || section == "pin-generate") {
      requiredKeys = ["pin"];
    } else if (section == "otp-verification") {
      requiredKeys = ["otp"];
    }

    if (requiredKeys != "") {
      for (const key of requiredKeys) {
        const value = formData.get(key);
        if (value === null || value === "" || value.trim() === "" || value == "0000-00-00" || value == null || value === "0" || value == undefined) {
          errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)
            } is required`;
        } else {
          if (key == "pin" || key == "otp") {
            if (value.length < 4) {
              errors[key] = `Invalid ${key.charAt(0).toUpperCase() + key.slice(1)
                }`;
            }
          }
        }

        if (key == 'phone') {
          if (countryCode == "91") {
            if (value[0] == '0' || !value || value === "null" || value === "0" || (value.length < 10 || value.length > 10 || value == undefined)) {
              errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is Invalid`;
            }
          } else {
            if (!value || value === "null" || value === "0" || (value.length < 6 || value.length > 15 || value == undefined)) {
              errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is Invalid`;
            }
          }
        } else {
          if (!value || value === "null" || value === "0" || value == undefined) {
            errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is Invalid`;
          }
        }
      }
    }
    return errors;
  };


  const handleInputAndChange = async (e) => {
    setVerification(true);
    const countryIndia = await handleCountryChange();
    if ((phoneNumber && countryIndia && phoneNumber.length == 10) || (phoneNumber && !countryIndia && phoneNumber.length > 6 && phoneNumber.length <= 15)) {
      setBtnFirst(<Spinner color="default" />);
      const formData1 = new FormData();
      formData1.append("country_code", countryCode);
      formData1.append("phone", phoneNumber);
      const successData = await getMobileVerification(formData1);
      if (successData?.status == 1) {
        setUserEmail(successData?.result?.user?.email);
        setToken(successData?.result.token);
        setBtnFirst("Continue");
        setIsVisible(true);
        setVerification(false);
      } else if (successData?.status == 0) {
        setBtnFirst("Continue");
        setIsVisible(false);
        setVerification(false);
      }
    }
  };

  const mobileVerification = async (e) => {
    e.preventDefault();
    setBtnFirst(<Spinner color="default" />);
    setVerification(true);
    const formData = new FormData(e.target);
    formData.delete("country_code");
    formData.append("country_code", countryCode);
    const formErros = validateForm(formData, "mobile-verification");
    setError(formErros);
    if (Object.keys(formErros).length === 0) {
      setPhoneNumber(formData.get("phone"));
      const success = await getMobileVerification(formData);
      if (success) {
        if (success.status == 1) {
          setUserEmail(success?.result?.user?.email);
          if (isCounrtyIndia) {
            setBtnFirst("Continue");
            setPinText("enter your 4 digit login pin");
            setOptionsVisible(true);
            setPinStatus(true);
            setVerification(false);
            setActiveModal("modal2");
            otpSent("normal");
          } else {
            setBtnFirst("Continue");
            setActiveModal('modal3');
            setPinStatus(true)
            setVerification(false)
            setPinText('Enter Your 4 digit Login Pin')
          }
        } else if (success.status == 0) {
          if (isCounrtyIndia) {
            otpSent("normal");
            setVerification(false);
          } else {
            setActiveModal('modal3');
            setPinStatus(false)
            setVerification(false)
            setPinText('Create Your 4 digit Login Pin')
          }
        }
      }
    } else {
      setBtnFirst("Continue");
      setVerification(false);
    }
  };

  const pinVerifcation = async (e) => {
    e.preventDefault();
    setBtnThird(<Spinner color="default" />);
    setVerification(true);
    const formData = new FormData(e.target);
    formData.append("token", token);
    const formErros = validateForm(formData, "pin-verification");
    setError(formErros);
    if (Object.keys(formErros).length === 0) {
      const success = await getPinVerification(formData);
      if (success) {
        if (success.status == 1) {
          try {
            setVerification(false);
            const jwtToken = success.jwt_token;
            const userData = {
              name: success?.userData?.name,
              lastName: success?.userData?.last_name,
              countryCode: success?.userData?.country_code,
              countryName: success?.userData?.country,
              phoneNumber: success?.userData?.phone,
            };
            const expirationTime = 86400 * 30;
            document.cookie = `_token=${jwtToken}; expires=${new Date(
              Date.now() + expirationTime * 1000
            ).toUTCString()}; path=/; domain=${process.env.NEXT_PUBLIC_COOKIE_DOMAIN
              }`;
            setActiveModal("modal4");
            setBtnThird("Continue");
            dispatch(setLoginState(userData));
            dispatch(setAuthData(userData));
            setTimeout(() => {
              onOpenChange(false);
              if (redirectUrl) navigate(`${redirectUrl}`);
              else router.refresh();
            }, 2000);
          } catch (error) {
            console.error(error);
          }
        } else if (success.status == 0) {
          const errors = {};
          errors["pin"] = success.msg;
          setError(errors);
          setBtnThird("Continue");
          setVerification(false);
        }
      }
    } else {
      setVerification(false);
      setBtnThird("Continue");
    }
  };

  const otpSent = async (method) => {
    const formData = new FormData();

    if (method == "reset") {
      formData.append("reset", "reset");
    } else {
      formData.append("reset", "");
    }

    formData.append("phone", phoneNumber);
    formData.append("name", name);
    formData.append("last_name", lastName);
    formData.append("source", "Register");
    formData.append("country", countryName);
    formData.append("country_code", countryCode);
    formData.append("email", userEmail);
    formData.append("examname", examname);
    formData.append("service_id", 1);

    const webJourneyCookieName = "web_journey";
    const journey = getCookie(webJourneyCookieName);
    if (journey) {
      formData.append("webJourney", journey);
      deleteCookie("web_journey");
    }
    const success = await sentOtp(formData);
    if (success?.status == 3) {
      if (success.userStatus) {
        setPinText("Enter your 4 digit login pin");
        setPinStatus(true);
        setActiveModal("modal3");
      } else {
        setPinText("create your 4 digit login pin");
        setPinStatus(false);
        setActiveModal("modal3");
      }
      setBtnFirst("Continue");
      setBtnThird("Continue");
      setBtnSecond("Continue");
    } else {
      setOtp(success?.otp);
      setTimer(30);
      setResendCode(true);
      setTimeout(() => {
        setResendCode(false);
      }, 30000);
      setActiveModal("modal2");
      setBtnFirst("Continue");
      setBtnThird("Continue");
      setBtnSecond("Continue");
    }
  };

  const otpVerification = async (e) => {
    e.preventDefault();
    setBtnSecond(<Spinner color="default" />);
    setVerification(true);
    const formData = new FormData(e.target);
    const formErros = validateForm(formData, "otp-verification");
    setError(formErros);
    if (Object.keys(formErros).length === 0) {
      formData.append("original_otp", otp);
      formData.append("country_code", countryCode);
      formData.append("phone", phoneNumber);
      const success = await getOtpVerification(formData);
      if (success) {
        if (success.status == 1) {
          if (isCounrtyIndia) {
            setVerification(false);
            setPinText("create your 4 digit login pin");
            setOptionsVisible(false);
            setPinStatus(false);
            setActiveModal("modal4");
            setBtnSecond("Verify & Continue");
            const jwtToken = success?.jwt_token;
            const userData = {
              name: success?.userData?.name,
              lastName: success?.userData?.last_name,
              countryCode: success?.userData?.country_code,
              countryName: success?.userData?.country,
              phoneNumber: success?.userData?.phone,
            };
            const expirationTime = 86400 * 30;
            document.cookie = `_token=${jwtToken}; expires=${new Date(
              Date.now() + expirationTime * 1000
            ).toUTCString()}; path=/; domain=${process.env.NEXT_PUBLIC_COOKIE_DOMAIN
              }`;
            dispatch(setAuthData(userData));
            setTimeout(() => {
              onOpenChange(false);
              if (redirectUrl) navigate(`${redirectUrl}`);
              else router.refresh();
            }, 2000);
          } else {
            setActiveModal('modal3');
            setPinStatus(false)
            setVerification(false)
            setPinText('Create Your 4 digit Login Pin')
          }
        } else if (success.status == 0) {
          setVerification(false);
          const errors = {};
          errors["otp"] = success.msg;
          setError(errors);
          setBtnSecond("Verify & Continue");
        }
      }
    } else {
      setVerification(false);
      setBtnSecond("Continue");
    }
  };

  const handleOtpVerification = async () => {
    try {
      if ("OTPCredential" in window) {
        const otpCredentialPromise = navigator.credentials.get({
          otp: { transport: ["sms"] },
        });

        otpCredentialPromise
          .then((otpCredential) => {
            if (otpCredential && otpCredential.code) {
              setOtpCode(otpCredential.code);
            } else {
              console.warn(
                "No OTP received or invalid OTP credential.",
                otpCredential
              );
            }
          })
          .catch((error) => {
            console.error("Error obtaining OTP credential:", error);
          });
      } else {
        console.log("WebOTP not supported!");
      }
    } catch (err) {
      console.error("Error obtaining OTP credential:", err);
    }
  };

  const pinGenerate = async (e) => {
    e.preventDefault();
    setBtnThird(<Spinner color="default" />);
    setVerification(true);
    const formData = new FormData(e.target);
    const formErros = validateForm(formData, "pin-generate");
    setError(formErros);
    if (Object.keys(formErros).length === 0) {

      formData.append("country_code", countryCode);
      formData.append("phone", phoneNumber);
      formData.append("name", name);
      formData.append("last_name", lastName);
      formData.append("source", "Register");
      formData.append("country", countryName);
      formData.append("email", userEmail);
      formData.append("examname", examname);
      formData.append("service_id", 1);

      const success = await PinGenerate(formData);
      if (success) {
        if (success.status == 1) {
          try {
            setVerification(false);
            const jwtToken = success.jwt_token;
            const userData = {
              name: success?.userData?.name,
              lastName: success?.userData?.last_name,
              countryCode: success?.userData?.country_code,
              countryName: success?.userData?.country,
              phoneNumber: success?.userData?.phone,
            };
            const expirationTime = 86400 * 30;
            document.cookie = `_token=${jwtToken}; expires=${new Date(
              Date.now() + expirationTime * 1000
            ).toUTCString()}; path=/; domain=${process.env.NEXT_PUBLIC_COOKIE_DOMAIN
              }`;
            setActiveModal("modal4");
            setBtnThird("Continue");
            dispatch(setAuthData(userData));
            setTimeout(() => {
              onOpenChange(false);
            }, 2000);
          } catch (error) {
            console.error(error);
          } finally {
            if (redirectUrl) navigate(redirectUrl);
            else router.refresh();
          }
        }
      }
    } else {
      setVerification(false);
      setBtnThird("Continue");
    }
  };

  useEffect(() => {
    navigator.appVersion.includes("iPhone") && navigator.appVersion.includes("Mobile") ? setIsIPhoneNot(false) : setIsIPhoneNot(true);
  }, [isIPhoneNot]);

  return (
    <div>
      <Modal
        shouldBlockScroll={isIPhoneNot}
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        radius="lg"
        onClose={handleModalClose}
        isDismissable={false}
        placement="auto"
        size="lg"
        classNames={{
          body: "w-full ",
          wrapper: "m-auto",
          backdrop: "bg-[#242529]/80 backdrop-opacity-40 h-full w-full",
          base: "relative border-[#292f46] bg-[#E6F0FA] dark:bg-[#006ac9] text-[#000] rounded-[20px] p-0 lg:p-2 overflow-visible	",
          header: "",
          footer: "",
          closeButton:
            "text-black right-0 sm:-right-2 shadow-sm -top-3 p-1.5 rounded-full bg-white",
        }}
      >
        <ModalContent className="sm:w-fit sm:rounded-large m-0 sm:m-1  rounded-b-none">
          {(onclose) => {
            return (
              <>
                {activeModal === "modal1" && (
                  <ModalBody className="px-3">
                    <Image
                      src="/test-preparation/modal/login-wave.png"
                      width={490}
                      height={85}
                      className="h-auto absolute left-0 right-0 top-[13%] w-full"
                      alt="wave"
                    />
                    <form onSubmit={mobileVerification}>
                      <div className=" flex flex-col gap-4 transition-all">
                        <div className="relative">
                          <p className="text-[18px] lg:text-xl font-semibold text-center mt-2 lg:mt-0">
                            Register Now and Get{" "}
                            <span className="uppercase text-[#208A43]">
                              FREE
                            </span>
                          </p>
                          <Image
                            src="/test-preparation/modal/left-arrow.png"
                            width={45}
                            height={65}
                            alt="arrows"
                            className="absolute -left-2 md:left-4 top-3"
                          />
                          <Image
                            src="/test-preparation/modal/right-arrow.png"
                            width={45}
                            height={65}
                            alt="arrows"
                            className="absolute -right-2 md:right-4 top-3"
                          />
                          <div className="w-full flex justify-center gap-2 lg:gap-7 mb-8 sm:mb-6 mt-10 lg:my-10">
                            <div className="w-[38%] sm:w-[28%] text-center rounded-[11px] border-1 border-[#51B53C] bg-[#F7FFF5] p-1 lg:px-2 pb-3">
                              <span className="inline-block -translate-y-6">
                                <svg
                                  width="49"
                                  height="48"
                                  viewBox="0 0 49 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="24.4366"
                                    cy="24.039"
                                    r="23.3684"
                                    fill="#F7FFF5"
                                    stroke="#51B53C"
                                    strokeWidth="1.03859"
                                  ></circle>
                                  <path
                                    d="M34.4366 27.0391V21.0391C34.4366 16.0391 32.4366 14.0391 27.4366 14.0391H21.4366C16.4366 14.0391 14.4366 16.0391 14.4366 21.0391V27.0391C14.4366 32.0391 16.4366 34.0391 21.4366 34.0391H27.4366C32.4366 34.0391 34.4366 32.0391 34.4366 27.0391Z"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M14.9566 19.1494H33.9166"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M20.9566 14.1494V19.0094"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M27.9166 14.1494V18.5594"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M22.1866 26.4892V25.2892C22.1866 23.7492 23.2766 23.1192 24.6066 23.8892L25.6466 24.4892L26.6866 25.0892C28.0166 25.8592 28.0166 27.1192 26.6866 27.8892L25.6466 28.4892L24.6066 29.0892C23.2766 29.8592 22.1866 29.2292 22.1866 27.6892V26.4892V26.4892Z"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                              <p className="text-[12px] lg:text-[15px] font-medium text-center capitalize">
                                <strong>FREE</strong> {examname == "ielts" || examname == "pte" ? 'Demo Class' : 'Test Preparation'}
                              </p>
                            </div>
                            <div className="w-[38%] sm:w-[28%] text-center rounded-[11px] border-1 border-[#51B53C] bg-[#F7FFF5] p-1 lg:px-2 pb-3 translate-y-10">
                              <span className="inline-block -translate-y-6">
                                <svg
                                  width="49"
                                  height="48"
                                  viewBox="0 0 49 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="24.1705"
                                    cy="24.1182"
                                    r="23.3684"
                                    fill="#F7FFF5"
                                    stroke="#51B53C"
                                    strokeWidth="1.03859"
                                  ></circle>
                                  <path
                                    d="M24.5405 20.998H29.7905"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M18.5505 20.998L19.3005 21.748L21.5505 19.498"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M24.5405 27.998H29.7905"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M18.5505 27.998L19.3005 28.748L21.5505 26.498"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M21.1705 34.1182H27.1705C32.1705 34.1182 34.1705 32.1182 34.1705 27.1182V21.1182C34.1705 16.1182 32.1705 14.1182 27.1705 14.1182H21.1705C16.1705 14.1182 14.1705 16.1182 14.1705 21.1182V27.1182C14.1705 32.1182 16.1705 34.1182 21.1705 34.1182Z"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                              <p className="text-[12px] lg:text-[15px] font-medium text-center capitalize block">
                                <strong className="block">FREE</strong>
                                {examname == "ielts" || examname == "pte" ? (
                                  <>
                                    Pre-
                                    <span className="inline-block text-test-prep font-semibold uppercase">
                                      {examname}
                                    </span>
                                    {" "}Test
                                  </>
                                ) : (
                                  "Visa Assistance"
                                )}
                              </p>
                            </div>
                            <div className="w-[38%] sm:w-[28%] text-center rounded-[11px] border-1 border-[#51B53C] bg-[#F7FFF5] p-1 lg:px-2 pb-3">
                              <span className="inline-block -translate-y-6">
                                <svg
                                  width="49"
                                  height="48"
                                  viewBox="0 0 49 48"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <circle
                                    cx="24.7375"
                                    cy="24.039"
                                    r="23.3684"
                                    fill="#F7FFF5"
                                    stroke="#51B53C"
                                    strokeWidth="1.03859"
                                  ></circle>
                                  <path
                                    d="M21.8976 22.9091C21.7976 22.8991 21.6776 22.8991 21.5676 22.9091C19.1876 22.8291 17.2976 20.8791 17.2976 18.4791C17.2976 16.0291 19.2776 14.0391 21.7376 14.0391C24.1876 14.0391 26.1776 16.0291 26.1776 18.4791C26.1676 20.8791 24.2776 22.8291 21.8976 22.9091Z"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M29.1476 16.0391C31.0876 16.0391 32.6476 17.6091 32.6476 19.5391C32.6476 21.4291 31.1476 22.9691 29.2776 23.0391C29.1976 23.0291 29.1076 23.0291 29.0176 23.0391"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M16.8975 26.5991C14.4775 28.2191 14.4775 30.8591 16.8975 32.4691C19.6475 34.3091 24.1575 34.3091 26.9075 32.4691C29.3275 30.8491 29.3275 28.2091 26.9075 26.5991C24.1675 24.7691 19.6575 24.7691 16.8975 26.5991Z"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M31.0775 32.0391C31.7975 31.8891 32.4775 31.5991 33.0375 31.1691C34.5975 29.9991 34.5975 28.0691 33.0375 26.8991C32.4875 26.4791 31.8175 26.1991 31.1075 26.0391"
                                    stroke="#51B53C"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </span>
                              <p className="text-[12px] lg:text-[15px] font-medium text-center capitalize">
                                1-1 <br /> Counselling
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-1 items-center justify-center">
                          <hr className="w-full p-[0.4px] bg-[#000000] bg-opacity-10" />
                          <p className="text-[13px] text-[2B3340] mt-2">
                            Certified by
                          </p>
                          <div className="flex items-center justify-center gap-6 my-2">
                            <Image
                              src="/test-preparation/modal/british-council.png"
                              width={75}
                              alt="certified labels"
                              height={21}
                              className="sm:w-auto sm:h-auto"
                            />
                            <Image
                              src="/test-preparation/modal/icef.png"
                              width={57}
                              height={21}
                              alt="certified labels"
                              className="w-auto h-auto"
                            />
                            <Image
                              src="/test-preparation/modal/ciac.png"
                              width={44}
                              height={29}
                              alt="certified labels"
                              className="w-auto h-auto"
                            />
                            <Image
                              src="/test-preparation/modal/cca.png"
                              width={32}
                              height={32}
                              alt="certified labels"
                              className="w-auto h-auto"
                            />
                          </div>
                        </div>
                        <div className="p-2 lg:p-4 bg-white rounded-[15px] flex flex-col gap-2 lg:gap-3 shadow-custom">
                          <div className="flex items-center gap-2 rounded-lg border-[1px] border-[#B6C2E2] p-1 relative">
                            <Select
                              className="w-[40%] md:w-1/3 font-medium text-[16px]"
                              aria-label="Select Country"
                              radius="sm"
                              name="country_code"
                              placeholder="Country"
                              id="countrySelect"
                              onChange={(e) => { setVerification(false); setCountryData(e.target.value); }}
                              classNames={{
                                trigger: "h-10",
                              }}
                              startContent={<FaGlobe className="w-5 h-5" />}
                              defaultSelectedKeys={countryData ? [countryData] : [defaultKey ? defaultKey : '91-India']}
                            >
                              {countryArray &&
                                Object.entries(countryArray.country).map(
                                  ([key, country], index) => (
                                    <SelectItem
                                      key={`${country.code}-${country.name}`}
                                      startContent={
                                        <Avatar
                                          alt="Argentina"
                                          className="w-6 h-6"
                                          src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${country.image}`}
                                        />
                                      }
                                      aria-labelledby="Select Country"
                                      data-sort_code={country.sort_code}
                                      data-country={country.name}
                                      alt={country.name}
                                      value={`${country.name}@#$?${country.code}`}
                                      textValue={`${country.sort_code} +${country.code}`}
                                    >
                                      {country.name}
                                    </SelectItem>
                                  )
                                )}
                            </Select>
                            <Input
                              className="w-[60%] md:w-2/3 "
                              type="number"
                              radius="sm"
                              onInput={(e) => {
                                e.target.value = e.target.value
                                  .replace(/[^0-9]/g, "")
                                  .replace(/^0+/, "");
                              }}
                              name="phone"
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              labelPlacement="outside"
                              placeholder="Phone Number"
                              value={phoneNumber ? phoneNumber : ""}
                              onKeyUp={handleInputAndChange}
                              classNames={{
                                label: "font-medium bg-white",
                                inputWrapper:
                                  "p-0 bg-transparent shadow-none data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent",
                                input:
                                  "text-gray-300 font-medium py-2 px-0 font-medium text-[16px]",
                              }}
                            />
                            <span className="text-[#FF2D46] text-[13px] block absolute -bottom-6 left-0 font-medium">
                              {error?.phone}
                            </span>
                          </div>
                          <div
                            className={`flex items-center mt-4 gap-2 ${isVisible ? "hidden" : ""
                              }`}
                          >
                            <div className="w-1/2 rounded-lg border-[1px] border-[#B6C2E2] p-1 relative">
                              <Input
                                type="text"
                                radius="sm"
                                name="name"
                                onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z]/g, ""); }}
                                onChange={(e) => setName(e.target.value)}
                                labelPlacement="outside"
                                placeholder="First Name"
                                classNames={{
                                  label:
                                    "font-medium bg-white text-[#445275] text-[14px]",
                                  inputWrapper:
                                    "shadow-none bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent text-[14px font-medium]",
                                  input:
                                    "text-gray-300 font-medium py-2 px-0 font-medium text-[16px]",
                                }}
                              />
                              <span className="text-[#FF2D46] text-[13px] block absolute -bottom-6 left-0 font-medium">
                                {error?.name}
                              </span>
                            </div>
                            <div className="w-1/2 rounded-lg border-[1px] border-[#B6C2E2] p-1 relative">
                              <Input
                                type="text"
                                name="last_name"
                                onInput={(e) => { e.target.value = e.target.value.replace(/[^a-zA-Z]/g, ""); }}
                                radius="sm"
                                onChange={(e) => setLastName(e.target.value)}
                                labelPlacement="outside"
                                placeholder="Last Name"
                                classNames={{
                                  label:
                                    "font-medium bg-white text-[#445275] text-[14px]",
                                  inputWrapper:
                                    "shadow-none bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent text-[14px font-medium]",
                                  input:
                                    "text-gray-300 font-medium py-2 px-0 font-medium text-[16px]",
                                }}
                              />
                              <span className="text-[#FF2D46] text-[13px] block absolute -bottom-6 left-0 font-medium">
                                {error?.last_name}
                              </span>
                            </div>
                          </div>
                          <div
                            className={`flex items-center mt-2 gap-2 ${!isCounrtyIndia && !isVisible ? "" : "hidden"
                              }`}
                          >
                            <div className="w-full rounded-lg border-[1px] border-[#B6C2E2] p-1 relative">
                              <Input
                                type="text"
                                name="email"
                                radius="sm"
                                onChange={(e) => setUserEmail(e.target.value)}
                                labelPlacement="outside"
                                placeholder="Enter Your Email"
                                classNames={{
                                  label:
                                    "font-medium bg-white text-[#445275] text-[14px]",
                                  inputWrapper:
                                    "shadow-none bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent text-[14px font-medium]",
                                  input:
                                    "text-gray-300 font-medium py-2 px-0 font-medium text-[16px]",
                                }}
                              />
                              <span className="text-[#FF2D46] text-[13px] block absolute -bottom-6 left-0 font-medium">
                                {error?.email}
                              </span>
                            </div>
                          </div>

                          <Checkbox
                            defaultSelected
                            size="sm"
                            radius="sm"
                            color="primary"
                            className="mt-2 mb-1 py-0"
                          >
                            <span className="text-[#697386] text-[12px] lg:text-[15px]">
                              I agree to receive whatsapp messages from gradding
                            </span>
                          </Checkbox>
                          <Button
                            type="submit"
                            className="bg-test-prep text-white font-semibold rounded-lg p-2 text-[14px] lg:text-base lg:p-6"
                            disabled={verification}
                          >
                            {btnFirst}
                          </Button>
                        </div>
                      </div>
                    </form>
                  </ModalBody>
                )}
                {activeModal === "modal2" && (
                  <ModalBody className="px-3 lg:w-[500px]">
                    <div className=" flex flex-col gap-4">
                      <Player
                        src={pinlottie}
                        id="pinlottie"
                        autoplay
                        loop
                        className="w-[97px] h-[97px] xl:w-[120px] xl:h-[120px] m-auto"
                      ></Player>
                      <p className="text-2xl font-semibold text-center">
                        Verification Code
                      </p>
                      <div className="grid items-center flex-col sm:flex-row  justify-center sm:flex-nowrap  gap-1 text-[14px] sm:text-[16px] text-center text-[#2B3340] capitalize">
                        Please enter 4 digit code sent to
                        <div className="flex gap-1 justify-center">
                          <p className="text-[#006ac9] inline-block font-medium sm:ml-1">
                            {isCounrtyIndia ? `: +${countryCode} ${phoneNumber}` : `${userEmail}`}                          </p>
                          <div className="bg-[#f5f7f9] block sm:inline-block rounded-full p-1 sm:p-1.5 w-fit h-fit cursor-pointer">
                            <BsPencilFill className="text-[#006ac9] text-[10px] sm:text-[12px]" onClick={openFirstModal} />
                          </div>
                        </div>
                      </div>
                      <form onSubmit={otpVerification}>
                        <div className="block m-auto w-fit">
                          <InputOTP name="otp" maxLength={4} value={otpCode} id="otpInput" onChange={(value) => setOtpCode(value)}>
                            <InputOTPGroup className="gap-2">
                              <InputOTPSlot
                                className="rounded-lg border-[#B6C2E2] border"
                                index={0}
                              />
                              <InputOTPSlot
                                className="rounded-lg border-[#B6C2E2] border"
                                index={1}
                              />
                              <InputOTPSlot
                                className="rounded-lg border-[#B6C2E2] border"
                                index={2}
                              />
                              <InputOTPSlot
                                className="rounded-lg border-[#B6C2E2] border"
                                index={3}
                              />
                            </InputOTPGroup>
                          </InputOTP>
                        </div>
                        <span className="text-[#FF2D46] text-center text-[14px] block font-medium">
                          {error?.otp}
                        </span>
                        <div className="text-[14px] font-medium mx-auto my-3 w-fit">
                          <p className="inline-block mr-1 capitalize">
                            didn't get it?
                          </p>
                          {resendCode ?
                            <>
                              <p
                                className="inline-block text-[#006ac9] capitalize">
                                Resend Code
                              </p>
                              <Timer initialDuration={timer} setInitialDuration={setInitialDuration} />
                            </>
                            :
                            <p
                              className="inline-block text-[#006ac9] capitalize cursor-pointer"
                              onClick={handlePinReset}
                            >
                              Resend Code
                            </p>
                          }
                        </div>
                        <Button
                          type="submit"
                          className="bg-test-prep text-white font-semibold rounded-lg mt-3 flex p-6 w-2/3 m-auto cursor-pointer"
                          disabled={verification}
                        >
                          {btnSecond}
                        </Button>
                      </form>
                      {/* <Checkbox
                        className="m-auto"
                        defaultSelected
                        size="sm"
                        radius="sm"
                        color="primary"
                      >
                        <span className="text-[13px] sm:text-[15px]">I agree to receive whatsapp messages from gradding</span>
                      </Checkbox> */}
                    </div>
                  </ModalBody>
                )}
                {activeModal === "modal3" && (
                  <ModalBody>
                    <div className=" flex flex-col gap-4">
                      <Player
                        src={pinlottie}
                        id="pinlottie"
                        autoplay
                        loop
                        className="w-[97px] h-[97px] xl:w-[120px] xl:h-[120px] m-auto"
                      ></Player>

                      <p className="text-2xl font-semibold text-center capitalize">
                        {pinText}
                      </p>
                      <div className="flex items-center  justify-center  gap-1 text-[16px] text-center text-[#2B3340] capitalize">
                        <p className="text-[#006ac9] inline-block font-medium ml-1">
                          +{countryCode} {phoneNumber}
                        </p>
                        <div className="bg-[#f5f7f9] inline-block rounded-full p-1.5 w-fit h-fit cursor-pointer">
                          <BsPencilFill
                            className="text-[#006ac9] text-[12px]"
                            onClick={openFirstModal}
                          />
                        </div>
                      </div>
                      <form onSubmit={pinStatus ? pinVerifcation : pinGenerate}>
                        <div className="block m-auto w-fit mb-3">
                          <InputOTP name="pin" maxLength={4}>
                            <InputOTPGroup className="gap-2">
                              <InputOTPSlot
                                className="rounded-lg border-[#B6C2E2] border"
                                index={0}
                              />
                              <InputOTPSlot
                                className="rounded-lg border-[#B6C2E2] border"
                                index={1}
                              />
                              <InputOTPSlot
                                className="rounded-lg border-[#B6C2E2] border"
                                index={2}
                              />
                              <InputOTPSlot
                                className="rounded-lg border-[#B6C2E2] border"
                                index={3}
                              />
                            </InputOTPGroup>
                          </InputOTP>
                        </div>
                        <span className="text-[#FF2D46] text-[14px] text-center block font-medium">
                          {error?.pin}
                        </span>
                        {optionsVisible && pinStatus ? (
                          <div className="text-[14px] font-medium mx-auto w-fit my-3">
                            <p className="inline-block mr-1 capitalize">
                              forget pin?
                            </p>
                            <p
                              className="inline-block text-[#006ac9] capitalize cursor-pointer"
                              onClick={handlePinReset}
                            >
                              Reset
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                        <Button
                          type="submit"
                          className="bg-test-prep text-white font-semibold flex rounded-lg p-6 w-2/3 m-auto cursor-pointer"
                          disabled={verification}
                        >
                          {btnThird}
                        </Button>
                      </form>

                      <center className="text-[14px] m-auto text-[#697386]">
                        By continuing, you agree to our
                        <Link
                          href={"#"}
                          className="inline-block underline mx-[3px]"
                        >
                          Terms of service
                        </Link>
                        and
                        <Link
                          href={"#"}
                          className="inline-block underline mx-[3px]"
                        >
                          Privacy policy
                        </Link>
                      </center>
                    </div>
                  </ModalBody>
                )}
                {activeModal === "modal4" && (
                  <ModalBody>
                    <div className="flex flex-col gap-4 py-6">
                      <Player
                        src={successlottie}
                        id="successlottie"
                        alt="success lottie"
                        autoplay
                        loop
                        className="w-[97px] h-[97px] xl:w-[120px] xl:h-[120px] m-auto"
                      ></Player>

                      <p className="text-2xl font-semibold text-center capitalize">
                        Login Successful
                      </p>
                    </div>
                  </ModalBody>
                )}
              </>
            );
          }}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default LoginSignup;
