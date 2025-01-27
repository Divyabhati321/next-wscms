"use server";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { getDevice, getFooterData } from "@/lib/website";
import FooterContact from "./mobile-layout/FooterContact";
import AuthButton from "../component/buttons/AuthButton";
import cityCardData from "@/lib/json/cityCardData";

const Footer = async ({ examname, device }) => {
  if (
    examname !== "ielts" &&
    examname !== "pte" &&
    examname !== "toefl" &&
    examname !== "dolungo"
  ) {
    examname = "";
  }
  const fetchData = async () => {
    try {
      const responseData = await getFooterData();
      return await responseData.result;
    } catch (error) {
      console.error("Error fetching Footer data:", error);
    }
  };

  const footer = await fetchData();
  // const device = getDevice();

  const socialMediaLinks = [
    { icon: <FaFacebookF className="text-[#5d82d1]" />, platform: "facebook" },
    { icon: <FaInstagram className="text-[#c22b72]" />, platform: "instagram" },
    { icon: <FaXTwitter />, platform: "twitter" },
    { icon: <FaLinkedinIn className="text-[#238cc8]" />, platform: "linkedin" },
    { icon: <FaYoutube className="text-red-500" />, platform: "youtube" },
  ];

  return (
    <div
      className={`bg-[#F4F7FE] sm:bg-[#F5F5F7] pt-0 ${
        examname == "ielts" ? "pb-4 sm:pb-0" : ""
      } sm:py-10 lg:py-16 h-full`}
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start justify-between border-[#9A9EA44D] pb-0 lg:pb-8">
          <div className="1/3 m-auto lg:m-0">
            <Link
              href={process.env.NEXT_PUBLIC_LARAVEL_APP_URL}
              className="relative w-fit m-auto block lg:m-0"
            >
              <Image
                src="/logo.png"
                width={131}
                height={41}
                className=""
                alt="gradding logo"
              />
            </Link>
            {footer?.information &&
              footer?.information.contactInfo &&
              Object.entries(footer?.information.contactInfo).map(
                ([key, value]) => (
                  <p
                    className="text-[15px] font-normal my-4 lg:my-2 text-[#6E6E73] text-center lg:text-left"
                    key={key}
                  >
                    {key}
                    <Link
                      href={
                        key == "Toll Free: "
                          ? `tel: ${value}`
                          : `mailto: ${value}`
                      }
                      className="text-black ml-2"
                    >
                      {value}
                    </Link>
                  </p>
                )
              )}
            <div className="flex gap-2 mt-2">
              {socialMediaLinks.map((link, index) => (
                <React.Fragment key={index}>
                  {footer?.socialMedia &&
                    footer?.socialMedia[link.platform] && (
                      <Link
                        prefetch={false}
                        href={footer?.socialMedia[link.platform]}
                        className="w-1/4 bg-white rounded-md hover:shadow-lg p-2 flex justify-center items-center"
                        aria-label="Social Icons"
                      >
                        {link.icon}
                      </Link>
                    )}
                </React.Fragment>
              ))}
            </div>
          </div>
          {device === "desktop" ? (
            <div className="hidden mt-4 lg:mt-0 w-full lg:w-2/3 lg:flex">
              {footer?.rightlist &&
                Object.entries(footer?.rightlist).map(([key, value]) => (
                  <div
                    className="text-lg font-semibold capitalize w-1/4"
                    key={key}
                  >
                    {key}
                    {Object.entries(value).map(([key, value]) => (
                      <div
                        className="text-sm text-[#6E6E73] font-medium my-2 block"
                        key={key}
                      >
                        {value ? (
                          <Link
                            prefetch={false}
                            href={value}
                            className="inline-block hover:translate-x-1 transition-all"
                          >
                            {key}
                          </Link>
                        ) : (
                          <AuthButton
                            booksession={"true"}
                            url="#"
                            className="inline-block hover:translate-x-1 transition-all"
                          >
                            {key}
                          </AuthButton>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          ) : (
            <div className="block lg:hidden w-full my-5">
              <FooterContact footerMenu={footer?.footerMenu} />
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2 py-5 border-b-[1px] border-[#9A9EA44D]">
          <p className="inline-block text-[#74579] font-medium text-[15px] capitalize mr-2">
            We are available in :
          </p>
          {cityCardData.map((value) => (
            <Link
              href={`${
                process.env.NEXT_PUBLIC_LARAVEL_APP_URL
              }/study-abroad-consultants/in/${value?.cityName?.toLowerCase()}`}
              prefetch={false}
              key={value?.cityName?.toLowerCase()}
              className="capitalize py-1 px-2 text-[#006ac9] bg-[#066AC91A] hover:bg-[#006ac9] hover:text-[#fff] font-medium text-[14px] rounded-sm"
            >
              {value?.cityName}
            </Link>
          ))}
        </div>
        <p className="text-[12px] text-[#6E6E73] font-normal border-b-[1px] border-[#9A9EA44D] py-3">
          <span className="inline-block text-[#74579] font-medium text-[13px] capitalize mr-1">
            disclaimer:
          </span>
          logos and other registered trademarks of universities used on this
          platform are held by their respective owners. Gradding does not claim
          ownership or association on them, and their use is purely for
          informational and illustrative purposes.
        </p>
        <div className="flex-wrap gap-2 lg:gap-0 lg:flex-unwrap flex items-center justify-between py-3">
          <div className="w-auto text-[12px] lg:text-[14px] text-[#6E6E73] font-medium">
            Copyrights ©{new Date().getFullYear()} Gradding. All rights
            reserved.
          </div>
          <div className="w-auto gap-1 lg:gap-2 flex items-center">
            {footer?.information &&
              footer?.information.policyInfo &&
              Object.entries(footer?.information.policyInfo).map(
                ([key, value]) => (
                  <Link
                    prefetch={false}
                    href={value}
                    key={key}
                    className="font-semibold lg:font-medium inline-block text-[11px] lg:text-[14px] text-[#6E6E73] text-center"
                  >
                    {key}
                  </Link>
                )
              )}
          </div>
          <div className="w-auto text-[12px] lg:text-[14px] text-[#6E6E73]  font-medium pb-20 sm:pb-0">
            Gradding Rated {footer?.information?.ratingInfo?.rating}/5 based on{" "}
            {footer?.information?.ratingInfo?.total}
            <Link prefetch={false} href={"#"} className="ml-1 underline">
              Reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
