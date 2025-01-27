
"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '@/redux/slices/sidebarSlice';
import SidebarMobileTestPrep from '@/ui/layout/mobile-layout/SidebarMobileTestPrep';
import NotificationDropdown from './NotificationDropdown';
import { useSelector } from 'react-redux';

const MobileHeader = ({ header, examname, IsAuthenticate }) => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);
  useEffect(() => {
    if (showSidebar) {
      const body = document.getElementsByTagName('body')[0];
      body.style.overflow = 'hidden';
    } else {
      const body = document.getElementsByTagName('body')[0];
      body.style.overflow = 'auto';
    }
  }, [showSidebar]);
  return (
    <>
      <span className=' mb-24 block'></span>
      <div className='fixed backdrop-blur-[41px] rounded-[15px]  w-[95%] z-50 m-auto top-2 right-0 left-0 bg-[#F4F7FE]/50 p-3'>
        <div className="flex justify-between items-center">
          <button onClick={() => dispatch(toggleSidebar())} aria-label='hamburger' className="bg-[#006ac91a] w-fit p-2 rounded-[10px] flex flex-col gap-1 z-50 relative">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.25 6.75H20.75M4.25 12H20.75M4.25 17.25H12.5" stroke='#006ac9' strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <a href={process.env.NEXT_PUBLIC_LARAVEL_APP_URL} className="relative">
            <Image src="/logo.png" width={107} height={33} alt='gradding' priority={true} />

          </a>
          <NotificationDropdown header={header} IsAuthenticate={IsAuthenticate} examname={examname} />
        </div>
      </div>
      <SidebarMobileTestPrep header={header} examname={examname} />
    </>
  )
}

export default MobileHeader