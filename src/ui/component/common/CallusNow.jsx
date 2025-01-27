import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import Link from 'next/link'
const CallusNow = () => {
  return (
    <div className='h-full w-full text-center flex flex-col justify-between items-center'>
      <h2 className='text-lg lg:text-[18px] font-semibold '>Have a dream to Study Abroad? Call us Now</h2>
      <p className='font-semibold text-lg xl:text-[26px] flex items-center text-[#006ac9]'>
        <FiPhoneCall className='text-[#F3601E] mr-2' />
        +91-9773388670
      </p>
      <Link href={`tel:+91-9773388670`} className='group mt-5 sm:mt-0 w-[90%] rounded-[10px] font-semibold text-sm uppercase p-3 transition-all group bg-[#F3601E] text-white hover:shadow-[0px_0px_12px_0px_#F3601E]'>
       <span className='group:hover-drop-shadow-[0px_0px_10px_0px_#ffffff]'>call us now</span> 
      </Link>
    </div>
  )
}

export default CallusNow