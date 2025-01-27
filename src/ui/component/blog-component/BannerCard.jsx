"use client";
import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import CallusNow from "@/ui/component/common/CallusNow";
import AuthButton from "@/ui/component/buttons/AuthButton";
import Image from "next/image";

const BannerCard = ({ bannerCardMobile }) => {
  return (
    <div className="hidden w-full flex-wrap xl:flex-nowrap sm:flex gap-3 sm:gap-5 xl:gap-3 2xl:gap-8 items-stretch relative">
      <div className="w-full xl:w-1/2 bg-white rounded-[15px] shadow-custom px-5 py-3 relative z-30">
        <p className="text-[15px] font-semibold mb-3">
          What Gradding Offers for you!!
        </p>
        <div className="w-full justify-between flex flex-wrap gap-x-2 gap-y-1 ">
          {bannerCardMobile?.bannerCardDetails.map((bannerCard, index) => (
            <div
              className={`group w-full md:w-[45%] rounded-[7px] transition-all cursor-pointer flex items-start gap-2 py-2`}
              key={index}
            >
              <div className="bg-[#FFF0E5] rounded-full p-3 w-fit">
                <Image
                  priority
                  src={bannerCard.icon}
                  width={18}
                  height={18}
                  alt={bannerCard.title}
                  className="w-full"
                />
              </div>
              <div className="w-auto">
                <h2 className="text-sm text-black font-semibold">
                  {bannerCard?.title}
                </h2>
                <p className="text-xs text-[#646464] my-1">
                  {bannerCard?.desc}
                </p>
                {bannerCard.url == "bookSession" ? (
                  <AuthButton
                    booksession={"true"}
                    className="text-[14px] 2xl:text-[15px] text-[#F37E20] inline-flex items-center font-medium uppercase"
                  >
                    Apply Now
                    <FaAngleRight className="" />
                  </AuthButton>
                ) : (
                  <Link
                    prefetch={false}
                    href={
                      bannerCard && bannerCard.url
                        ? process.env.NEXT_PUBLIC_LARAVEL_APP_URL +
                          bannerCard.url
                        : "#"
                    }
                    className="text-[14px] 2xl:text-[15px] text-[#F37E20] inline-flex items-center font-medium uppercase"
                  >
                    Apply Now
                    <FaAngleRight className="" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[50%] xl:w-[24%] justify-between bg-white rounded-[15px] shadow-custom flex flex-wrap gap-3 p-4 relative z-30">
        <p className="text-[15px] font-semibold">
          Choose Country to Study Abroad
        </p>
        {bannerCardMobile?.countryCardDetails.map((countryCard, index) => (
          <Link
            prefetch={false}
            href={process.env.NEXT_PUBLIC_LARAVEL_APP_URL + countryCard.url}
            className={` w-full md:w-[26%] rounded-[7px] transition-all p-1 2xl:p-2 cursor-pointer flex flex-col items-center gap-1`}
            key={index}
          >
            <Image
              priority
              src={countryCard.icon}
              width={39}
              height={38}
              alt="country icnon"
              className={`hover:shadow-[0_0_12px_0_rgba(29,58,83,.25)] transition-all  ${
                index === 5 ? "rounded-[10px]" : "rounded-full"
              }`}
            />
            <h2 className="text-xs text-black font-semibold uppercase">
              {countryCard?.title}
            </h2>
          </Link>
        ))}
      </div>
      <div className="w-full md:w-[45%] xl:w-1/4 bg-[#FFF0E5] rounded-[15px] shadow-custom hidden sm:flex flex-wrap gap-2 p-3 relative z-30">
        <CallusNow />
      </div>
    </div>
  );
};

export default BannerCard;
