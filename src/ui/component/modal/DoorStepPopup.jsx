"use client";
import {
  Avatar,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Select,
  SelectItem,
  useDisclosure,
  Spinner,
} from "@nextui-org/react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa6";
import SuccessPopup from "./SuccessPopup";
import { usePathname } from "next/navigation";
import {
  BookFreeSession,
  getCountryArray,
  getMobileVerification,
} from "@/lib/website";
import { getCookie } from "@/lib/cookies";
import { setdoorStepState } from "@/redux/slices/doorStepSlice";

const DoorStepPopup = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const openPopup = useSelector((state) => state.doorStepState.onOpen);
  const [countryArray, setCountryArray] = useState([]);
  const [error, setError] = useState({});
  const pathname = usePathname();
  const [activeModal, setactiveModal] = useState("modal1");
  const inputRef = useRef(null);
  const [verification, setVerification] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [countryCode, setCountryCode] = useState("91");
  const [btnFirst, setBtnFirst] = useState("Book Session");
  const [isIPhoneNot,setIsIPhoneNot] = useState(null);

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (openPopup == "true") {
      onOpen();
    }
  }, [openPopup, onOpen]);

  const handleModalClose = () => {
    setactiveModal("modal1");
    dispatch(setdoorStepState({ status: "false" }));
    onOpenChange(false);
  };

  const fetchData = async () => {
    try {
      const responseData = await getCountryArray();
      setCountryArray(responseData);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    let requiredKeys = [];
    if (!isVisible) {
      requiredKeys = ["name", "last_name", "phone", "slot"];
    } else {
      requiredKeys = ["phone", "slot"];
    }

    requiredKeys.forEach((key) => {
      const value = formData.get(key);
      if (key == "phone") {
        if (!value || value === "null" || value === "0" || value.length != 10) {
          errors[key] = `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } is required`;
        }
      } else {
        if (!value || value === "null" || value === "0") {
          errors[key] = `${
            key.charAt(0).toUpperCase() + key.slice(1)
          } is required`;
        }
      }
    });

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const formErrors = validateForm(formData);
    setError(formErrors);

    if (Object.keys(formErrors).length === 0) {
      formData.append("url", pathname);
      formData.append("source", "Book-Free-Session");
      formData.append("popup", "BookSession");
      const webJourneyCookieName = "web_journey";
      const journey = getCookie(webJourneyCookieName);
      if (journey) {
        formData.append("webJourney", journey);
        deleteCookie("web_journey");
      }
      const success = await BookFreeSession(formData);
      if (success && success.status) {
        e.target.reset();
        setactiveModal("modal2");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setError((prevErrors) => {
      const updatedErrors = { ...prevErrors };
      delete updatedErrors[name];
      return updatedErrors;
    });
  };

  const handleCountryChange = async () => {
    if (inputRef?.current?.value) {
      let code = inputRef.current.value.split("@#$?")[1];
      setCountryCode(code);
    }
  };

  const handleInputAndChange = async (e) => {
    await handleCountryChange();
    let number = e.target.value;
    number = number.replace(/\./g, "");
    if (number.length > 15) {
      number = number.slice(0, 15);
    }
    e.target.value = number;
    if (number.length == 10) {
      setBtnFirst(<Spinner color="default"/>);
      const formData1 = new FormData();
      formData1.append("country_code", countryCode);
      formData1.append("phone", number);
      const successData = await getMobileVerification(formData1);
      if (successData?.status == 1) {
        setBtnFirst("Book Session");
        setIsVisible(true);
        setVerification(false);
      } else if (successData?.status == 0) {
        setBtnFirst("Book Session");
        setIsVisible(false);
        setVerification(false);
      }
    }
  };

  useEffect(()=>{
    navigator.appVersion.includes("iPhone") && navigator.appVersion.includes("Mobile") ? setIsIPhoneNot(false) : setIsIPhoneNot(true);
  },[isIPhoneNot]);

  return (
    <Modal
      shouldBlockScroll={isIPhoneNot}
      backdrop="blur"
      size="5xl"
      classNames={{
        body: "relative",
        wrapper: "",
        backdrop: "",
        base: "base-modal overflow-hidden",
        closeButton:
          "right-0 sm:right-2 -top-1 sm:-top-0 p-1.5 rounded-full z-50",
      }}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      onClose={handleModalClose}
    >
      <ModalContent className="sm:w-fit sm:rounded-large m-0 sm:m-1 rounded-b-none">
        {(onClose) => (
          <>
            {activeModal === "modal1" && (
              <ModalBody className="p-2">
                <form
                  id="bookSessionForm"
                  className="h-full"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col items-center sm:flex-row gap-2 sm:gap-3 claim-popup">
                    <div className="w-full sm:w-[50%]">
                      <Image
                        src="/consultancy-module/doorstepBanner.png"
                        width={523}
                        height={457}
                        alt="Banner Image Popup"
                      />
                    </div>
                    <div className="py-4 px-1 sm:px-4 sm:py-0 w-full sm:w-[48%] flex flex-col gap-2 justify-between">
                      <p className="text-[#1D1D1F] text-[14px] sm:text-2xl text-center sm:my-2 font-medium">
                        Discuss Study Abroad Plan from the comfort of your home!
                      </p>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 rounded-lg border-[1px] border-[#B6C2E2] p-1 relative mt-1.5  w-full">
                          <Select
                            className="w-[38%] sm:w-[40%] font-medium text-[14px]"
                            aria-label="Select Country"
                            radius="sm"
                            name="country_code"
                            placeholder="Country"
                            classNames={{
                              trigger: "h-8 w-full",
                            }}
                            ref={inputRef}
                            onChange={handleCountryChange}
                            startContent={<FaGlobe className="w-5 h-5" />}
                            defaultSelectedKeys={["India@#$?91"]}
                          >
                            {countryArray &&
                              countryArray.country &&
                              Object.entries(countryArray.country).map(
                                ([key, country], index) => (
                                  <SelectItem
                                    key={`${country.name}@#$?${country.code}`}
                                    aria-labelledby="Select Country"
                                    data-sort_code={country.sort_code}
                                    data-country={country.name}
                                    alt={country.name}
                                    value={`${country.name}@#$?${country.code}`}
                                    textValue={`${country.sort_code} +${country.code}`}
                                    startContent={
                                      <Avatar
                                        alt="Argentina"
                                        className="w-6 h-6"
                                        src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${country.image}`}
                                      />
                                    }
                                  >
                                    {country.name}
                                  </SelectItem>
                                )
                              )}
                          </Select>
                          <Input
                            onKeyUp={handleInputAndChange}
                            onChange={handleChange}
                            className="w-[60%] md:w-2/3 "
                            type="number"
                            radius="sm"
                            name="phone"
                            labelPlacement="outside"
                            placeholder="Enter Mobile Number"
                            classNames={{
                              label: "font-medium bg-white",
                              inputWrapper:
                                "p-0 bg-transparent shadow-none data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent",
                              input:
                                "text-gray-300 font-medium py-1 px-0 font-medium text-[16px]",
                            }}
                          />
                        </div>
                        <span className="text-red-500 text-[12px]">
                          {error?.phone}
                        </span>
                        <div
                          className={`flex items-center my-1 gap-4 ${
                            isVisible ? "hidden" : ""
                          }`}
                        >
                          <div className="w-1/2 flex flex-col gap-1">
                            <div className=" rounded-lg border-[1px] border-[#B6C2E2] p-1 relative">
                              <Input
                                onKeyUp={handleChange}
                                type="text"
                                radius="sm"
                                name="name"
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
                            </div>
                            <span className="text-red-500 text-[12px] block">
                              {error?.name}
                            </span>
                          </div>
                          <div className="flex w-1/2 flex-col gap-1">
                            <div className=" rounded-lg border-[1px] border-[#B6C2E2] p-1 relative">
                              <Input
                                onKeyUp={handleChange}
                                type="text"
                                name="last_name"
                                radius="sm"
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
                            </div>
                            <span className="text-red-500 text-[12px]">
                              {error?.last_name}
                            </span>
                          </div>
                        </div>
                        <div className="rounded-lg border-[1px] border-[#B6C2E2] p-1 shadow-none relative mt-1.5  w-full">
                          <Select
                            className="font-medium text-[14px]"
                            aria-label="time slot"
                            radius="sm"
                            placeholder="Choose Time Slot"
                            classNames={{
                              trigger: "h-8 w-full bg-transparent",
                            }}
                            name="slot"
                            onChange={handleChange}
                          >
                            <SelectItem
                              key={"9:00AM - 10:00AM"}
                              className="text-[14px]"
                            >
                              9:00AM - 10:00AM
                            </SelectItem>
                            <SelectItem
                              key={"10:00AM - 11:00AM"}
                              className="text-[14px]"
                            >
                              10:00AM - 11:00AM
                            </SelectItem>
                            <SelectItem
                              key={"11:00AM - 12:00PM"}
                              className="text-[14px]"
                            >
                              11:00AM - 12:00PM
                            </SelectItem>
                            <SelectItem
                              key={"12:00PM - 1:00PM"}
                              className="text-[14px]"
                            >
                              12:00PM - 1:00PM
                            </SelectItem>
                            <SelectItem
                              key={"1:00PM - 2:00PM"}
                              className="text-[14px]"
                            >
                              1:00PM - 2:00PM
                            </SelectItem>
                            <SelectItem
                              key={"2:00PM - 3:00PM"}
                              className="text-[14px]"
                            >
                              2:00PM - 3:00PM
                            </SelectItem>
                            {/* <SelectItem key={'2:00PM - 3:00PM'} className="text-[14px]">2:00PM - 3:00PM</SelectItem> */}
                            <SelectItem
                              key={"3:00PM - 4:00PM"}
                              className="text-[14px]"
                            >
                              3:00PM - 4:00PM
                            </SelectItem>
                            <SelectItem
                              key={"4:00PM - 5:00PM"}
                              className="text-[14px]"
                            >
                              4:00PM - 5:00PM
                            </SelectItem>
                            <SelectItem
                              key={"5:00PM - 6:00PM"}
                              className="text-[14px]"
                            >
                              5:00PM - 6:00PM
                            </SelectItem>
                          </Select>
                        </div>
                        <span className="text-red-500 text-[12px]">
                          {error?.slot}
                        </span>
                      </div>
                      <div className="flex flex-col justify-center gap-[10px]">
                        <Button
                          type="submit"
                          className="w-full text-base btn-test-prep h-12 text-white font-medium p-4 rounded-[12px] hover:shadow-[0px_3.46px_13.83px_0px_#FF2D462E] transition-all"
                          disabled={verification}
                        >
                          Book Home Session at 499/-
                        </Button>
                        <span className=" text-base text-[#445275] text-center">
                          OR
                        </span>
                        <Button
                          type="submit"
                          className="w-full bg-transparent border-2 text-base border-[#066AC9] h-12 text-[#066AC9] font-medium p-4 rounded-[12px] hover:text-white hover:bg-[#066AC9] transition-all"
                          disabled={verification}
                        >
                          Book Online Session for FREE
                        </Button>
                      </div>
                    </div>
                  </div>
                </form>
              </ModalBody>
            )}
            {activeModal === "modal2" && (
              <ModalBody>
                <SuccessPopup
                  head="Congratulations!"
                  subhead="Your session has been successfully booked."
                  desc="Our Counsellor will contact you soon!"
                  ctaDesc="Close"
                  handleModalClose={handleModalClose}
                  link={null}
                />
              </ModalBody>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DoorStepPopup;
