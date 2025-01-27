'use client'

import React from 'react'
import Image from 'next/image'

const isLocal = process.env.NEXT_PUBLIC_APP_MODE == 'local' ? true : false;
export const Strip20 = () => {
    return (
    <div className={`px-3.5 lg:px-7 py-3 lg:py-[34px] my-[30px] rounded-xl lg:rounded-[9px] md:flex gap-[29px] shadow-[0px_2px_35px_0px_#00000033] ${isLocal ? `lg:bg-[url('/newstrip/wave.png')]` : `lg:bg-[url('/blog/newstrip/wave.png')]`} bg-no-repeat bg-contain bg-bottom`}>
        <Image src="/newstrip/newstrip1.png" width={356} height={191} className='hidden sm:block' alt='Start Free Mock Test'/>
        <div className='md:w-1/2 text-center lg:text-left'>
            <span className='text-[20px] lg:text-[26px] font-medium leading-[130%]'>Take our Comprehensive <span className='text-[#FF2D46] font-semibold '>IELTS Mock Test in Real Test </span><span className='font-semibold text-[#020817]'>Environment Now!</span></span>
            <Image src="/newstrip/newstrip1.png" width={356} height={191} className='sm:hidden my-[13px]' alt='Start Free Mock Test'/>
            <a href="#" className=' w-fit py-3 px-5 bg-[#FF2D46] !text-lg justify-center font-normal rounded-[9px] !text-white flex items-center gap-[9px] m-auto lg:mt-2 lg:ml-0'>Start Free IELTS Mock Test <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.9877 7C16.9877 7.26566 16.8821 7.52042 16.6942 7.70824L10.6837 13.7188C10.4947 13.9013 10.2417 14.0022 9.97903 14C9.71637 13.9977 9.46512 13.8923 9.27938 13.7066C9.09365 13.5209 8.98829 13.2696 8.98601 13.0069C8.98373 12.7443 9.0847 12.4912 9.26718 12.3023L13.5677 8.00176H1.96136C1.69567 8.00176 1.44087 7.89622 1.253 7.70835C1.06514 7.52048 0.959597 7.26568 0.959597 7C0.959597 6.73432 1.06514 6.47952 1.253 6.29165C1.44087 6.10378 1.69567 5.99824 1.96136 5.99824H13.5677L9.26718 1.69769C9.0847 1.50876 8.98373 1.25571 8.98601 0.993054C8.98829 0.730396 9.09365 0.479143 9.27938 0.293409C9.46512 0.107674 9.71637 0.00232029 9.97903 3.78689e-05C10.2417 -0.00224456 10.4947 0.0987275 10.6837 0.281206L16.6942 6.29176C16.8821 6.47958 16.9877 6.73434 16.9877 7Z" fill="white"/>
                </svg>
            </a>
        </div>
    </div>

)
}
export const Strip21 =() => {
    return (
<div className={`relative items-center mb-[30px] ${isLocal ? `bg-[url('/newstrip/cir_1.png')] lg:bg-[url('/newstrip/cir.png')]` : `bg-[url('/blog/newstrip/cir_1.png')] lg:bg-[url('/blog/newstrip/cir.png')]`} rounded-xl lg:rounded-[9px] md:flex justify-between shadow-[0px_2px_35px_0px_#00000033] bg-no-repeat bg-contain bg-right bg-[#FFF4F6]`}>
  <div className='px-3.5 lg:px-9 py-3 lg:py-[30px]  md:w-2/3 text-center lg:text-left'>
            <span className='text-[20px] lg:text-[26px] font-medium leading-[130%]'>Familiarize yourself with the IELTS Writing Exam with Our <span className='font-semibold'>Free</span> <span className='text-[#FF2D46] font-semibold '>IELTS Writing Mock Test</span></span>
            <Image src="/newstrip/newstrip2_1.png" width={107} height={89} className='sm:hidden my-2.5 m-auto' alt='Writing Exam'/>
        <a href="#" className='w-fit py-3 px-3.5 bg-[#FF2D46] !text-lg font-normal rounded-[9px] !text-white flex items-center gap-[9px] mt-2.5 lg:mt-[30px] m-auto lg:ml-0'>Take Writing Mock Test Now!
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="6" stroke="white"/>
                <path d="M5.56015 9.4654C5.44617 9.4654 5.3321 9.42191 5.24523 9.3349C5.07123 9.16104 5.07123 8.87897 5.24523 8.70509L7.35129 6.59891L5.24523 4.49273C5.07123 4.31885 5.07123 4.03678 5.24523 3.86291C5.419 3.68893 5.70127 3.68893 5.87504 3.86291L8.29615 6.28399C8.47012 6.45787 8.47012 6.73994 8.29615 6.91383L5.87504 9.3349C5.78817 9.42192 5.6741 9.4654 5.56015 9.4654Z" fill="white"/>
            </svg>
        </a>
    </div>
        <Image src="/newstrip/newstrip2.png" width={188} height={177} className='hidden sm:block md:mt-[20px] md:mr-[24px] md:mb-[14px] absolute right-4' alt='Writing Exam'/>
</div>
    )
}
export const Strip22 =() => {
    return(
 <div className="px-3.5 lg:px-7 py-3 lg:py-0  mb-[30px] rounded-xl lg:rounded-[9px] md:flex shadow-[0px_2px_35px_0px_#00000033] bg-[#FFF4F6] ">
     <Image src="/newstrip/newstrip3.png" width={224} height={224} className='hidden sm:block' alt='Speaking Score'/>
        <div className='md:w-3/4 lg:py-[39px] lg:pr-[30px] text-center lg:text-right'>
            <span className='text-[20px] lg:text-[23px] font-medium leading-[130%]'>Maximize Your <span className='text-[#FF2D46] font-semibold '>IELTS Speaking </span>Score through Real-Time Practice and Expert Feedback.</span>
            <Image src="/newstrip/newstrip3.png" width={164} height={164} className='sm:hidden my-1.5 m-auto' alt='Speaking Score'/>
            <a href="#" className='w-fit py-3 px-3.5 bg-[#FF2D46] !text-lg font-normal rounded-[9px] !text-white flex items-center gap-[9px] m-auto lg:mt-[30px] lg:mr-0'>Access speaking Mock Test
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="6" stroke="white"/>
                    <path d="M5.56015 9.4654C5.44617 9.4654 5.3321 9.42191 5.24523 9.3349C5.07123 9.16104 5.07123 8.87897 5.24523 8.70509L7.35129 6.59891L5.24523 4.49273C5.07123 4.31885 5.07123 4.03678 5.24523 3.86291C5.419 3.68893 5.70127 3.68893 5.87504 3.86291L8.29615 6.28399C8.47012 6.45787 8.47012 6.73994 8.29615 6.91383L5.87504 9.3349C5.78817 9.42192 5.6741 9.4654 5.56015 9.4654Z" fill="white"/>
                </svg>
            </a>
        </div>
</div>

)
}
export const Strip23 =() => {
    return(
<div className={`px-3.5 lg:px-8 py-3 lg:py-9 mb-[30px] rounded-xl lg:rounded-[9px] md:flex justify-between shadow-[0px_2px_35px_0px_#00000033] bg-[#FFF4F6] ${isLocal ? `lg:bg-[url('/newstrip/new1.png')]` : `lg:bg-[url('/blog/newstrip/new1.png')]`}  bg-no-repeat bg-right-top bg-right`}>
  <Image src="/newstrip/newstrip4.png" width={133} height={133} className='hidden sm:block' alt='Listening Test'/>
        <div className='md:w-3/4 text-center lg:text-left'>
            <span className='text-[20px] lg:text-[25px] font-medium lg:mr-0 leading-[130%]'>Practice for <span className='text-[#FF2D46] font-semibold '>IELTS Listening test </span>with authentic audio recordings in real test environment. </span>
            <Image src="/newstrip/newstrip4.png" width={86} height={86} className='sm:hidden my-3 m-auto' alt='Listening Test'/>
            <a href="#" className='w-fit py-3 px-3.5 bg-[#FF2D46] !text-lg font-normal rounded-[9px] !text-white flex items-center gap-[9px] m-auto lg:mt-5 lg:ml-0 '>Access Listening Mock Test
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="6" stroke="white"/>
                    <path d="M5.56015 9.4654C5.44617 9.4654 5.3321 9.42191 5.24523 9.3349C5.07123 9.16104 5.07123 8.87897 5.24523 8.70509L7.35129 6.59891L5.24523 4.49273C5.07123 4.31885 5.07123 4.03678 5.24523 3.86291C5.419 3.68893 5.70127 3.68893 5.87504 3.86291L8.29615 6.28399C8.47012 6.45787 8.47012 6.73994 8.29615 6.91383L5.87504 9.3349C5.78817 9.42192 5.6741 9.4654 5.56015 9.4654Z" fill="white"/>
                </svg>
            </a>
        </div>
</div>

)
}

export const Strip24 =() => {
    return(
<div className=" py-3 lg:py-0 px-5 mb-[30px] rounded-xl lg:rounded-[9px] justify-end md:flex shadow-[0px_2px_35px_0px_#00000033] bg-gradient-to-r from-[#B82133] to-[#FF2D46] relative">
    <Image src="/newstrip/newstrip5.png" width={233} height={216} className='hidden sm:block -left-4 absolute bottom-0 '  alt='Reading Section'/>
        <div className='lg:py-8 lg:w-3/4 text-center lg:text-left lg:px-2.5'>
            <span className='text-[20px] lg:text-[26px] font-medium lg:mr-0 text-white leading-[130%]'>Practice for IELTS Reading Section with our  <span className='font-semibold '>Free IELTS Reading Mock Test !</span></span>
            <Image src="/newstrip/newstrip5_1.png" width={120} height={75} className='sm:hidden my-3 m-auto' alt='Reading Section'/>
            <a href="#" className='w-fit py-3 px-2.5 bg-[#FFFFFF] !text-lg font-medium rounded-[9px] !text-[#FF2D46] flex items-center gap-[9px] m-auto lg:mt-5 lg:ml-0 '>Take Reading Mock Test Now!
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="6" stroke="#FF2D46"/>
                    <path d="M5.56015 9.4654C5.44617 9.4654 5.3321 9.42191 5.24523 9.3349C5.07123 9.16104 5.07123 8.87897 5.24523 8.70509L7.35129 6.59891L5.24523 4.49273C5.07123 4.31885 5.07123 4.03678 5.24523 3.86291C5.419 3.68893 5.70127 3.68893 5.87504 3.86291L8.29615 6.28399C8.47012 6.45787 8.47012 6.73994 8.29615 6.91383L5.87504 9.3349C5.78817 9.42192 5.6741 9.4654 5.56015 9.4654Z" fill="#FF2D46"/>
                </svg>
             </a>
        </div>
 </div>


)
}

export const Strip25 =() => {
    return (
<div className={` lg:pl-16 py-3  lg:py-[18px] mb-[30px] rounded-xl lg:rounded-[9px]md:flex shadow-[0px_2px_35px_0px_#00000033] bg-no-repeat bg-contain ${isLocal ? `bg-[url('/newstrip/newstrip6_1.png')]` : `bg-[url('/blog/newstrip/newstrip6_1.png')]`} bg-left-bottom  bg-[#FFF4F6] relative`}>
        <div className='md:w-3/5 lg:w-2/3 text-center lg:text-left'>
            <div className='bg-white py-1 pl-3 pr-1 rounded-[25px] w-max font-semibold gap-x-[5px] flex m-auto lg:ml-0 items-center mb-4'>Get Free<span className='bg-[#FFEBEE] text-[#FF2D46] pl-1 pr-[5px] py-[3px] rounded-r-[25px]'>IELTS Classes</span>
            </div>
                  <span className='text-[20px] lg:text-[26px] font-medium leading-[130%] mt-[22px] lg:mt-[15px] ' >We will get you admission in Top Abroad Universities with Completely</span><span className='!text-[#FF2D46] font-semibold lg:!text-[26px] !text-[20px] text-center lg:text-left'> FREE IELTS Coaching!</span>
                  <Image src="/newstrip/newstrip6_4.png" width={180} height={175} className='sm:hidden absolute bottom-0 left-0' alt='Admission'/>
                  <button className='handleLoginClick py-2 px-3.5 bg-[#FF2D46] !text-lg font-medium rounded-[9px] !text-white flex items-center m-auto lg:mt-[18px] my-[23px] lg:my-0 lg:ml-0'>Know More
                  </button>
        </div>
             
              <Image src="/newstrip/newstrip6.png" width={430} height={306} className='hidden sm:block absolute right-0 bottom-0 ' alt='Admission'/>
              
    </div>

    )
}

export const Strip26 =() => {
    const bgImage = isLocal ? `bg-[url('/newstrip/wave3.png'),linear-gradient(to_right_bottom,rgba(5,138,177,1),rgba(5,104,132,1))]  lg:bg-[url('/newstrip/wave2.png'),linear-gradient(to_right_bottom,rgba(5,138,177,1),rgba(5,104,132,1))]` : `bg-[url('/blog/newstrip/wave3.png'),linear-gradient(to_right_bottom,rgba(5,138,177,1),rgba(5,104,132,1))]  lg:bg-[url('/blog/newstrip/wave2.png'),linear-gradient(to_right_bottom,rgba(5,138,177,1),rgba(5,104,132,1))]`
    
    return (
<div className={`rounded-xl lg:rounded-[9px] ${bgImage} mb-[30px] shadow-[0px_2px_35px_0px_#00000033] md:flex bg-no-repeat bg-contain bg-bottom justify-between relative `}>
    <div className='md:w-2/3 px-3.5 lg:px-16 pt-12 lg:pt-[41px] pb-20 lg:pb-[41px] text-center lg:text-left'>
            <span className='text-[26px] lg:text-[35px] text-white font-medium leading-[130%]'>Get Familiar with the Real<span className='font-semibold'> PTE Exam for Free! </span></span>
            <Image src="/newstrip/newstrip7_2.png" width={182} height={177} className='sm:hidden absolute bottom-0 right-0 w-[45%] rounded-[9px]' alt='PTE Exam'/>
        <div className=' hidden sm:block'>
            <a href="#" className='w-fit py-2 px-3.5 bg-white !text-lg font-semibold rounded-[9px] !text-[#017FA3] mt-5 items-center gap-[9px]  flex m-auto lg:ml-0'>Start PTE Test
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6.5" cy="6.5" r="6" stroke="#017FA3"/>
                    <path d="M5.56015 9.4654C5.44617 9.4654 5.3321 9.42191 5.24523 9.3349C5.07123 9.16104 5.07123 8.87897 5.24523 8.70509L7.35129 6.59891L5.24523 4.49273C5.07123 4.31885 5.07123 4.03678 5.24523 3.86291C5.419 3.68893 5.70127 3.68893 5.87504 3.86291L8.29615 6.28399C8.47012 6.45787 8.47012 6.73994 8.29615 6.91383L5.87504 9.3349C5.78817 9.42192 5.6741 9.4654 5.56015 9.4654Z" fill="#017FA3"/>
                </svg>
            </a>
            </div>

            <a href="#" className='w-fit py-2 px-[13px] bg-white !text-[18px] font-semibold rounded-[9px] text-[#017FA3] mt-5 lg:mb-[20px] flex m-auto lg:ml-0 sm:hidden '>Know More 
            </a>
           
    </div>
     <Image src="/newstrip/newstrip7_1.png" width={300} height={245} className='hidden sm:block absolute bottom-0 right-0' alt='PTE Exam'/>
</div>

)
}

export const Strip27 =() => {
    return (
<div className={`px-3.5 lg:px-[60px] py-9 mb-[30px] rounded-xl lg:rounded-[9px] justify-between md:flex  shadow-[0px_2px_35px_0px_#00000033] ${isLocal ? `bg-[url('/newstrip/newstrip8_3.png')] lg:bg-[url('/newstrip/newstrip8_1.png')]` : `bg-[url('/blog/newstrip/newstrip8_3.png')] lg:bg-[url('/blog/newstrip/newstrip8_1.png')]`} bg-no-repeat bg-contain bg-bottom bg-[#FF2D46] items-center`}>
        <div className='md:w-2/3 text-center lg:text-left'>
                  <span className='text-[26px] font-medium text-white leading-[130%]'>Predict Your IELTS Score with our Free<span className='font-semibold'> IELTS Score Calculation Tool </span></span>
                  <Image src="/newstrip/newstrip8_2.png" width={118} height={22} className=' m-auto lg:ml-0' alt='Predict Your Score'/>
                     <a href="#" className='w-fit py-2.5 px-3.5 bg-white !text-lg font-semibold rounded-[9px] !text-[#FF2D46] mt-5 flex m-auto lg:ml-0'>Explore Now
                        </a>
        </div>
              <Image src="/newstrip/newstrip8.png" width={175} height={152} className='hidden sm:block' alt='Predict Your Score' />
  </div>

)
}