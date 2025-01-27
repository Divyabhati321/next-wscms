"use client"
import Navigation from '@/ui/component/test-preparation/Navigation'
import { Button } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import NotificationDropdown from '@/ui/layout/desktop-layout/NotificationDropdown'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginState } from '@/redux/slices/loginPopupSlice'

const DesktopHeader = ({ nextDashboard, header, examname, IsAuthenticate }) => {
  const dispatch = useDispatch();
  const [isScrolling, setIsScrolling] = useState(false);

  const isAuthLoaded = useSelector(state => state.auth?.isLoaded);

  if (IsAuthenticate == false) {
    IsAuthenticate = isAuthLoaded;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginClick = () => {
    dispatch(setLoginState({ redirectUrl: `${process.env.NEXT_PUBLIC_STUDY_ABROAD_DASHBOARD}`, status: 'true' }));
  };

  return (
    <div className={` backdrop-blur-[41px] rounded-[15px] xl:rounded-none border-[#0000001A]  xl:w-full z-50 xl:m-0 bg-[#ffffff99] ${isScrolling ? 'border-b-1' : ''}`}>
      <div className='container flex items-center justify-between gap-2 py-2.5'>
        <div className='flex items-center justify-between gap-2 2xl:gap-8'>
          <Link href={process.env.NEXT_PUBLIC_LARAVEL_APP_URL} className="relative block">
            <Image
              priority
              src="/logo.png"
              width={131}
              height={41}
              className=''
              alt="gradding logo"
            />

          </Link>
          <div className="hidden lg:block">
            <Navigation header={header} nextDashboard={nextDashboard} examname={examname} IsAuthenticate={IsAuthenticate} />
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="tel: +91 9773388670" className=" flex-col relative text-primary hidden lg:flex h-full rounded-[8px] border-[1.5px] py-[0.5px] border-primary  text-center capitalize font-semibold ">
            <span className='animate-pulse text-[10px] inline-block text-white bg-primary rounded-b-none rounded-[5px] m-[2px]'>Connect With Expert</span>
            <span className='mx-1 text-[14px] px-2'> {header?.phone}</span></Link>

          {IsAuthenticate ?
            <NotificationDropdown examname={examname} />
            :
            <Button onClick={handleLoginClick} className="text-[#fff] bg-primary inline-block rounded-md border-[1.5px] border-primary py-2 px-2 2xl:px-4 text-center capitalize font-semibold text-[14px] h-auto">login / signup</Button>
          }
        </div>
      </div>
    </div>
  )
}

export default DesktopHeader