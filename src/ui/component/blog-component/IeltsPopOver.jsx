'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const IeltsPopOver = () => {
    const [animeStyle,setAnimeStyle] = useState(false);
    const [isHidden , setIsHidden] = useState(true);
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setAnimeStyle("bottom-[10rem] md:bottom-[6rem]")
    //     }, 5000);
    // },[]);
    useEffect(()=>{
        if(!animeStyle){
            setTimeout(()=>{
                setIsHidden(true);
            },600)
        }else{
            setIsHidden(false);
        }
    },[animeStyle]);
    const handleClose = () => {
        setAnimeStyle(false);
    }
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolling(window.scrollY >= 100); // Update when scrolled past the initial view
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
      }, []);
  return (
    <div className={`flex flex-col gap-5 w-[80%] md:w-fit fixed z-40 left-[22px] md:bottom-16 ${isScrolling ? 'bottom-24' : '-bottom-24'}`}>
        {/* content  */}
        <div className={`rounded duration-500 ${animeStyle?"mb-0 opacity-100 ":"-mb-5 opacity-0 "} ${isHidden?"hidden":""}`}>
            <div className='bg-[#0a5f54] py-5 px-4 relative flex rounded-t-xl gap-[5px]'>
                {/* close button  */}
                <span onClick={handleClose} className='absolute top-5 right-4 cursor-pointer sie-25'>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.32166 5.99998L11.8083 1.51315C11.9317 1.38963 11.9998 1.22485 12 1.04915C12 0.873342 11.9319 0.708366 11.8083 0.585049L11.4151 0.191976C11.2915 0.0681711 11.1267 0.000366211 10.9508 0.000366211C10.7752 0.000366211 10.6104 0.0681711 10.4868 0.191976L6.0002 4.67851L1.51337 0.191976C1.38995 0.0681711 1.22507 0.000366211 1.04927 0.000366211C0.873659 0.000366211 0.70878 0.0681711 0.585366 0.191976L0.192 0.585049C-0.064 0.841049 -0.064 1.25744 0.192 1.51315L4.67873 5.99998L0.192 10.4866C0.0684878 10.6103 0.000487805 10.7751 0.000487805 10.9508C0.000487805 11.1265 0.0684878 11.2913 0.192 11.4149L0.585268 11.808C0.708683 11.9317 0.873658 11.9996 1.04917 11.9996C1.22498 11.9996 1.38985 11.9317 1.51327 11.808L6.0001 7.32134L10.4867 11.808C10.6103 11.9317 10.7751 11.9996 10.9507 11.9996H10.9509C11.1266 11.9996 11.2914 11.9317 11.415 11.808L11.8082 11.4149C11.9316 11.2914 11.9997 11.1265 11.9997 10.9508C11.9997 10.7751 11.9316 10.6103 11.8082 10.4867L7.32166 5.99998Z" fill="#D3D3D3"></path>
                    </svg>
                </span>
                <Image src={"/blog/ieltsDP.png"} width={40} height={40} className='h-full' />
                <div className='flex flex-col gap-[3px]'>
                    <span className='text-base font-medium text-white'>Gradding IELTS</span>
                    <span className='text-white font-normal text-xs'>online</span>
                </div>
            </div>
            <div>
                <Image src={"/blog/WAChatImg.png"} width={350} height={141} />
            </div>
            <div className='bg-white py-5 px-6 grid place-items-center rounded-b-xl gap-[5px]'>
                <Link href={"https://wa.me/919773388670?text=I%20want%20to%20know%20more%20about%20Free%20IELTS%20Coaching"} 
                    className='block bg-[#4dc247] text-white text-sm md:text-base p-4 rounded-[50px] text-center font-medium w-full' target='_blank'
                >Claim FREE IELTS Coaching</Link>
            </div>
        </div>
        {/* trigger icon */}
       <div onClick={()=>setAnimeStyle(prev=>!prev)} className='cursor-pointer rounded-full p-2 bg-white w-fit '>
            <div className='rounded-full bg-[#2cb742] size-10 grid place-items-center'>
                <svg className='fill-[#ffffff]' xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 448 512">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                    </path>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default IeltsPopOver