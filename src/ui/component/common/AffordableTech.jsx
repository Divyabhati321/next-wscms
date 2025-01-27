import Image from 'next/image'
import React from 'react'
import { AdvanceTechCal, AdvancetechList, PteAdvancetechList, PteadvanceCal } from '../CustomIcons'
import Link from 'next/link'
import AuthButton from '../buttons/AuthButton'

const AffordableTech = ({background,affordableTech, examname}) => {
  return (
    <div className='container  my-10 sm:my-16'>
        <div className={`${background} flex items-center rounded-[14px] sm:rounded-[43px] flex-col-reverse p-4 xl:p-10  sm:flex-row xl:gap-0 justify-between`}>
            <Image src="/common/affordable.png" quality={100} alt='student' width={510} height={408} className='hidden sm:block w-fit'/>
            <div className="w-full sm:w-[50%] xl:w-2/5">
              <h2 className=' text-[24px] sm:text-[28px] xl:text-[30px] 2xl:text-[34px] leading-[130%] font-normal'><span className=' font-medium text-test-prep block'>{affordableTech?.title}</span>{affordableTech?.shortTitle}</h2>
              <div className="flex flex-col gap-4 sm:gap-8 my-4 sm:my-8">
                <div className="flex items-start gap-2 sm:gap-5">
                    <span className='p-3 bg-white rounded-full shadow-lg'>
                    {
                      examname === 'pte'?
                      <PteAdvancetechList />
                      :
                      <AdvancetechList />

                    }
                    </span>
                    <h3 className='text-[16px] xl:text-[18px] block'>{affordableTech?.desc1}</h3>
                </div>
                <div className="flex items-start gap-2 sm:gap-5">
                    <span className='p-3 bg-white rounded-full shadow-lg'>
                    {
                      examname === 'pte'?
                      <PteadvanceCal />
                      :
                      <AdvanceTechCal />

                    }
                    </span>
                    <h3 className='text-[16px] xl:text-[18px] block'>{affordableTech?.desc2}</h3>
                </div>
              </div>   
              <Image src="/common/affordable.png" quality={100} alt='student' width={510} height={408} className='my-3 mx-auto sm:hidden w-full'/>           
              <AuthButton url={affordableTech && affordableTech?.buttonUrl ? affordableTech?.buttonUrl : '#'} className='group cursor-pointer btn-test-prep transition-all  p-3 sm:p-4 text-center w-full xl:w-2/3 font-semibold text-sm xl:text-base rounded-[11px] text-white block'><span className='group-hover:drop-shadow-textshadow'>{affordableTech?.buttonText}</span></AuthButton>
            </div>
        </div>
    </div>
  )
}

export default AffordableTech