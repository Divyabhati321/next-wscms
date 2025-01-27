"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
const ContactPopover = ({contactPopover}) => {
    const [isVisible, setIsVisible] = useState(false);
    const onClickHideHandler = () => {
        setIsVisible(false);
      };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 30 seconds

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className={` w-fit h-fit border-[1px] rounded-lg bg-[#fff] p-3 lg:px-2 lg:py-3 2xl::py-4 2xl:px-6 shadow-lg fixed z-40 right-3 lg:right-10 transition-all ${isVisible ? 'bottom-3 lg:bottom-20' : '-bottom-60'}`}>
      <span className='cursor-pointer p-0.5 lg:p-2 bg-white rounded-full border-[1px] border-[#E0E0E0] absolute -right-3 -top-3 lg:-right-4 lg:-top-4' onClick={onClickHideHandler}>
        <svg className='w-[16px] h-[16px] 2xl:w-[21px] 2xl:h-[21px]' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.0879 5.73438L5.08789 15.7344" stroke="#8F9BBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5.08789 5.73438L15.0879 15.7344" stroke="#8F9BBA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      <div className="mb-1 lg:mb-3 flex items-center gap-2">
        <Image src="/test-preparation/callIcon.png" alt='call' width={48} height={48} className='w-[30px] lg:w-[38px] 2xl:w-auto 2xl:h-auto'/>
        <div className="flex flex-col gap-0 lg:gap-1">
          <p className='text-sm lg:text-[15px] 2xl:text-base font-medium'>Need Help?</p>
          <Link href={`tel: ${contactPopover?.phone}`} className='text-[#D80027] font-semibold text-[13px] lg:text-[14px] 2xl:text-base underline cursor-pointer'>Call an Expert Now</Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image src="/test-preparation/mapIcon.png" alt='location' width={48} height={48} className='w-[30px] lg:w-[38px] 2xl:w-auto 2xl:h-auto'/>
        <div className="flex flex-col gap-0 lg:gap-1">
          <p className='text-sm lg:text-[15px] 2xl:text-base font-medium'>Visit Nearest Centre</p>
          <Link href={"#"} className='text-[#D80027] font-semibold text-[13px] lg:text-[14px] 2xl:text-base underline cursor-pointer'>Find one near you</Link>
        </div>
      </div>
    </div>
  )
}

export default ContactPopover