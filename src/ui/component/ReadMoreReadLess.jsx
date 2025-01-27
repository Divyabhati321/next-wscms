"use client"
import React, { useState } from 'react'
import "@/styles/ReadMore.scss"
import Image from 'next/image';
const ReadMoreReadLess = ({ title, content, device }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className={`${device === 'mobile' ? 'readmore-content-mobile' : 'readmore-content-both-device'} flex flex-col items-start justify-start`}>
            {title}
            <div className={`readmore-long-content ${isExpanded ? 'expanded' : ''}`}>
                {content}
            </div>
            <button className={`readmore-btn mb-3 transition-all ease-in-out text-test-prep text-sm sm:text-base`} onClick={() => setIsExpanded((prev) => !prev)}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    )
}
const ReadMoreReadLessCustom = ({ title, content, maxHeight }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className='readmore-content-custom flex flex-col items-start justify-start'>
            {title}
            <div className={` transition-all ease-in-out readmore-long-content max-h-0 max-h-[${maxHeight}] ${isExpanded ? `expanded  max-h-full` : ''}`}>
                {content}
            </div>
            <button className={`readmore-btn sm:hidden mb-3 transition-all ease-in-out`} onClick={() => setIsExpanded((prev) => !prev)}>
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    )
}
const ContinueReading = ({ content,examname }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className='continue-reading flex flex-col'>
            <div className={`readmore-long-content ${isExpanded ? 'expanded' : ''}`}>
                {content}
            </div>
            <div className={`continue-cta relative ${isExpanded ? 'hidden' : 'flex'} justify-center`}>
                <button className={`readmore-btn ${examname === 'pte'? 'pte-readmore-btn' : examname === 'ielts' ? '':'default-readmore-btn'} text-test-prep border-test-prep flex justify-center items-center transition-all ease-in-out`} onClick={() => setIsExpanded((prev) => !prev)}>
                    Continue Reading
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66665 10.5003C1.66665 15.1027 5.39761 18.8337 9.99998 18.8337C14.6024 18.8337 18.3333 15.1027 18.3333 10.5003C18.3333 5.89795 14.6024 2.16699 9.99998 2.16699C5.39761 2.16699 1.66665 5.89795 1.66665 10.5003Z" stroke={examname === 'pte'? '#027Fa2': examname === 'ielts'? '#FF2D46':'#006ac9'} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.05832 9.4502L9.99998 12.3835L12.9417 9.4502" stroke={examname === 'pte'? '#027Fa2': examname === 'ielts'? '#FF2D46':'#006ac9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <span className="blur-gradient absolute"></span>
            </div>

        </div>
    )
}
const HideShow = ({ title, content, CollapseIcon }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className='readmore-content flex'>
            {title}
            <div className={`readmore-long-content ${isExpanded ? 'expanded' : ''}`}>
                {content}
            </div>
            <button className='sm:hidden Hidereadmore-btn absolute top-[14px] right-[8px] z-40' onClick={() => setIsExpanded((prev) => !prev)}>
                <Image src={process.env.NEXT_PUBLIC_BASE_PATH + CollapseIcon} width={22} height={22} className={`transition-all ease-in-out ${isExpanded ? ' rotate-[225deg]' : ''}`} alt='Collapse Icon' />
            </button>
        </div>
    )
}


export { ReadMoreReadLess, HideShow, ReadMoreReadLessCustom, ContinueReading }