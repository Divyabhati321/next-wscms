'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { setBookState } from '@/redux/slices/bookSessionSlice';

const BannerForm = ({  category, bannerTitle }) => {
  
  let bannerForm = [
    {
      "title": "Finding University",
      "url": "/college-predictor",
    },
    {
      "title": "Finding Country",
      "url": "/college-predictor",
    },
    {
      "title": "Loans",
      "url": "bookSession"
    },
    {
      "url": "/test-preparation",
      "title": "Test Prep (IELTS, PTE, etc.)"
    }
  ];

  let ieltsForm = [
    {
      "title": "Band 6.0 to 7.0",
      "url": '/test-preparation-ielts-demo-class',
    },
    {
      "title": "Band 7.0 to 8.0",
      "url": '/test-preparation-ielts-demo-class',
    },
    {
      "title": "8+ Band",
      "url": '/test-preparation-ielts-demo-class',
    },
  ];

  const bannerDetails = category == 'ielts' ? ieltsForm : bannerForm;
  
  const [activeStep, setActiveStep] = useState(1);
  const timer = useRef(null)

  useEffect(() => {
    timer.current = setInterval(() => {
      setActiveStep(prevStep => (prevStep === 4 ? 1 : prevStep + 1));
    }, 800);

    return () => clearInterval(timer.current);
  }, []);
  const handleHover = (index) =>{
    clearInterval(timer.current);
    setActiveStep(index+1);
  }
  const handleLeave = () => {
    timer.current = setInterval(() => {
      setActiveStep(prevStep => (prevStep === 4? 1 : prevStep + 1));
    }, 800);
  }

  const dispatch = useDispatch();    

  return (
    <div className="rounded-[10px] shadow-[-16.38px_33.89px_50.83px_0px_#17122B8C] p-3 xl:py-4 xl:px-5 sticky top-[70px] backdrop-blur bg-gradient-to-r from-[#066bc9CC] via-[#066bc9B3] to-[#066bc999]">
      <p className="text-[14px] xl:text-xl 2xl:text-[25px] font-normal text-white inline-block leading-[130%]">
        {bannerTitle}
      </p>
      <div className="flex flex-col gap-2 xl:gap-4 mt-2 xl:mt-5">
        {bannerDetails.map((form, index) => (
          form.url != 'bookSession' ? 
          <Link
            onMouseEnter={()=>handleHover(index)}
            onMouseLeave={handleLeave}
            key={index}
            href={process.env.NEXT_PUBLIC_LARAVEL_APP_URL+form?.url || '#'}
            className={`xl:py-3 p-2 xl:px-5 rounded-[6px] bg-[#42A3FF] text-[#EDF5FF] text-[12px] xl:text-[15px] 2xl:text-base font-semibold flex items-center justify-between transition-all transform-gpu ${
              activeStep === index + 1 ? 'scale-105' : ''
            }`}
          >
            {form?.title}
            <span className="inline-block">
              <Image src="/icons/whiteArrow.png" width={12} height={12} alt="arrow" />
            </span>
          </Link>
          :
          <div
            onMouseEnter={()=>handleHover(index)}                
            onMouseLeave={handleLeave}
            key={index}
            onClick={() => dispatch(setBookState({ status: 'true' }))}
            className={`cursor-pointer xl:py-3 p-2 xl:px-5 rounded-[6px] bg-[#42A3FF] text-[#EDF5FF] text-[12px] xl:text-[15px] 2xl:text-base font-semibold flex items-center justify-between transition-all transform-gpu ${
              activeStep === index + 1 ? 'scale-105' : ''
            }`}
          >
            {form?.title}
            <span className="inline-block">
              <Image src="/icons/whiteArrow.png" width={12} height={12} alt="arrow" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerForm;
