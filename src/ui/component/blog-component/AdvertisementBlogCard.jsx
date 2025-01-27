import React from 'react'
import Image from 'next/image'
import AuthButton from '@/ui/component/buttons/AuthButton.jsx'

const AdvertisementBlogCard = ({Strip1}) => {
  return (
    <div className='relative flex flex-col pt-5 px-7 pb-12 gap-5 hover:shadow-[0px_0px_40px_0px_#00000026] duration-250 bg-[#dbeeea] rounded-2xl lg:w-[30%] sm:w-[45%] w-full'>
        <h2 className='text-[#00817e] font-bold text-xl sm:text-3xl '>{Strip1?.title}</h2>
        <p className='text-base text-[#1d1d1f] w-[75%] lg:w-full '>{Strip1?.subTitle}</p>
        <AuthButton prefetch={false} url={process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD+'mock-test'} className='cursor-pointer rounded-[10px] bg-[#066ac9] w-fit text-white text-base sm:text-lg py-2 sm:py-3 px-5 sm:px-7 font-medium'  >{Strip1?.ctaText}</AuthButton>
        <div className=' right-0 bottom-0 w-1/2 sm:w-[55%] lg:w-[60%] h-auto absolute'>
            <Image width={275} height={280}  src={"/blog/adverImg.png"} alt="advertisement picture"/>
        </div>
    </div>
  )
}

export default AdvertisementBlogCard