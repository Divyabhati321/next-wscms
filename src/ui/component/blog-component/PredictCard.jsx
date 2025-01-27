import Image from "next/image";
import Link from "next/link";
import React from "react";

const PredictCard = ({ examname, device }) => {
  return (
    <div
      className=" relative bg-[#002F5B] rounded-[16px] p-[14px] lg:p-5 overflow-hidden "
      style={{
        backgroundImage: 'url("/wave.png")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="flex flex-col gap-1 sm:gap-3 justify-center sm:items-center w-[70%] sm:w-full">
        <h3 className=" text-lg sm:text-[22px] text-white font-medium">
          Predict your {examname} {examname !== "PTE" ? "Band" : "Score"}
        </h3>
        {device === "desktop" ? (
          <Image
            src={`${
              process.env.NEXT_PUBLIC_APP_URL
            }predict${examname.toUpperCase()}Mockup.png`}
            className="hidden sm:block w-full -mt-10 -mb-8"
            width={222}
            height={155}
            alt="Test Report Mockup"
            quality={100}
          />
        ) : (
          <Image
            src={`${
              process.env.NEXT_PUBLIC_APP_URL
            }predict${examname.toUpperCase()}MockupMobiel.png`}
            className="sm:hidden absolute bottom-0 right-0"
            width={127}
            height={121}
            alt={`predict${examname}Mockup`}
          />
        )}

        <p className=" text-sm font-normal text-white">
          98% students got exact {examname}{" "}
          {examname !== "PTE" ? "Band" : "Score"}
        </p>
        {examname === "IELTS" ? (
          levelAssessment ? (
            <Link
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}dashboard/pre-ielts-test/report`}
              className="mt-1 sm:mt-0 transition-all ease-in-out hover:scale-105 text-[#002F5B] text-[15px] font-semibold  p-[10px] sm:p-[15px] bg-white rounded-[10px] w-full flex justify-center items-center text-center"
            >
              Get Pre-IELTS Report
            </Link>
          ) : (
            <Link
              href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}dashboard/pre-ielts-test-instructions`}
              className="mt-1 sm:mt-0 transition-all ease-in-out hover:scale-105 text-[#002F5B] text-[15px] font-semibold  p-[10px] sm:p-[15px] bg-white rounded-[10px] w-full flex justify-center items-center text-center"
            >
              Start FREE Pre-IELTS Test
            </Link>
          )
        ) : examname === "PTE" ? (
          levelAssessment ? (
            <Link
              href={`/dashboard/pte-score-predictor/report`}
              className="mt-1 sm:mt-0 transition-all ease-in-out hover:scale-105 text-[#002F5B] text-[15px] font-semibold  p-[10px] sm:p-[15px] bg-white rounded-[10px] w-full flex justify-center items-center text-center"
            >
              Score Predictor Report
            </Link>
          ) : (
            <Link
              href={`/dashboard/pte-score-predictor/instruction`}
              // href={`/score-predictor-test/pte/${btoa(Math.floor(Math.random() * 5) + 1)}/speaking`}
              className="mt-1 sm:mt-0 transition-all ease-in-out hover:scale-105 text-[#002F5B] text-[15px] font-semibold  p-[10px] sm:p-[15px] bg-white rounded-[10px] w-full flex justify-center items-center text-center"
            >
              Start FREE PTE Score Predictor Test
            </Link>
          )
        ) : (
          <Link
            href={`${process.env.NEXT_PUBLIC_LARAVEL_APP_URL}/test-preparation-ielts-demo-class`}
            className="mt-1 sm:mt-0 transition-all ease-in-out hover:scale-105 text-[#002F5B] text-[15px] font-semibold  p-[10px] sm:p-[15px] bg-white rounded-[10px] w-full flex justify-center items-center text-center"
          >
            Start FREE Pre-IELTS Test
          </Link>
        )}
      </div>
    </div>
  );
};

export default PredictCard;
