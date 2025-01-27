"use client";
import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const ChooseDesiredCourseStrip = () => {
    const [haveTaken,setHaveTaken] = useState(true);
    const takenStyle = `border-2 border-[#f3601e] bg-[#f3601e4d] text-[#f3601e] translate-y-[-10px] before:content-tickMark before:absolute before:top-[-10px] before:left-[-10px]`;

  return (

      <div className="w-full lead-form-div border-1 border-primary p-[14px] xl:p-[35px] rounded-[25px] bg-white h-fit flex">
        <div className="hidden md:flex w-1/2 text-center flex-col justify-center gap-6 lg:my-8">
            <h2 className="text-[#1d1d1f] text-xl font-bold">Book Your Free Demo Class For PTE</h2>
            <p className="text-[#1d1d1f] text-base font-medium">Score 70+ Score in the first Attempt!</p>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center shadow-[0px_0px_24px_0px_#0000001A_inset] bg-[#F3F6F9] rounded-[20px] p-2.5 xl:p-8">
            <h3 className="text-[#24292d] text-sm font-bold ">Have you taken PTE before?</h3>
            <div className="flex items-center justify-center gap-6 my-4 lg:my-8">
                <span onClick={()=>setHaveTaken(true)} className={`${haveTaken ? takenStyle : "bg-white"} size-[70px] font-medium grid place-items-center shadow-sm rounded-lg cursor-pointer duration-300`}>Yes</span>
                <span onClick={()=>setHaveTaken(false)} className={`${haveTaken ? "bg-white" : takenStyle } size-[70px] font-medium grid place-items-center shadow-sm rounded-lg cursor-pointer duration-300`}>No</span>
            </div>
            <Button className="inline m-auto rounded-lg px-4 text-white bg-[#006ac9] text-base font-medium">Save & Go Next</Button>
        </div>
      </div>
  );
};

export default ChooseDesiredCourseStrip;
