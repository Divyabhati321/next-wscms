'use client'
import React from 'react'
import Link from 'next/link'
import { FaAngleRight } from "react-icons/fa6";
import Image from 'next/image';
import AuthButton from '@/ui/component/buttons/AuthButton.jsx';
 
const BannerCardMobile = ({bannerCardMobile}) => {
    return (
        <div className='container my-9'>
            <div className="sm:hidden w-full flex-wrap xl:flex-nowrap flex gap-8 items-stretch relative">
                <div className='w-full xl:w-1/2 bg-white rounded-[15px] shadow-custom px-5 py-3 relative z-30'>
                        <p className='text-base font-semibold mb-3 text-center'>What Gradding Offers for you!!</p>  
                    <div className='w-full justify-between flex flex-wrap gap-x-2 gap-y-1 '>
                        {bannerCardMobile?.bannerCardDetails.map((bannerCard,index) => (
                            <div className={`group  rounded-[7px]  flex flex-col items-center w-[45%] gap-2 py-2`} key={index}>
                                <div className='bg-[#FFF0E5] rounded-full p-3 w-[28%]'>
                                    <Image src={bannerCard.icon} width={48} height={48} alt={bannerCard.title} className='w-full'/>
                                </div>
                                <div className="w-full text-center">
                                    <h2 className='text-sm text-black font-medium px-4'>{bannerCard?.title}</h2>                                                   
                                    {
                                    bannerCard.url == 'bookSession' ? 
                                        <AuthButton booksession={'true'} className='text-xs text-[#F37E20] text-center inline-flex items-center font-medium uppercase'>Apply Now
                                            <FaAngleRight className=''/>
                                        </AuthButton>
                                    :
                                        <Link prefetch={false} href={bannerCard && bannerCard.url ? process.env.NEXT_PUBLIC_LARAVEL_APP_URL+bannerCard.url : '#' } className='text-xs text-[#F37E20] text-center inline-flex items-center font-medium uppercase'>Apply Now
                                            <FaAngleRight className=''/>
                                        </Link>
                                    }
                                </div>
                            </div>
                        ))}                        
                    </div>
                </div>
                <div className="w-full  justify-around bg-white rounded-[15px] shadow-custom flex flex-wrap gap-3 p-4">  
                    <p className='text-base font-semibold text-center w-fit m-auto'>Choose Country to Study Abroads</p>                      
                    {bannerCardMobile?.countryCardDetails.map((countryCard,index) => (
                        <Link href={process.env.NEXT_PUBLIC_LARAVEL_APP_URL+countryCard.url} className="w-[30%] m-auto transition-all p-1 2xl:p-2 cursor-pointer flex flex-col items-center gap-1" key={index}>
                            <div className='w-[40%] m-auto'>
                                <Image src={countryCard.icon} width={38} height={39} alt='country icnon' className={`hover:shadow-[0_0_12px_0_rgba(29,58,83,.25)] w-full transition-all ${index === 5 ? 'rounded-[10px]':'rounded-full'}`}/>
                            </div>
                            <h2 className='text-xs text-black font-semibold uppercase'>{countryCard?.title}</h2>                      
                            
                        </Link>
                    ))}  
                </div>
            </div>
        </div>
    )
}

export default BannerCardMobile