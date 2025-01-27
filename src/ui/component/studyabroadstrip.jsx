'use client'

import React from 'react'
import Image from 'next/image'

const isLocal = process.env.NEXT_PUBLIC_APP_MODE == 'local' ? true : false;
export const Strip1 =() =>
{
    return(
        <div className='lg:py-3 lg:pl-9 bg-white rounded-[9px] my-[30px] flex relative shadow-[0px_2px_35px_0px_#00000033]'>
             <Image src="/strip/strip1_2.png" width={72} height={66} className='sm:hidden left-1 top-1 absolute'/>
             <Image src="/strip/strip1_3.png" width={258} height={106} className='sm:hidden absolute mx-6'/>
            <div className='md:w-1/3 pt-[89px] lg:pt-0 px-[9px] lg:p-0 pb-6 lg:pb-0 text-center lg:text-left'>
           
                <p className='!text-[22px] lg:!text-[26px] !font-medium !px-[30px] lg:!px-0 !leading-[130%]'>Uncover More About <span className='!text-[#066AC9] !text-[26px] font-semibold'>Study Abroad UK</span></p>
                <p className='!text-base !text-[#5B5B5B] !mt-2.5 !mb-4 !font-medium'>Learn Everything about studying in UK</p>
                <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded m-auto lg:ml-0 shadow-[0px_0px_10px_0px_#066AC9]'>Let’s Take a Flight</a>
            </div>
           <Image src="/strip/strip1.png" width={353} height={116} className='hidden sm:block  absolute -top-8 left-72'/>
            <Image src="/strip/strip1_1.png" width={267} height={151} className='hidden sm:block absolute -bottom-5 -right-8'/>
        </div>
    )
}

export const Strip2 =() =>
{
    return (
        <div className='pt-6 lg:pt-7 pb-9 lg:pb-7 px-4 lg:px-16 text-center mb-[30px] rounded-[9px] shadow-[0px_2px_35px_0px_#00000033] bg-gradient-to-r from-[#04519B] to-[#066AC9] relative'>
            <Image src="/strip/strip2.png" width={104} height={162} className='hidden sm:block absolute bottom-0 left-0'/>
            <Image src="/strip/strip2_1.png" width={69} height={109} className='sm:hidden absolute bottom-0 left-0 rounded-[9px]'/>
            <p className='!text-[22px] lg:!text-[28px] font-medium !text-white !leading-[130%]'>Looking for Best Courses to <span className='!text-[28px]'>Study in UK ?</span></p>
            <p className='!text-lg !mt-4 font-medium !text-white !hidden sm:!block !mt-b lg:!mb-5'>UK offer courses in several fields for the students</p>
            <p  className='!text-base !mt-5 font-medium !text-white sm:!hidden leading-[130%] !mb-6 lg:!mb-5'>UK offer courses in several fields for the students to pursue as per their interests</p>
            <a href="#" className='w-fit flex py-1.5 px-4 bg-white text-[#066AC9] text-[15px] font-semibold rounded-md m-auto shadow-[0px_0px_10px_0px_#FFFFFF]'>Take a Look</a>
        </div>
    )
}

export const Strip3 =() =>
{
    return(
        <div className={`justify-center mb-[30px] rounded-[9px] text-center lg:text-left flex shadow-[0px_2px_35px_0px_#00000033] ${isLocal ? `bg-[url('/strip/strip3_2.png')] lg:bg-[url('/strip/strip3.png')]` : `bg-[url('/blog/strip/strip3_2.png')] lg:bg-[url('/blog/strip/strip3.png')]`} bg-white bg-bottom bg-contain bg-no-repeat relative`}>
          <Image src="/strip/strip3_1.png" width={195} height={205} className='bottom-0 hidden sm:block md:mr-[41px]' />
          <div className='lg:w-[58%] pt-6 pb-24 lg:pb-6  lg:ml-10'>
            <p className='!text-[26px] lg:!text-[28px] !text-[#066AC9] !leading-[130%] font-semibold'>Gradding <span className='!text-[24px] lg:!text-[26px] !text-[#2A2A2A] font-medium'>Help You Achieve Your Study goals in USA</span></p>
            <p className='!mt-4 !text-[#5B5B5B] !text-base font-medium !mb-7 lg:!mb-5'>Learn Everything about studying in USA</p>
            <a href="#" className='w-fit flex py-1.5 px-4 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto lg:ml-0 shadow-[0px_0px_10px_0px_#066AC9]'>Know More</a>

          </div>
          <Image src="/strip/strip3_4.png" width={111} height={117} className='sm:hidden bottom-0 right-0 absolute w-[38%]'/>

        </div>
    )
}
export const Strip4 =() =>
{
    return(
        <div className={`px-6 lg:px-16 lg:py-4 justify-around bg-white flex mb-[30px] text-center lg:text-left shadow-[0px_2px_35px_0px_#00000033] rounded-[9px] ${isLocal ? `bg-[url('/strip/strip4_2.png')] lg:bg-none`: `bg-[url('/blog/strip/strip4_2.png')] lg:bg-none`} bg-white bg-bottom bg-contain bg-no-repeat`}>
            <Image src="/strip/strip4.png" width={249} height={169} className='sm:block hidden'/>
            <div className='lg:w-1/2 py-4 lg:py-9'>
                <p className='!text-[22px] lg:!text-[26px] font-medium !leading-[130%]'>Several reasons Why Students Opt for the <span className='!text-[#066AC9] !text-3xl lg:!text-[26px] font-semibold'>US ? </span></p>
                <Image src="/strip/strip4_1.png" width={190} height={129} className='sm:hidden m-auto mb-7 lg:mb-5'/>
                <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto !mt-4 lg:!mt-5 lg:ml-0 shadow-[0px_0px_10px_0px_#066AC9]'>Help me Study in USA</a>
            </div>

        </div>
    )
}

export const Strip5 =() =>
{
    return(
        <div className={`text-center lg:text-left justify-around rounded-[9px] mb-[30px] shadow-[0px_2px_35px_0px_#00000033] bg-white ${isLocal ? `lg:bg-[url('/strip/strip5.png')]`: `lg:bg-[url('/blog/strip/strip5.png')]`} bg-bottom bg-no-repeat bg-contain flex relative`}>
            <div className='pt-5 lg:pt-9 pb-12 lg:pb-9 px-10'>
                <p className='!text-[26px] font-medium !leading-[130%]'>Uncover More About <span className='!text-[#066AC9] font-semibold'>Study in Australia</span></p>
                <p className='!mt-4 !text-[#5B5B5B] font-medium !text-base !leading-[130%] !mb-7 lg:!mb-6 '>Offering Degree that is accepted worldwide</p>
                <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto lg:ml-0 '>Study in Australia </a>
            </div>
            <Image src="/strip/strip5_1.png" width={221} height={199} className='hidden sm:block'/>
            <Image src="/strip/strip5_2.png" width={76} height={63} className='sm:hidden absolute bottom-1.5 left-0'/>
            <Image src="/strip/strip5_3.png" width={80} height={84} className='sm:hidden absolute bottom-0 right-0'/>
        </div>
    )
}

export const Strip6 =() =>
{
    return(
        <div className='rounded-[9px] flex bg-gradient-to-r from-[#8A9ABF] to-[#4F669A] shadow-[0px_2px_35px_0px_#00000033] relative mb-[30px] items-center lg:px-3.5'>
            <Image src="/strip/strip6.png" width={162} height={159} className='hidden sm:block absolute'/>
            <div className='px-2.5 lg:px-0 py-11 lg:py-7 text-center m-auto lg:w-1/2'>
            <p className='!text-[22px] lg:!text-[26px] !text-white font-medium !leading-[130%]  !mb-7 lg:!mb-6'>Explore the Famous Courses to <span className='!text-[26px] font-semibold'>Pursue in Australia</span></p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-white !text-[#066AC9] text-[15px] font-semibold rounded-md m-auto shadow-[0px_0px_10px_0px_#FFFFFF]'>View Courses </a>
            
            </div>
            <Image src="/strip/strip6_1.png" width={183} height={178} className='hidden sm:block absolute right-0 bottom-0'/>
            <Image src="/strip/strip6_3.png" width={107} height={104} className='sm:hidden absolute right-0 bottom-0 w-[30%]'/>

        </div>
    )
}

export const Strip7 =() =>
{
    return(
        <div className={`py-6 lg:py-10 px-12 lg:px-0 rounded-[9px] mb-[30px] bg-white ${isLocal ? `lg:bg-[url('/strip/strip7.png')] bg-none` : `lg:bg-[url('/blog/strip/strip7.png')] bg-none`} shadow-[0px_2px_35px_0px_#00000033] bg-bottom bg-no-repeat bg-contain relative`}>
            <Image src="/strip/Strip7_2.png" width={252} height={154}  className='absolute hidden sm:block top-0'/>
            <Image src="/strip/strip7_1.png" width={18} height={225} className='absolute bottom-0 left-20 hidden sm:block'/>
            <div className='lg:w-[67%] lg:m-auto text-center '>
            <p className='!text-[22px] lg:!text-[26px] font-semibold lg:font-medium !text-[#066AC9] !leading-[130%] lg:text-left  !mb-5 '>Study in <span className='font-semibold !text-[#E82F2F]'>Canada</span> to Transform Your <span className='!text-3xl font-bold'>Student Life </span><span className='!text-base font-medium !text-[#5B5B5B]'>Get tons of opportunity while living your dream</span></p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto '>Am I Eligible?</a>
            </div>
           
            <Image src="/strip/strip7_3.png" width={123} height={123}  className='absolute right-0 bottom-0 hidden sm:block'/>
            <Image src="/strip/strip7_4.png" width={80} height={80} className='absolute right-0 bottom-0 sm:hidden' />

        </div>
    )
}

export const Strip8 =() =>
{
    return(
        <div className=' py-12 lg:py-5 rounded-[9px] bg-gradient-to-r from-[#045199] to-[#0064C2] shadow-[0px_2px_35px_0px_#00000033] relative mb-[30px] relative'>
            <Image src="/strip/strip8.png" width={85} height={82} className='absolute -left-6 hidden sm:block'/>
            <Image src="/strip/strip8_1.png" width={36} height={35} className='absolute left-20 bottom-1.5 hidden sm:block'/>
            <div className='lg:w-2/3 m-auto text-center px-2'>
            <p className='!text-[22px] lg:!text-[26px] !text-white font-medium !mb-9 lg:!mb-5 !leading-[130%]'>Gradding offers a vast range of programs and diploma <span className='!text-[26px] font-semibold'>courses in Canada</span></p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-white !text-[#066AC9] text-[15px] font-semibold rounded-md m-auto'>Grab Now </a>
            </div>

            <Image src="/strip/strip8_2.png" width={124} height={121} className='absolute -bottom-6 -right-6 hidden sm:block'/>
            <Image src="/strip/strip8_3.png" width={84} height={81}  className='absolute bottom-0 left-0 sm:hidden'/>
        </div>
    )
}

export const Strip9 =() =>
{
    return (
        <div className={`pl-3.5 lg:pl-10 pr-9 lg:pr-10 pt-3.5 lg:pt-10 pb-11 lg:pb-10 rounded-[9px] mb-[30px] shadow-[0px_2px_35px_0px_#00000033] bg-white ${isLocal ? `bg-[url('/strip/strip9_3.png')] lg:bg-[url('/strip/strip9.png')]`: `bg-[url('/blog/strip/strip9_3.png')] lg:bg-[url('/blog/strip/strip9.png')]`} bg-right bg-no-repeat bg-contain relative`}>
            <p className='!text-[22px] lg:!text-[26px] font-medium !leading-[130%]'>Problem Finding Universities in <span className='font-semibold !text-[#066AC9]'>Canada ?</span></p>
            <p className='!text-base font-medium !text-[#5B5B5B] !mt-3.5 !leading-[130%]'>Try Our College Predictor Tool</p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md !mt-7 lg:!mt-5'>College Predictor</a>
            <Image src="/strip/strip9_1.png" width={110} height={129} className='absolute bottom-0 left-96 hidden sm:block'/>

        </div>
    )
}

export const Strip10 =() =>
{
    return (
        <div className={`pt-5 lg:pt-6 pl-1.5 lg:pl-8 pb-20 lg:pb-12 pr-1.5 lg:pr-80 mb-[30px] text-center lg:text-left rounded-[9px] ${isLocal ? `bg-[url('/strip/strip10_2.png')] lg:bg-[url('/strip/strip10.png')]` : `bg-[url('/blog/strip/strip10_2.png')] lg:bg-[url('/blog/strip/strip10.png')]`} shadow-[0px_2px_35px_0px_#00000033] bg-white lg:bg-right-bottom bg-bottom bg-no-repeat bg-contain`}>
            <p className='!text-[22px] lg:!text-[23px] font-medium !leading-[130%]'>Find Universities to Study in <span className='!text-[26px] lg:!text-[26px] !text-[#066AC9]'>UK from India </span></p>
            <p className='!text-[16px] lg:!text-lg  !mt-3.5 lg:!mt-5 !mb-5 lg:!mb-3.5 !leading-[130%]'> UK has 4 colleges in the top 10 global universities, Main reason to study in UK</p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto lg:ml-0'>Take a Tour</a>

        </div>
    )
}

export const Strip11 =() =>
{
    return(
        <div className={`text-center lg:text-left lg:pl-14 mb-[30px] justify-around rounded-[9px] ${isLocal ? `bg-[url('/strip/strip11_3.png'),linear-gradient(to_bottom,rgba(0,94,182,1),rgba(0,100,194,1))] lg:bg-[url('/strip/strip11.png'),linear-gradient(to_right,rgba(4,81,153,1),rgba(0,100,194,1))]` : `bg-[url('/blog/strip/strip11_3.png'),linear-gradient(to_bottom,rgba(0,94,182,1),rgba(0,100,194,1))] lg:bg-[url('/blog/strip/strip11.png'),linear-gradient(to_right,rgba(4,81,153,1),rgba(0,100,194,1))]`} shadow-[0px_2px_35px_0px_#00000033] lg:bg-right bg-bottom bg-no-repeat bg-contain flex relative`}>
            <Image src="/strip/strip11_1.png" width={227} height={169} className='hidden sm:block absolute left-14 bottom-0'/>
            <div className='py-10 lg:py-7 lg:w-[53%] lg:pl-16'>
            <p className='px-4 lg:px-0 !text-[22px] lg:!text-[26px] font-medium !text-white !leading-[130%] !mb-6 lg:!mb-5 '>Book a <span className='!text-[26px]'>FREE Session </span>for Your Success Path</p>
            <a href="#" className='w-fit flex py-1.5 px-4 bg-white !text-[#066AC9] text-[15px] font-semibold rounded-md m-auto lg:ml-0 shadow-[0px_0px_10px_0px_#FFFFFF]'>Book a FREE Session</a>
            </div>
            <Image src="/strip/strip11_2.png" width={164} height={33} className='hidden sm:block absolute top-0 right-0'/>
            <Image src="/strip/strip11_4.png" width={114} height={29} className='sm:hidden absolute top-0 right-0'/>
        </div>
    )
}

export const Strip12 =() =>
{
    return(
        <div className={`pt-8 lg:pt-5 pb-20 lg:pb-5 px-3 lg:px-20 mb-[30px] rounded-[9px] ${isLocal ? `bg-[url('/strip/strip12_1.png')] sm:bg-[url('/strip/strip12.png')]` : `bg-[url('/blog/strip/strip12_1.png')] sm:bg-[url('/blog/strip/strip12.png')]`} shadow-[0px_2px_35px_0px_#00000033] bg-white sm:bg-right bg-bottom bg-no-repeat bg-cover sm:bg-contain`}>
            <p className='!text-[22px] lg:!text-[26px] font-normal w-3/4 lg:w-[63%] !leading-[130%] mb-12 lg:mb-0'>High Chances of getting into your<span className='!text-[26px] !text-[#066AC9] font-semibold'> Dream University in Australia</span></p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md !mt-6 lg:!mt-5'>Call Us Now</a>


        </div>
    )
}

export const Strip13 =() =>
{
    return(
        <div className={`rounded-[9px] mb-[30px] shadow-[0px_2px_35px_0px_#00000033] items-center flex ${isLocal ? `bg-[url('/strip/strip13_4.png')] lg:bg-[url('/strip/strip13.png')]` : `bg-[url('/blog/strip/strip13_4.png')] lg:bg-[url('/blog/strip/strip13.png')]`} bg-white bg-bottom bg-no-repeat bg-contain relative`}>
            <div className='lg:w-2/5 py-5 lg:py-10 pr-7 lg:pr-0 pl-7 lg:pl-10 text-center lg:text-left'>
            <p className='!text-[22px] lg:!text-[26px] font-normal !leading-[130%] lg:!mb-5'>Study in <span className='!text-3xl lg:!text-[26px] !text-[#066AC9] font-semibold'> New Zealand </span> and Live Your Dream</p>
            <Image src="/strip/strip13_3.png" width={99} height={82} className='md:hidden m-auto mt-5 mb-8 lg:mb-5'/>
             <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto lg:ml-0 '>Help me Study in New zealand</a>
            </div>
           
            <Image src="/strip/strip13_1.png" width={461} height={280} className='right-48 hidden md:block absolute left-[35%]'/>

        </div>
    )
}

export const Strip14 =() =>
{
    return(
        <div className={`rounded-[9px] flex mb-[30px] shadow-[0px_2px_35px_0px_#00000033] ${isLocal ? `lg:bg-[url('/strip/strip14.png')]` : `lg:bg-[url('/blog/strip/strip14.png')]`} bg-white bg-bottom bg-no-repeat bg-contain relative`}>
            <Image src="/strip/strip14_1.png" width={283} height={185} className='hidden sm:block rounded-[9px] lg:absolute h-full'/>
            <div className='pt-4 pb-12 lg:pb-8 px-7 lg:px-0 text-center lg:z-10 lg:m-auto'>
            <p className='!text-[22px] lg:!text-[26px] font-medium !leading-[130%]'>Find the Best University in <span className='font-semibold !text-[#066AC9]'>New Zealand</span></p>
            <p className='!text-[15px] lg:!text-base !text-[#5B5B5B] !mt-4 !mb-5 !leading-[130%]'>Try Our College Predictor Tool</p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto z-40 relative'>College Predictor</a>
            </div>
            <Image src="/strip/strip14_3.png" width={191} height={105} className='absolute left-0 bottom-0 sm:hidden rounded-[9px]'/>
            <Image src="/strip/strip14_5.png" width={84} height={96} className='absolute right-0 bottom-0 sm:hidden w-[26%]'/>
            <Image src="/strip/strip14_2.png" width={149} height={169} className='hidden sm:block absolute bottom-0 right-0'/>

        </div>
    )
}

export const Strip15 =() =>
{
    return(
        <div className={`pt-5 lg:pt-8 pb-12 lg:pb-24 px-11 lg:px-10 rounded-[9px] flex mb-[30px] shadow-[0px_2px_35px_0px_#00000033] ${isLocal ? `bg-[url('/strip/strip15.png')]` : `bg-[url('/blog/strip/strip15.png')]`} bg-[#F9CF9D] bg-bottom bg-no-repeat bg-contain relative`}>
            <Image src="/strip/strip15_1.png" width={172} height={113} className='hidden sm:block' />
            <div className='lg:px-16 lg:w-2/3 text-center lg:text-left'>            
                <p className='!text-[26px] lg:!text-3xl !text-[#066AC9] font-semibold !leading-[130%]'>New Zealand <span className='!text-[26px] !text-[#2A2A2A]'>The Top Country to study abroad</span></p>
            <Image src="/strip/strip15_2.png" width={131} height={162} className='absolute right-0 top-0 hidden sm:block' />
            <Image src="/strip/strip15_3.png" width={72} height={84} className='absolute right-0 top-0 sm:hidden' />
            <a href="#" className='w-fit py-2 px-3.5 bg-white !text-[#066AC9] text-[15px] font-semibold rounded-md !mt-5 items-center flex gap-[9px] m-auto lg:ml-0'>Know More <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="6.5" cy="6.5" r="6" stroke="#066AC9"/>
<path d="M5.56016 9.4654C5.44618 9.4654 5.33211 9.42191 5.24524 9.3349C5.07125 9.16104 5.07125 8.87897 5.24524 8.70509L7.35131 6.59891L5.24524 4.49273C5.07125 4.31885 5.07125 4.03678 5.24524 3.86291C5.41901 3.68893 5.70129 3.68893 5.87506 3.86291L8.29616 6.28399C8.47013 6.45787 8.47013 6.73994 8.29616 6.91383L5.87506 9.3349C5.78818 9.42192 5.67411 9.4654 5.56016 9.4654Z" fill="#066AC9"/>
</svg>
</a>
</div>

        </div>
    )
}

export const Strip16 =() => 
{
    return(
        <div className={`py-5 lg:pt-10 pb-36 lg:pb-10 px-5 lg:px-[70px] rounded-[9px] mb-[30px] flex shadow-[0px_2px_35px_0px_#00000033] ${isLocal ? `bg-[url('/strip/strip16_2.png')] lg:bg-[url('/strip/strip16.png')]` : `bg-[url('/blog/strip/strip16_2.png')] lg:bg-[url('/blog/strip/strip16.png')]`} bg-white bg-bottom bg-no-repeat bg-contain relative`}>
            <div className='lg:w-2/3 text-center lg:text-left'>
            <p className='!text-[22px] lg:!text-[26px] font-medium !mb-4 lg:!mb-6 !leading-[130%]'>Want to Know More About Study in <span className='!text-[26px] font-semibold !text-[#066AC9]'>Germany ?</span></p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto lg:ml-0'>Help me Study in Germany</a>
            <Image src="/strip/strip16_6.png" width={127} height={155} className='sm:hidden absolute bottom-0 left-28 w-[38%]'/>
            </div>
            <Image src="/strip/strip16_1.png" width={168} height={205} className='hidden sm:block absolute bottom-0 right-16'/>
            

        </div>
    )
}

export const Strip17 =() =>
{
    return(
        <div className={`text-center lg:text-left pt-5 lg:pt-8 pb-32 lg:pb-8 px-4 lg:px-8 rounded-[9px] mb-[30px] ${isLocal ? ` bg-[url('/strip/strip17_2.png')] lg:bg-[url('/strip/strip17.png'),linear-gradient(to_right,rgba(4,81,153,1),rgba(0,100,194,1))]` : `bg-[url('/blog/strip/strip17_2.png')] lg:bg-[url('/blog/strip/strip17.png'),linear-gradient(to_right,rgba(4,81,153,1),rgba(0,100,194,1))]`} bg-[#066AC9] shadow-[0px_2px_35px_0px_#00000033] lg:bg-right bg-bottom bg-no-repeat bg-contain`}>

            <p className='!text-[22px] lg:!text-[26px] font-medium !text-white md:w-1/2 !leading-[130%]'>Main Reasons Why you should <span className='!text-[26px] lg:!text-3xl font-semibold'>Study in Germany </span></p>
            <a href="#" className='w-fit py-2 px-3.5 bg-white !text-[#066AC9] text-[15px] font-semibold rounded-md !mt-5 lg:!mt-8 items-center flex gap-[9px] m-auto lg:ml-0'>Know More
</a>

        </div>
    )
}

export const Strip18=() =>
{
    return(
        <div className={`pt-24 lg:pt-5 pb-8 lg:pb-5 px-6 lg:px-0 text-center rounded-[9px] mb-[30px] ${isLocal ? `bg-[url('/strip/strip18_2.png')] lg:bg-[url('/strip/strip18.png')]` : `bg-[url('/blog/strip/strip18_2.png')] lg:bg-[url('/blog/strip/strip18.png')]`} bg-white shadow-[0px_2px_35px_0px_#00000033] lg:bg-left bg-left-top bg-no-repeat bg-contain relative`}>

            <p className='!text-[22px] lg:!text-[26px] font-semibold lg:font-medium !leading-[130%]'>Explore <span className='!text-[26px] font-semibold !text-[#066AC9]'>Top Courses </span>to Study in Germany</p>
            <p className='!text-base font-medium !text-[#5B5B5B] !mt-4 lg:!mt-3 !mb-8 lg:!mb-5 !leading-[130%]'>Options of a Wide Variety of Courses in germany</p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto'>Find Universities</a>
            <Image src="/strip/strip18_1.png" width={169} height={167} className='hidden sm:block absolute bottom-0 right-0'/>
            <Image src="/strip/strip18_3.png" width={111} height={110} className='sm:hidden absolute bottom-0 right-0'/>


        </div>
    )
}

export const Strip19 =() =>
{
    return(
        <div className={`py-8 lg:py-10 pl-6 lg:pl-12 pr-24 lg:pr-12 rounded-[9px] mb-[30px] ${isLocal ? `bg-[url('/strip/strip19_2.png')] lg:bg-[url('/strip/strip19.png')]` : `bg-[url('/blog/strip/strip19_2.png')] lg:bg-[url('/blog/strip/strip19.png')]`} bg-white shadow-[0px_2px_35px_0px_#00000033] bg-bottom bg-no-repeat bg-contain relative`}>
            <p className='!text-[26px] font-medium lg:w-7/12 !leading-[130%] !mb-0'>Find the best University to Study in <span className='font-semibold !text-[#799205]'>Ireland </span></p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md !mt-5 lg:!mt-[18px]'>Help me Study in Ireland</a>
            <Image src="/strip/strip19_1.png" width={312} height={312} className='absolute right-0 bottom-0 hidden sm:block rounded-[9px]'/>
            <Image src="/strip/strip19_5.png" width={100} height={123} className='absolute right-0 bottom-0 sm:hidden rounded-[9px] w-[30%]'/>
        </div>
    )
}

export const Strip20 =() =>
{
    return(
        <div className={`px-5 lg:px-0px ${isLocal ? `bg-[url('/strip/strip20_bg.png')] lg:bg-none` : `bg-[url('/blog/strip/strip20_bg.png')] lg:bg-none`} bg-[#003713] bg-no-repeat bg-cover rounded-[9px] mb-[30px] flex `}>
            <Image src="/strip/strip20.png" width={283} height={183} className='hidden sm:block'/>
            <div className='py-5 lg:py-10 lg:w-1/2 text-center lg:text-left'>
                <p className='!text-[26px] font-medium !text-white !leading-[130%]'>Explore the Top Courses to <span className='font-semibold !text-[#A3C30A]'>Study in Ireland </span></p>
                <Image src="/strip/strip20_3.png" width={80} height={80} className='sm:hidden m-auto mt-7 mb-7' />
                <a href="#" className='w-fit py-2 px-3.5 bg-white !text-[#24292D] text-[15px] font-semibold rounded-md !mt-4 lg:!mt-6 items-center flex gap-[9px] m-auto lg:ml-0 shadow-[0px_0px_10px_0px_#FFFFFF]'>Help Us Study In Ireland</a>
            </div>

        </div>
    )
}

export const Strip21 =() =>
{
    return(
        <div className={`pt-3.5 lg:pt-10 pb-28 lg:pb-10 px-4 lg:px-16 rounded-[9px] mb-[30px] ${isLocal ? `bg-[url('/strip/strip21_1.png')] lg:bg-[url('/strip/strip21.png')]` : `bg-[url('/blog/strip/strip21_1.png')] lg:bg-[url('/blog/strip/strip21.png')]`} bg-white shadow-[0px_2px_35px_0px_#00000033] lg:bg-right bg-bottom bg-no-repeat bg-contain relative`}>
            <p className='!text-[26px] font-medium lg:w-2/3 !leading-[130%]'>Incredible Opportunity for Students to <span className='font-semibold !text-[#799205]'>Study in Ireland</span></p>
            <a href="#" className='w-fit py-2 flex px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md !mt-5 lg:!mt-6 hidden sm:block'>Find Courses & Fees</a>
            <a href="#" className='w-fit py-2 flex px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md !mt-4 lg:!mt-6 sm:hidden'>Know More</a>

        </div>
    )
}

export const Strip22 =() =>
{
    return(
        <div className={`text-center lg:text-left rounded-[9px] flex mb-[30px] justify-end ${isLocal ? `bg-[url('/strip/strip22_2.png')] lg:bg-[url('/strip/strip22.png')]` : `bg-[url('/blog/strip/strip22_2.png')] lg:bg-[url('/blog/strip/strip22.png')]`} bg-white shadow-[0px_2px_35px_0px_#00000033] bg-bottom bg-no-repeat bg-contain relative`}>
            <div className='lg:w-1/2 px-5 lg:px-0 pt-6 lg:pt-10 pb-12 lg:pb-10'>
            <p className='!text-[26px] font-medium !mb-6 lg:!mb-5 !leading-[130%]'>Things to Know About the <span className='font-semibold !text-[#066AC9]'> Student VISA </span></p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto lg:ml-0 relative z-40'>Find more about VISA</a>
            </div>
            <Image src="/strip/strip22_1.png" width={361} height={264} className='hidden sm:block' />
            <Image src="/strip/strip22_3.png" width={155} height={112} className='sm:hidden absolute bottom-0 right-0' />

        </div>
    )
}

export const Strip23 =() =>
{
    return(
        <div className={`px-6 pb-24 lg:pb-44 pt-6 text-center rounded-[9px] mb-[30px] ${isLocal ? `bg-[url('/strip/strip23_1.png')] lg:bg-[url('/strip/strip23.png')]` : `bg-[url('/blog/strip/strip23_1.png')] lg:bg-[url('/blog/strip/strip23.png')]`} bg-[#004063] shadow-[0px_2px_35px_0px_#00000033] bg-bottom bg-no-repeat bg-contain`}>
            <p className='!text-[26px] font-medium lg:w-[52%] !text-white !m-auto !mb-3.5 !leading-[130%]'>Explore More in your Studies get <span className='!text-3xl font-semibold !text-[#FF8E00]'>Student VISA NOW </span></p>
            <a href="#" className='w-fit flex py-1.5 px-4 bg-white !text-[#066AC9] text-[15px] font-semibold rounded-md m-auto shadow-[0px_0px_10px_0px_#FFFFFF]'>Find more about VISA</a>
        </div>
    )
}

export const Strip24 =() =>
{
    return(
        <div className='items-center bg-white flex mb-[30px] shadow-[0px_2px_35px_0px_#00000033] rounded-[9px] relative'>
            <Image src="/strip/strip24.png" width={207} height={205} className='hidden sm:block'/>
            <Image src="/strip/strip24_2.png" width={171} height={88} className='sm:hidden absolute top-0 right-0' />
            <div className='px-7 text-center pt-14 lg:pt-0 pb-10 lg:pb-0'>
                <p className='!text-[26px] !text-[#09539A] font-medium lg:font-semibold !mb-5 !leading-[130%]'>Get Your Student VISA <span className='!text-[28px] lg:!text-[26px] font-semibold'> Approved Now ! </span></p>
                <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto relative'>Find more about VISA</a>
            </div>
            <Image src="/strip/strip24_1.png" width={184} height={95} className='absolute right-0 hidden sm:block'/>

        </div>
    )
}

export const Strip25 =() =>
{
    return(
        <div className={`text-center px-2.5 lg:px-20 py-3.5 lg:py-8 rounded-[9px] mb-[30px] ${isLocal ? `lg:bg-[url('/strip/strip25.png')]` : `lg:bg-[url('/blog/strip/strip25.png')]`} bg-[#B89478] shadow-[0px_2px_35px_0px_#00000033] bg-bottom bg-no-repeat bg-contain`}>
            <p className='!text-[26px] !text-white font-medium !mb-2.5 lg:!mb-8 !leading-[130%]'> Book Student <span className='!text-[#1E1E1E] font-semibold'>Accommodations Near </span>Universities and Cities Across The Globe</p>
            <Image src="/strip/strip25_1.png" width={53} height={109} className='sm:hidden m-auto mb-2.5 lg:mb-8' />
            <a href="#" className='w-fit flex py-1.5 px-4 bg-white !text-[#1E1E1E] text-[15px] font-semibold rounded-md m-auto shadow-[0px_0px_10px_0px_#FFFFFF]'>Get Accommodation</a>
        </div>
    )
}

export const Strip26 =() =>
{
    return(
        <div className='px-2 lg:px-16 pt-4 lg:pt-8 pb-28 lg:pb-8 rounded-[9px] mb-[30px] shadow-[0px_2px_35px_0px_#00000033] flex bg-[#1C262D] relative'>
            <Image src="/strip/strip26.png" width={137}  height={177} className='absolute left-0 bottom-0 hidden sm:block' />
            <div className='text-center'>
            <p className='!text-white !text-[26px] font-medium !mb-4 lg:!mb-8 !leading-[130%]'>Book Student <span className='font-semibold'> Accommodations Near Universities </span> and Cities Across The Globe</p>
            <a href="#" className='w-fit flex py-1.5 px-4 bg-white !text-[#1E1E1E] text-[15px] font-semibold rounded-md m-auto shadow-[0px_0px_10px_0px_#FFFFFF]'>Get Accommodation</a>
            <Image src="/strip/strip26_2.png" width={180}  height={122} className='absolute right-10 bottom-0 sm:hidden' />
            </div>
            <Image src="/strip/strip26_1.png" width={196}  height={133} className='absolute right-0 bottom-0 hidden sm:block' />
           
        </div>
    )
}

export const Strip27 =() =>
{
    return(
        <div className={`py-3 lg:py-5 pl-11 pr-11 lg:pl-4 lg:pr-32 mb-[30px] rounded-[9px] justify-around flex ${isLocal ? `lg:bg-[url('/strip/strip27.png')]` : `lg:bg-[url('/blog/strip/strip27.png')]`} bg-[#35404D] shadow-[0px_2px_35px_0px_#00000033] bg-bottom bg-no-repeat bg-contain`}>
            <Image src="/strip/strip27_1.png" width={136} height={170} className='hidden sm:block'  />
            <div className='lg:w-1/2 text-center lg:text-left'>
            <p className='!text-[26px] font-medium !text-white !hidden sm:!block !mb-2.5 lg:!mb-5 !leading-[130%]'>Look for<span className='font-semibold'> Accommodations Near Universities </span>and Cities Across The Globe</p>
            <p className='!text-[26px] font-medium !text-white sm:!hidden !mb-2.5 lg:!mb-5 !leading-[130%]'>Look for<span className='font-semibold'> Accommodations Near you</span></p>
            <Image src="/strip/strip27_2.png" width={92} height={115} className='sm:hidden m-auto mt-2.5 mb-2.5 lg:mb-5' />
            <a href="#" className='w-fit flex py-1.5 px-4 bg-white !text-[#1E1E1E] text-[15px] font-semibold rounded-md m-auto lg:ml-0 shadow-[0px_0px_10px_0px_#FFFFFF]'>Get Accommodation</a>
            </div>
        </div>
    )
}

export const Strip28 =() =>
{
    return(
        <div className={`py-5 lg:py-0 rounded-[9px] mb-[30px] items-center justify-around flex shadow-[0px_2px_35px_0px_#00000033] ${isLocal ? `bg-[url('/strip/strip28_bg.png')] lg:bg-none` : `bg-[url('/blog/strip/strip28_bg.png')] lg:bg-none`} bg-white bg-no-repeat bg-cover relative `}>
            <Image src="/strip/strip28.png" width={342} height={342} className='hidden sm:block'/>
            <div className='text-center lg:text-right lg:w-1/3'>
                <p className='!text-[26px] font-medium lg:!mb-5 !leading-[130%]'>Want a <span className='font-semibold !text-[#066AC9]'> Scholarships </span> on your Study Plans ?</p>
                <Image src="/strip/strip28_4.png" width={170} height={150} className='sm:hidden m-auto'/>
                <a href="#" className='w-fit flex lg:float-right py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto mt-5 lg:mt-0'>Find more about Scholarship</a>
            </div>

        </div>
    )
}

export const Strip29 =() =>
    {
        return(
            <div className='py-5 lg:py-0 rounded-[9px] mb-[30px] items-center justify-around flex shadow-[0px_2px_35px_0px_#00000033] bg-white'>
                <Image src="/strip/strip29.png" width={267} height={223} className='hidden sm:block'/>
                <div className='text-center lg:text-right lg:w-1/3'>
                    <p className='!text-[26px] font-medium lg:!mb-5 !leading-[130%]'>Want a <span className='font-semibold !text-[#066AC9]'> Scholarships </span>  on your Study Plans ?</p>
                    <Image src="/strip/strip29_1.png" width={180} height={151} className='sm:hidden m-auto mt-3'/>
                    <a href="#" className='w-fit flex lg:float-right py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto'>Find more about Scholarship</a>
                </div>
    
            </div>
        )
    }
    
export const Strip30 =() =>
    {
        return(
            <div className="text-right lg:text-left rounded-[9px] mb-[30px] shadow-[0px_2px_35px_0px_#00000033] px-5 lg:px-16 pt-5 lg:pt-7 pb-28 lg:pb-7 bg-gradient-to-r from-[#E2B75B] to-[#E7D1A5] shadow-[0px_2px_35px_0px_#00000033] relative">
                
                <Image src="/strip/strip30_1.png" width={390} height={191} className='absolute bottom-0 left-0 sm:hidden'/>
                <p className='!text-[26px] font-medium lg:w-3/5 !mb-6 lg:!mb-9 !leading-[130%]'>We Provide Tons of <span className='font-semibold !text-white'> Scholarships </span> on your Study Plans</p>
                <a href="#" className='w-fit flex py-1.5 px-4 bg-white !text-[#1E1E1E] text-[15px] font-semibold rounded-md !ml-[50%] lg:!ml-0 shadow-[0px_0px_10px_0px_#FFFFFF]'>Get Scholarship</a>
                <Image src="/strip/strip30.png" width={358} height={179} className='absolute bottom-0 right-8 hidden sm:block'/>
            </div>
        )
    }

export const Strip31 =() =>
{
    return(
        <div className={`text-center lg:text-left py-[56px] lg:py-10 px-4 lg:px-24 mb-[30px] rounded-[9px] ${isLocal ? `bg-[url('/strip/strip31_1.png')] lg:bg-[url('/strip/strip31.png')]` : `lg:bg-[url('/blog/strip/strip31.png')] bg-[url('/blog/strip/strip31_1.png')]`} bg-white shadow-[0px_2px_35px_0px_#00000033] bg-bottom lg:bg-right bg-no-repeat bg-cover lg:bg-contain`}>
            <p className='!text-[26px] font-medium lg:w-3/5 !mb-5 !leading-[130%]'>We also Offer <span className='font-semibold !text-[#066AC9]'> Finance </span> on your Study Plans</p>
            <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto lg:ml-0 shadow-[0px_0px_10px_0px_#066AC9]'>Get Finance</a>
        </div>
    )
}

export const Strip32 =() =>
{
    return(
        <div className={`text-center lg:text-left py-11 lg:py-9 px-4 lg:px-24 mb-[30px] rounded-[9px] ${isLocal ? `bg-[url('/strip/strip32_1.png')] lg:bg-[url('/strip/strip32.png'),linear-gradient(to_right,rgba(4,81,153,1),rgba(0,100,194,1))]` : `bg-[url('/blog/strip/strip32_1.png')] lg:bg-[url('/blog/strip/strip32.png'),linear-gradient(to_right,rgba(4,81,153,1),rgba(0,100,194,1))]`} shadow-[0px_2px_35px_0px_#00000033] bg-bottom lg:bg-right bg-no-repeat bg-cover lg:bg-contain`}>
            <p className='!text-[26px] font-semibold !text-white lg:w-3/5 !mb-6 lg:!mb-5 !leading-[130%]'><span className='!text-[28px] lg:!text-3xl'>Gradding </span> Helps you to fulfil your dream of studying abroad</p>
            <a href="#" className='w-fit flex py-1.5 px-4 bg-white !text-[#066AC9] text-[15px] font-semibold rounded-md m-auto lg:ml-0 shadow-[0px_0px_10px_0px_#FFFFFF]'>Know more about Finance</a>
        </div>
    )
}

export const Strip33 =() =>
    {
        return(
            <div className={`text-center lg:text-left py-8 lg:py-6 px-2 lg:px-12 mb-[30px] rounded-[9px] ${isLocal ? `bg-[url('/strip/strip33_1.png')] lg:bg-[url('/strip/strip33.png')]` : `bg-[url('/blog/strip/strip33_1.png')] lg:bg-[url('/blog/strip/strip33.png')]`} bg-[#9EB4CE] shadow-[0px_2px_35px_0px_#00000033] bg-bottom lg:bg-right bg-no-repeat bg-contain`}>
                <p className='!text-[22px] lg:!text-[26px] !text-white font-medium lg:w-3/5 !mb-5 !leading-[130%]'>Don’t Worry about <span className='font-semibold !text-[#1E1E1E] !text-3xl'> Finance</span>, Let your inner Talent grow at its fullest</p>
                <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto lg:ml-0'>Know more about Finance</a>
            </div>
        )
    }

    export const Strip34 =() =>
        {
            return(
                <div className={`text-center pt-4 lg:pt-8 pb-28 lg:pb-40 px-6 lg:px-32 mb-[30px] rounded-[9px] ${isLocal ? `bg-[url('/strip/strip34_2.png')] lg:bg-[url('/strip/strip34.png'),linear-gradient(to_right,rgba(255,255,255,1),rgba(202,202,202,1))]` : `bg-[url('/blog/strip/strip34_2.png')] lg:bg-[url('/blog/strip/strip34.png'),linear-gradient(to_right,rgba(255,255,255,1),rgba(202,202,202,1))]`}  shadow-[0px_2px_35px_0px_#00000033] bg-white bg-bottom bg-no-repeat bg-contain lg:bg-cover relative`}>
                    <p className='!text-[26px] font-semibold text-[#2A2A2A] !mb-5 !leading-[130%]'>Expand Knowledge About Study in <span className='!text-3xl'>India</span></p>
                    <a href="#" className='w-fit flex py-2 px-3.5 bg-[#066AC9] !text-white text-[15px] font-semibold rounded-md m-auto'>Explore More to Study in India</a>
                    <Image src="/strip/strip34_1.png" width={150} height={99} className='absolute right-0 top-0 hidden sm:block rounded-[9px]' />
                </div>
            )
        }



