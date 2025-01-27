import Image from "next/image";
import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import AuthButton from "@/ui/component/buttons/AuthButton";

const FullMocktestCard = ({ fullMockTest, examname }) => {
  return (
    <div className="">
      <div className="bg-white p-3.5 rounded-[13px]">
        <h2 className=" text-lg font-medium capitalize text-center">
          Practice Makes a Man Perfect!
          <span className="text-[#006ac9] block">
            Take FREE IELTS Mock Tests
          </span>{" "}
        </h2>
        <div className="flex justify-center flex-wrap gap-[12px] my-5">
          <AuthButton
            examname={examname}
            mocktest={"true"}
            url={process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD+'mock-test'}
            className="group relative hover:z-40 z-30 w-[30%] h-auto flex flex-col items-start  rounded-[12px] border-[1px] bg-[#DDFBCD] hover:border-[#C0E100] p-2 hover:shadow-xl hover:scale-105 transition-all"
          >
            <h3 className=" h-full font-semibold text-[14px] text-center capitalize flex items-center justify-center">
              full mock test
            </h3>

            <span className="block play-btn-shadow opacity-0 group-hover:opacity-100 transition-all p-3 rounded-full bg-white/70 absolute top-[40%] left-1/3 m-auto w-fit">
              <FaGooglePlay className="text-test-prep" />
            </span>
          </AuthButton>
          <AuthButton
            examname={examname}
            mocktest={"true"}
            url={process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD+'mock-test'}
            className="overflow-hidden group relative hover:z-40 z-30 w-[30%] h-auto flex flex-col items-start rounded-[12px] border-[1px] p-2 bg-[#FFCECB] hover:shadow-xl hover:scale-105 transition-all"
          >
            <h3 className=" font-semibold text-[14px] capitalize">writing</h3>
            <Image
              width={160}
              height={160}
              alt="mock test"
              src="/test-preparation/mock-test/writing.png"
              className="w-full h-full translate-x-3.5 translate-y-3"
            />
            <span className="block play-btn-shadow opacity-0 group-hover:opacity-100 transition-all p-3 rounded-full bg-white/70 absolute top-[40%] left-1/3 m-auto w-fit">
              <FaGooglePlay className="text-test-prep" />
            </span>
          </AuthButton>
          <AuthButton
            examname={examname}
            mocktest={"true"}
            url={
              fullMockTest && fullMockTest?.mockTestUrl
                ? fullMockTest?.mockTestUrl
                : "#"
            }
            className="overflow-hidden group relative hover:z-40 w-[30%] h-auto flex flex-col items-start rounded-[12px] border-[1px] p-2 bg-[#FFD7BA] hover:shadow-xl hover:scale-105 transition-all z-30"
          >
            <h3 className=" font-semibold text-[14px] capitalize">reading</h3>
            <Image
              width={160}
              height={160}
              alt="mock test"
              src="/test-preparation/mock-test/reading.png"
              className="w-full h-full translate-x-3.5 translate-y-3"
            />
            <span className="block play-btn-shadow opacity-0 group-hover:opacity-100 transition-all p-3 rounded-full bg-white/70 absolute top-[40%] left-1/3 m-auto w-fit">
              <FaGooglePlay className="text-test-prep" />
            </span>
          </AuthButton>
          <AuthButton
            examname={examname}
            mocktest={"true"}
            url={process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD+'mock-test'}
            className="overflow-hidden group relative hover:z-40 z-20 w-[30%] h-auto flex flex-col items-start rounded-[12px] border-[1px] p-2 bg-[#FFF0BD] hover:shadow-xl hover:scale-105 transition-all"
          >
            <h3 className=" font-semibold text-[14px] capitalize">speaking</h3>
            <Image
              width={160}
              height={160}
              alt="mock test"
              src="/test-preparation/mock-test/speaking.png"
              className="w-full h-full translate-x-3.5 translate-y-3"
            />
            <span className="block play-btn-shadow opacity-0 group-hover:opacity-100 transition-all p-3 rounded-full bg-white/70 absolute top-[40%] left-1/3 m-auto w-fit">
              <FaGooglePlay className="text-test-prep" />
            </span>
          </AuthButton>
          <AuthButton
            examname={examname}
            mocktest={"true"}
            url={process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD+'mock-test'}
            className="overflow-hidden group relative hover:z-40 z-10 w-[30%] h-auto flex flex-col items-start rounded-[12px] border-[1px] hov 0E100] p-2 sm:p-6 bg-[#F8FFCF] hover:shadow-xl hover:scale-105 transition-all"
          >
            <h3 className=" font-semibold text-[14px] capitalize">Listening</h3>
            <Image
              width={160}
              height={160}
              alt="mock test"
              src="/test-preparation/mock-test/listening.png"
              className="w-full h-full translate-x-3.5 translate-y-3"
            />
            <span className="block play-btn-shadow opacity-0 group-hover:opacity-100 transition-all p-3 rounded-full bg-white/70 absolute top-[40%] left-1/3 m-auto w-fit">
              <FaGooglePlay className="text-test-prep" />
            </span>
          </AuthButton>
        </div>
        <AuthButton
          examname={examname}
          mocktest={"true"}
          url={process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD+'mock-test'}
          className={`drop-shadow-md block p-3 text-center w-full font-semibold text-sm rounded-[11px] text-white duration-300 transition-all ease-in-out bg-[#006ac9] hover:shadow-[0_0_12px_0_#006ac9] `}
        >
          Start FREE Mock Test
        </AuthButton>
      </div>
    </div>
  );
};

export default FullMocktestCard;
