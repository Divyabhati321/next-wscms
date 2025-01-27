import React from 'react'
import Image from "next/image";
import AuthButton from '@/ui/component/buttons/AuthButton';

const SOP = ({bannerTitle, bannerButtonName, bannerDescription, bannerPdf}) => {
  return (
    <div className={`flex flex-col justify-between p-7 bg-[#dbeeea] relative h-80 rounded-2xl overflow-hidden`}>
        <Image  src={"/blog/adverImg.png"} className='absolute z-10 bottom-0 -right-10 rounded-2xl' alt={"boy-image"} width={285} height={290} />
        <div className='text-xl font-extrabold text-[#00817e] w-3/5'>{bannerTitle}</div>
        <div className='absolute rounded-2xl z-20 bg-gradient-to-b from-[#dbeeea01] to-[#DBEEEA] bottom-0 left-0 h-2/5 w-full flex justify-center items-center'>
            <AuthButton 
            href={bannerPdf ? `${process.env.NEXT_PUBLIC_S3_URL?.replace(/\/$/,"")}/${bannerPdf.replace(/^\//, "")}` : '#'}
            download={bannerPdf ? `${process.env.NEXT_PUBLIC_S3_URL?.replace(/\/$/,"")}/${bannerPdf.replace(/^\//, "")}` : '#'}
            className='font-medium bg-[#00817e] border-2 text-lg border-white rounded-[10px] text-white text-center p-3 cursor-pointer w-4/5'
            >
            {bannerButtonName} 
            </AuthButton>
        </div>
    </div>
  )
}

export default SOP