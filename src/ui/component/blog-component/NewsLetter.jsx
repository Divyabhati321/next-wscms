'use client';

import { Button, useDisclosure } from '@nextui-org/react'
import Image from 'next/image'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { newsletter } from '@/lib/website';
import NewsLetterModel from "@/ui/component/modal/NewsLetterModal";

const NewsLetter = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [validation, setValidation] = useState(false)
    const pathname = usePathname()

    const handdleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        if(formData.get('email') == ''){
            setValidation(true);
            return;
        }
        formData.append("url",pathname);
        formData.append("source",'Subscribe-Form');
       
        const success = await newsletter(formData);
        if (success) {
            if (success.status === 200) {
                onOpen();
                setValidation(false);
                e.target.reset();
            }
        }else{
            console.error('Failed to subscribe');
        }
    }

    return (
        <>
            <div className='container  my-8 sm:my-16 '>
                <div className='px-2  py-14 bg-[#F7C32E]  rounded-[8px] m-auto relative overflow-hidden'>
                    <div className='flex flex-col items-center justify-center w-full sm:w-1/2 m-auto'>
                        <p className='text-2xl sm:text-[38px] font-semibold text-center leading-[130%]'>Subscribe to our Newsletter for Newest Course Updates</p>
                        <form className='w-full my-4 relative' onSubmit={handdleSubmit}>
                            <div className='flex items-center justify-between bg-white p-1 rounded-full w-full sm:w-2/3 m-auto'>
                            <div className='w-3/4 pl-3 pr-1'>
                                <input type='email' name='email' onKeyUp={() => setValidation(false)} className='w-full outline-none text-[15px] text-[#9A9EA4]' placeholder='Enter your email'/>
                            </div>
                            <Button type='submit' className='py-2 px-4 text-white text-sm sm:text-[15px] font-medium rounded-full bg-[#1D3B53] w-1/4  border-white'>Subscribe!</Button>
                        </div>
                        {validation ? <span className='text-danger text-sm font-medium absolute left-[5%] sm:left-[20%] '>Invalid Email</span> : ''}
                        </form>
                    </div>
                    <Image src="/blog/newsletter1.png" width={173} height={141} alt='bg-image' className='absolute -left-10 sm:left-0 -bottom-10 sm:bottom-0'/>
                    <Image src="/blog/newsletter2.png" width={258} height={210} alt='bg-image' className='hidden sm:block absolute right-0 bottom-0'/>
                    <Image src="/blog/newsletter3.png" width={54} height={39} alt='bg-image' className='absolute top-[8%] right-5 sm:right-unset sm:left-1/3'/>
                </div>
            </div>
            <NewsLetterModel isOpen={isOpen} onOpen={onOpen} onOpenChange={onOpenChange} />
        </>
    )
}

export default NewsLetter