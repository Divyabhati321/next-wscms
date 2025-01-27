'use client'
import React, {useEffect,useState } from 'react'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import Link from 'next/link'
import Image from 'next/image';
import { Snippet } from "@nextui-org/react";
import { CopyIcon } from "@/ui/component/CustomIcons";
const ShareFloatyButton = ({style}) => {
      const fullUrl= window.location.href ;
      const [isScrolling, setIsScrolling] = useState(false);
      useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(window.scrollY >= 100); // Update when scrolled past the initial view
        };
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])
    return (
        <div className={`w-fit md:hidden fixed z-40 right-[22px] ${style} duration-200 ${isScrolling ? 'bottom-24' : '-bottom-24'}`}>
            <Popover>
                <PopoverTrigger
                >
                    <div className='rounded-full cursor-pointer bg-transparent size-14 grid place-items-center'>
                        <svg width="45" height="45" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="17.9365" cy="17.8965" r="17" fill="#066AC9"></circle>
                            <path d="M19.4999 23.7253C19.4993 23.281 19.6183 22.8448 19.8441 22.4621L14.1661 19.1552C13.9465 19.5324 13.6319 19.8453 13.2535 20.0628C12.875 20.2803 12.4461 20.3948 12.0096 20.3947C11.3472 20.3944 10.7117 20.1312 10.2433 19.6628C9.77494 19.1944 9.51198 18.5592 9.51172 17.8968C9.51198 17.2345 9.77539 16.5994 10.2438 16.1312C10.7122 15.663 11.3473 15.3999 12.0096 15.3999C12.4463 15.3997 12.8753 15.514 13.2539 15.7315C13.6326 15.949 13.9473 16.2621 14.1671 16.6394L19.8403 13.3276C19.617 12.9458 19.4993 12.5114 19.4999 12.0692C19.5 11.741 19.5649 11.416 19.6906 11.1129C19.8163 10.8098 20.0003 10.5343 20.2324 10.3024C20.4646 10.0705 20.7402 9.88655 21.0434 9.76109C21.3467 9.63563 21.6716 9.57116 21.9997 9.57129C22.3277 9.57129 22.6525 9.63579 22.9555 9.76133C23.2585 9.88687 23.5336 10.0709 23.7655 10.3029C23.9974 10.5348 24.1814 10.8104 24.3068 11.1134C24.4322 11.4165 24.4968 11.7412 24.4966 12.0692C24.4968 12.3971 24.4323 12.7217 24.3068 13.0247C24.1814 13.3277 23.9974 13.6031 23.7655 13.835C23.5336 14.0669 23.2585 14.2506 22.9555 14.3761C22.6525 14.5015 22.3276 14.566 21.9997 14.5659C21.5629 14.5661 21.1338 14.452 20.7549 14.2347C20.3759 14.0174 20.0607 13.7047 19.8403 13.3276L14.1671 16.6394C14.3897 17.021 14.507 17.455 14.5065 17.8968C14.5073 18.3387 14.3896 18.7729 14.1661 19.1542L19.8441 22.4611C20.0641 22.0847 20.379 21.7725 20.7573 21.5557C21.1355 21.3389 21.5637 21.2251 21.9997 21.2255C22.3278 21.2255 22.6529 21.2902 22.956 21.4158C23.259 21.5414 23.5341 21.7255 23.766 21.9576C23.9979 22.1897 24.1819 22.4652 24.3073 22.7684C24.4327 23.0715 24.4969 23.3963 24.4966 23.7244C24.4966 24.3866 24.2338 25.0217 23.7655 25.4899C23.2973 25.9582 22.6619 26.2213 21.9997 26.2213C21.3373 26.2216 20.7022 25.9587 20.2334 25.4907C19.7647 25.0227 19.5007 24.3877 19.4999 23.7253Z" fill="white" stroke="white" strokeWidth="1.2" strokeLinecap="round"></path>
                        </svg>
                    </div>
                </PopoverTrigger>
                <PopoverContent
                className='bg-transparent shadow-none'
                >
                    <div className='flex flex-col gap-5 '>
                        <Link href={"https://api.whatsapp.com/send?text=https://www.gradding.com/blog/courses/mbbs-in-australia"}>
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17" cy="17" r="17" fill="#37BA4B"></circle>
                                <path d="M12.9844 24.8238C14.3353 25.6126 15.9038 26.066 17.572 26.066C22.6765 26.066 26.9196 21.5599 26.6204 16.4646C26.3121 11.206 21.5341 7.15331 16.0307 8.05996C12.241 8.68554 9.2037 11.7591 8.61438 15.5489C8.26985 17.7429 8.72319 19.8192 9.71144 21.5327L8.90451 24.5337C8.72318 25.2137 9.34875 25.8302 10.0197 25.6398L12.9844 24.8238Z" fill="white"></path>
                                <path d="M22.1055 19.8786C22.1055 20.0417 22.0693 20.214 21.9877 20.3772C21.9061 20.5404 21.8064 20.6945 21.6794 20.8396C21.4528 21.0844 21.208 21.2657 20.936 21.3745C20.664 21.4924 20.3647 21.5468 20.0474 21.5468C19.585 21.5468 19.0864 21.438 18.5696 21.2113C18.0437 20.9847 17.527 20.6855 17.0102 20.3137C16.4843 19.933 15.9947 19.5068 15.5233 19.0444C15.0518 18.573 14.6348 18.0743 14.254 17.5575C13.8823 17.0408 13.583 16.524 13.3654 16.0072C13.1478 15.4904 13.0391 14.9917 13.0391 14.5203C13.0391 14.212 13.0935 13.9128 13.2023 13.6408C13.311 13.3598 13.4833 13.1059 13.7281 12.8792C14.0182 12.5891 14.3356 12.4531 14.671 12.4531C14.7979 12.4531 14.9249 12.4803 15.0428 12.5347C15.1606 12.5891 15.2694 12.6707 15.351 12.7886L16.3937 14.2845C16.4753 14.4024 16.5387 14.5021 16.575 14.6019C16.6203 14.7016 16.6384 14.7923 16.6384 14.8829C16.6384 14.9917 16.6022 15.1005 16.5387 15.2093C16.4752 15.3181 16.3937 15.4269 16.2849 15.5357L15.9403 15.8984C15.8859 15.9528 15.8678 16.0072 15.8678 16.0797C15.8678 16.116 15.8769 16.1522 15.8859 16.1885C15.9041 16.2248 15.9131 16.252 15.9222 16.2792C16.0038 16.4333 16.1489 16.6237 16.3483 16.8594C16.5569 17.0951 16.7744 17.3399 17.0102 17.5757C17.255 17.8205 17.4907 18.0381 17.7355 18.2466C17.9712 18.4461 18.1707 18.5821 18.3248 18.6637C18.352 18.6727 18.3792 18.6909 18.4064 18.6999C18.4427 18.718 18.4789 18.718 18.5243 18.718C18.6059 18.718 18.6603 18.6909 18.7147 18.6365L19.0592 18.2919C19.1771 18.1741 19.2859 18.0925 19.3856 18.0381C19.4944 17.9746 19.5941 17.9383 19.712 17.9383C19.8026 17.9383 19.8933 17.9565 19.993 18.0018C20.0928 18.0471 20.2016 18.1015 20.3104 18.1831L21.8154 19.253C21.9333 19.3346 22.0149 19.4343 22.0693 19.5431C22.0783 19.6428 22.1055 19.7516 22.1055 19.8786Z" fill="#37BA4B"></path>
                            </svg>
                        </Link>
                        <Link href={"https://twitter.com/intent/tweet?text=https://www.gradding.com/blog/courses/mbbs-in-australia"}>
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.2666" cy="17" r="17" fill="black"></circle>
                                <path d="M23.1166 8H26.1702L19.4991 15.6246L27.3471 26H21.2022L16.3893 19.7074L10.8822 26H7.82682L14.9622 17.8446L7.43359 8H13.7345L18.0849 13.7517L23.1166 8ZM22.045 24.1723H23.7369L12.8151 9.73169H10.9994L22.045 24.1723Z" fill="white"></path>
                            </svg>
                        </Link>
                        <Link href={"https://www.instagram.com/gradding_official/"}>
                            <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="17.5332" cy="17" r="17" fill="url(#paint0_linear_3872_3641)"></circle>
                                <path d="M14.9832 25.501H20.0832C24.3332 25.501 26.0332 23.801 26.0332 19.551V14.451C26.0332 10.201 24.3332 8.50098 20.0832 8.50098H14.9832C10.7332 8.50098 9.0332 10.201 9.0332 14.451V19.551C9.0332 23.801 10.7332 25.501 14.9832 25.501Z" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M17.5326 19.9754C19.1757 19.9754 20.5076 18.6434 20.5076 17.0004C20.5076 15.3573 19.1757 14.0254 17.5326 14.0254C15.8896 14.0254 14.5576 15.3573 14.5576 17.0004C14.5576 18.6434 15.8896 19.9754 17.5326 19.9754Z" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M22.3239 12.7512H22.3337" stroke="white" strokeWidth="2.26667" strokeLinecap="round" strokeLinejoin="round"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_3872_3641" x1="5.06653" y1="2.26667" x2="29.9999" y2="31.1667" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#7F39F7"></stop>
                                        <stop offset="1" stop-color="#F33230"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Link>
                        <Snippet
                            variant="shadow"
                            hideSymbol
                            classNames={{
                            base: "p-0 w-[34px] h-[34px]",
                            pre: "hidden",
                                        }}
                           
                            color="secondary"
                        >{fullUrl}
                        </Snippet>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
      )
}

export default ShareFloatyButton