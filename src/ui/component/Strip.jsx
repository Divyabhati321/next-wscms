'use client'
import Image from 'next/image'
import React from 'react'
import "@/styles/Strip.scss"
import Link from 'next/link'
import AuthButton from './buttons/AuthButton'
import { Button, useDisclosure } from '@nextui-org/react'
import { useDispatch } from 'react-redux'
import { setBookState } from '@/redux/slices/bookSessionSlice'
export const StripIelts = () => {
    return (
        <div className="strip-11 my-6 flex items-center justify-between relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#27aaf4f2] to-[#16c886f2]">
            <div className="left w-full md:w-[55%] py-[22px] pl-[20px] pr-[30px]">
                <h2 className="head text-xl font-semibold text-white uppercase">Assess your Level through our FREE Pre-IELTS Test and ensure 8+ Band </h2>
                <Link href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}test-preparation/register?e=IELTS`} className="group gap-2 strip-btn flex items-center w-fit bg-white py-[10px] px-4 text-[#007FA3] rounded-[10px] text-base md:text-lg font-semibold border-2 border-white hover:bg-transparent hover:text-white mt-3 transition-all ease-in-out"> Start Pre-IELTS Test
                    <span className="arrow-svg">
                        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className=' group-hover:stroke-white' d="M10.8043 1.38867L14.4942 6.08488M14.4942 6.08488L10.8043 10.7811M14.4942 6.08488H1.57959" stroke="#148FA9" strokeWidth="1.64367" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </Link>
            </div>
            <div className="hidden sm:block bg-img absolute right-[15%] m-auto w-auto">
                <Image className="strip-bg w-full h-full" width={365} height={185} src="/strip/ielts-pass-bg.png" alt="Strip" />
            </div>
            <div className="hidden sm:block right">
                <Image className="strip-bg" src="/strip/computer-strip.png" alt="" />
            </div>
        </div>
    )
}

export const Strip1 = () => {
    return (
        <div className="strip-1 strip-2">
            <Image className="img" src="/strip/bg-image.png" alt="bg-image" />
            <div className="strip-content">
                <h2 className="head">Find your dream University</h2>
                <span className="sub-head">GET offer from Top Ranked Universities in <br /> 7 to 15 days*</span>
                <Link href="javascript" className="start-btn">Start Now</Link>
            </div>
        </div>
    )
}
export const Strip3 = () => {
    return (
        <div className="strip-3">
            <Image src="/strip/strip-bg.png" alt="scholarship" width="100%" height="100%" />

            <div className="strip-content">
                <h2 className="head">Get Admission into USA’s Best Universities
                    <span>Apply Now To Not Miss the Intake</span>
                </h2>
                <ul className="list">
                    <li className="li-item"><span></span>Unlock Scholarships for Your Dream Education!</li>
                    <li className="li-item"><span></span>Choose Your Ideal University with the Best Mentors!</li>
                    <li className="li-item"><span></span>Get Comprehensive Support for Your Global Education!</li>
                </ul>
                <Link href="javascript:void(0);" className="strip-btn">Apply Now
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_219_5884)">
                            <path d="M10.8125 3.3125L14.5625 8M14.5625 8L10.8125 12.6875M14.5625 8H1.4375" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_219_5884">
                                <rect width="15" height="15" fill="white" transform="translate(0.5 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export const Strip4 = () => {
    return (
        <>
            <div className="strip-4">
                <div className="left">
                    <h2 className="head">Unlock Your Educational Opportunities!</h2>
                    <span className="sub-head">Get the Best Scholarships for Your Bright Future - Apply Now with Gradding!</span>

                    <Link href="javascript:void(0);" className="strip-btn">Talk to a Counsellor
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_219_5893)">
                                <path d="M10.8125 3.3125L14.5625 8M14.5625 8L10.8125 12.6875M14.5625 8H1.4375" stroke="#0096B7"
                                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_219_5893">
                                    <rect width="15" height="15" fill="white" transform="translate(0.5 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>

                    </Link>
                </div>
            </div>
        </>
    )
}

export const Strip5 = () => {
    return (
        <>
            <div className="strip-5">
                <h2 className="head">Get in Touch with Us for a <br /> Seamless Visa Experience!</h2>
                <span className="sub-head">Navigate the Visa Process Seamlessly with the Guidance from Our Experts.</span>

                <Link href="javascript:void(0);" className="strip-btn">Get! Set! Go!
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_219_5893)">
                            <path d="M10.8125 3.3125L14.5625 8M14.5625 8L10.8125 12.6875M14.5625 8H1.4375" stroke="#066AC9"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_219_5893">
                                <rect width="15" height="15" fill="white" transform="translate(0.5 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>
        </>
    )
}
export const Strip6 = () => {
    return (
        <>
            <div className="strip-6">
                <h2 className="chead">Start Your Global Educational Journey Abroad!</h2>
                <ul className="benefit-list">
                    <li className="single-list"><Image
                        src="/strip/check-fill.svg"
                        alt="check" width="100%" height="100%" />Expert Guidance</li>
                    <li className="single-list"><Image
                        src="/strip/check-fill.svg"
                        alt="check" width="100%" height="100%" />Seamless Planning</li>
                    <li className="single-list"><Image
                        src="/strip/check-fill.svg"
                        alt="check" width="100%" height="100%" />Scholarship Support</li>
                    <li className="single-list"><Image
                        src="/strip/check-fill.svg"
                        alt="check" width="100%" height="100%" />Global Network</li>
                </ul>

                <Link href="javascript:void(0);" className="strip-btn">Start Your Journey</Link>
            </div>
        </>
    )
}
export const Strip7 = () => {
    return (
        <div className="strip-7">
            <div className="left">
                <h2 className="head">Get Your <span className="red">IELTS</span> Score for <span className="blue">FREE</span></h2>
                <p className="head-desc">Before Investing in the Exam Fee !!</p>
            </div>
            <div className="right">
                <Link href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}test-preparation/register?e=IELTS`} className="pre-ielts-btn">Start Pre-IELTS Test
                    <span className="arrow">
                        <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns=" http://www.w3.org/2000/svg ">
                            <path d="M12.0451 0.957031L16.2046 6.25089M16.2046 6.25089L12.0451 11.5448M16.2046 6.25089H1.64648" stroke="#2B3340" strokeWidth="1.85285" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </span>
                </Link>
            </div>
        </div>
    )
}
export const Strip8 = () => {
    return (
        <>
            <div className="strip-8">
                <div className="left ">
                    <h2 className="head">Score 8 Band in your First Attempt!</h2>
                    <p className="head-desc">Get Trained from experienced IELTS instructors through engaging live online classes</p>
                    <Link href={`${process.env.NEXT_PUBLIC_WEBSITE_URL}test-preparation/register?e=IELTS`} className="strip-btn">Book FREE IELTS Masterclass

                    </Link>
                </div>
                <div className="hidden md:block right">
                    <Image className="strip-bg" src="/strip/strip-8-bg.png" alt="" />
                </div>
            </div>
        </>
    )
}
export const Strip9 = () => {
    return (
        <>
            <div className="strip-9">
                <div className="left">
                    <h2 className="head">100% Scholarships Available in Top Universities</h2>
                    <p className="head-desc">Get Trained from experienced IELTS instructors through engaging live online classes</p>
                    <Link href="javascript:void(0);" className="strip-btn">
                        <span className="strip-btn-title">
                            Claim Scholarship
                        </span>
                        <span className="redirect-arrow">
                            <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.58565 1.73535L5.88987 5.92588C6.28606 6.31161 6.28606 6.93699 5.88987 7.32272L1.58565 11.5133" stroke="#EFEFEF" strokeWidth="1.72551" strokeLinecap="round" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className="right">
                    <Image className="strip-bg" src="/strip/strip9-bg.png" alt="" />
                </div>
            </div>
        </>
    )
}
export const Strip10 = () => {
    return (
        <>
            <div className="strip-10">
                <div className="left">
                    <h2 className="head">Join Our PTE Coaching to crack Exam in First attempt!</h2>
                    <p className="head-desc">Enroll for the best PTE Coaching classes online and get desire score in your first Attempt</p>
                    <Link href="javascript:void(0);" className="strip-btn">Book Free PTE Masterclass
                        <span className="arrow-svg">
                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8043 1.38867L14.4942 6.08488M14.4942 6.08488L10.8043 10.7811M14.4942 6.08488H1.57959" stroke="#148FA9" strokeWidth="1.64367" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </Link>
                </div>
                <div className="right">
                    <Image className="strip-bg" src="/strip/personstrip.png" alt="" />
                </div>
            </div>
        </>
    )
}
export const Strip12 = () => {
    return (
        <>
            <div className="strip-12">
                <div className="left">
                    <h2 className="head">Get IELTS Ready with Live Interactive Classes Online
                        <span className="star-svg one">
                            <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.8998 22.7996C11.8776 16.6768 6.91652 11.7202 0.799805 11.7202C6.93016 11.7202 11.8998 6.74127 11.8998 0.599609C11.9219 6.72243 16.8831 11.679 22.9998 11.679C16.8693 11.679 11.8998 16.6579 11.8998 22.7996Z" fill="black" />
                            </svg>
                        </span>
                        <span className="star-svg two">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M7.8 16.1996C7.7844 11.8971 4.29823 8.41406 0 8.41406C4.30782 8.41406 7.8 4.91537 7.8 0.599609C7.81553 4.90213 11.3018 8.38516 15.6 8.38516C11.2921 8.38516 7.8 11.8838 7.8 16.1996Z" fill="black" />
                            </svg>
                        </span>
                        <span className="star-svg three">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15 30C14.97 21.7259 8.26583 15.0278 0 15.0278C8.28427 15.0278 15 8.29954 15 0C15.0299 8.27408 21.7342 14.9722 30 14.9722C21.7156 14.9722 15 21.7005 15 30Z" fill="black" />
                            </svg>
                        </span>
                        <span className="star-svg four">
                            <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5997 23.1994C11.5769 16.9111 6.48173 11.8205 0.199707 11.8205C6.49575 11.8205 11.5997 6.70707 11.5997 0.399414C11.6224 6.68772 16.7177 11.7783 22.9997 11.7783C16.7036 11.7783 11.5997 16.8918 11.5997 23.1994Z" fill="black" />
                            </svg>
                        </span>
                    </h2>
                    <p className="head-desc">India’s #1 IELTS online preparation courses from experts to get dream band score in your first attempt.</p>
                    <Link href="/test-preparation/register" className="strip-btn">Enroll now

                    </Link>
                </div>

                <div className="right">
                    <Image className="strip-bg" src="/strip/enroll-comp.png" alt="" />
                </div>
            </div>
        </>
    )
}
export const Strip13 = () => {
    return (
        <>
            <div className="strip-13">
                <div className="left">
                    <h2 className="head">Get Offer From Your Dream University in just 2 weeks!</h2>
                    <span className="head-desc">Get matched with your perfect university and receive an acceptance letter within 2 weeks.</span>
                    <Link className="strip-btn" href="/test-preparation/register">Start My Journey</Link>
                </div>
            </div>
        </>
    )
}
export const Strip14 = () => {
    const dispatch = useDispatch();

    return (
        <>
            <div className="strip-14">
                <div className="left">
                    <div className="left-t-box">
                        <h2 className="head">Secure Admission in Your Dream Universities Under <span className="green">₹10 Lakh</span>

                        </h2>
                        <Image className="pin-svg" src="/strip/pin.svg" alt="" />
                        <p className="head-desc">Get your perfect university under the budget of 10 lakhs with our experts.</p>
                    </div>
                    <Link href="javascript:void(0);" onClick={() => dispatch(setBookState({ status: 'true' }))} className="strip-btn">Book a Free Session</Link>
                </div>

                <div className="right">
                    <Image className="strip-bg" src="/strip/money-strip.png" alt="" />
                </div>
                <Image className="wave1" src="/strip/strip-wave1.png" alt="" />
                <Image className="wave2" src="/strip/strip-wave2.png" alt="" />
                <Image className="wave3" src="/strip/strip-wave3.png" alt="" />
                <Image className="wave4" src="/strip/strip-wave4.png" alt="" />
            </div>
        </>
    )
}
export const BuyPakgStrip = () => {
    return (
        <div className='text-[#191F28] p-4 pr-7 rounded-[14px] buy-package-strip w-full sm:w-[300px] mt-4'>
            <h2 className='text-xl font-semibold mb-7'>Buy Mock Test Package and get Flat 50% OFF</h2>
            <AuthButton url={`${process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD}plans`} className='text-base font-semibold bg-white rounded-[9px] py-3 px-8 flex items-center justify-center w-fit'>Buy Package</AuthButton>
        </div>
    )
}
export const Strip16 = ({ StripData, device }) => {
    return (
        <div className="bg-white px-4 2xl:px-7 rounded-[13px] shadow-custom flex sm:flex-row items-end overflow-hidden relative justify-between">
            <div className="w-full lg:w-8/12 py-4 sm:py-6">
                <p className='text-[23px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px] font-medium'>{StripData?.headingFirst} <span className='text-test-prep font-medium'>{StripData?.examname}</span> {StripData?.headingSecond}</p>
                <p className='text-[#242331] text-[14px] 2xl:text-[16px] mt-2 mb-5 w-[85%] lg:w-full'>{StripData?.desc}</p>

                <AuthButton url={StripData?.ctaLink ? StripData?.ctaLink : '#'} className='cursor-pointer inline-block w-[55%] sm:w-[45%]  text-center capitalize p-3 py-[8px] rounded-[7px] transition-all font-semibold text-[16px] group btn-test-prep'><span className=''>{StripData?.cta}</span></AuthButton>
            </div>
            {
                device === 'desktop' ?
                    <Image property='true' src="/common/strip16.png" width={276} height={219} className='sm:bottom-0 sm:relative' alt='strip image' />
                    : 
                    <Image property='true' src="/common/strip16Mobile.png" width={180} height={151} className='absolute -bottom-4 -right-2' alt='strip image' />
            }


        </div>
    )
}

export const Strip17 = ({ title, desc }) => {
    return (
        <div className="strip-17 px-2 sm:px-7 rounded-[13px]">
            <div className="pt-2 pb-4 pl-2 sm:pl-0 sm:py-5">
                <div className="w-full lg:w-2/3 ">
                    <p className='text-[22px] 2xl:text-[30px] text-white font-bold uppercase'>{title}</p>
                    <p className='text-white text-[14px] 2xl:text-[16px] mt-3 mb-5 font-medium w-[75%] sm:w-full'>{desc}</p>
                    <AuthButton url={`${process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD}`} className='block sm:inline-block w-1/2  text-center capitalize py-2 px-4 sm:p-3 rounded-[10px] text-[#FF2D46] hover:scale-105 transition-all bg-white font-semibold text-[16px]'>Know more</AuthButton>
                </div>
            </div>
        </div>
    )
}
export const Strip18 = ({ title, desc }) => {
    const dispatch = useDispatch();
    return (
        <div className=" bg-[#df1c25] mt-12 sm:mt-24  mb-12 sm:mb-20">
            <div className="container">
                <div className="flex items-center justify-center sm:justify-around gap-20 py-5 sm:py-0">
                    <Image src="/strip/exam-book-session.png" width={417} height={452} className='hidden sm:block -my-8 drop-shadow-lg' alt="Girl Image" />
                    <div className="w-full m-auto sm:m-0 text-center sm:text-left lg:w-1/2">
                        <p className='text-[22px] sm:text-[28px] 2xl:text-[38px] text-white font-bold capitalize'>{title}</p>
                        <p className='text-white text-[16px] sm:text-[20px] xl:text-[18px] sm:w-4/5 font-medium mt-2.5 mb-5'>{desc}</p>
                        <div onClick={() => dispatch(setBookState({ status: 'true' }))} className='cursor-pointer inline-block w-3/4 sm:w-1/2  text-center capitalize p-3 rounded-[10px] text-[#FF2D46] hover:shadow-buttonshadow transition-all bg-white font-semibold text-[16px] lg:text-[20px] group'><span className='group-hover:drop-shadow-textshadow'>Book a Free Session Now</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const PteStrip = ({ title, desc,device }) => {
    const dispatch = useDispatch();
    return (
        <div className="pte-strip px-4 2xl:px-7 rounded-[13px] flex sm:flex-row items-end overflow-hidden relative justify-between my-4">
            <div className="w-full lg:w-6/12 py-4 sm:py-6">
                <p className='text-[23px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px] font-medium text-white'>{title}</p>
                <p className='text-[14px] 2xl:text-[16px] mt-2 mb-5 w-[85%] lg:w-full text-white'>{desc}</p>

                <div onClick={() => dispatch(setBookState({ status: 'true' }))} className='cursor-pointer inline-block w-[55%] sm:w-[45%]  text-center capitalize p-3 py-[8px] rounded-[7px] transition-all font-semibold text-[16px] group bg-white text-test-prep'><span className=''>Know More</span></div>
            </div>
            {
                device === 'desktop' ?
                    <Image property='true' src="/common/pte-strip-bg.png" width={284} height={260} className='sm:bottom-0 sm:relative' alt='strip image' />
                    : 
                    <Image property='true' src="/common/pte-strip-bg.png" width={180} height={151} className='absolute -bottom-2 -right-8' alt='strip image' />
            }


        </div>
    )
}
export const Strip19 = ({ title }) => {
    const dispatch = useDispatch();
    return (
        <div className="  sm:mt-24 py-12 sm:py-24">
            <div className="container ">
                <div className="bg-[#df1c25] p-4 sm:p-10 rounded-[16px] relative">
                    <div className="w-full flex flex-col gap-5 justify-between m-auto  sm:m-0 text-center sm:text-left lg:w-[55%] sm:h-[250px]">
                        <p className='text-[20px] sm:text-[28px] 2xl:text-[34px] text-white font-bold capitalize'>{title}</p>
                        <div nav className='cursor-pointer inline-block w-3/4 sm:w-1/2 m-auto sm:m-0  text-center capitalize p-3 rounded-[10px] text-black hover:shadow-[0px_0px_20px_0px_#ffd600,0px_0px_20px_0px_#FFFFFF80_inset] transition-all bg-[#ffd600] font-semibold text-[16px] lg:text-[20px] group'><span className='group-hover:drop-shadow-[0_0_20px_#ffd600]'>Book a Free Session Now</span></div>
                    </div>
                    <Image src="/strip/book-session-img.png" width={410} height={496} className='hidden sm:block absolute bottom-0 right-0' alt="boy Image" />
                </div>
            </div>
        </div>
    )
}
