"use client"
import React, {useState} from 'react'
// import { Accordion, AccordionItem } from "@nextui-org/react";
// import { FaPlus } from "react-icons/fa6";
// import { RxDividerVertical } from "react-icons/rx";
import "@/styles/common/faq.scss"

const Faq = (faqs) => {
  const [isOpen,setIsOpen] = useState(-1);
  const faq = faqs.faqs;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    "mainEntity": faq?.map((faq, index) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  }
  const handleOpen = (key) => {
    key !== isOpen ? setIsOpen(key) : setIsOpen(-1);
  }
  return (
    <div className='container my-12 lg:my-20 lg:w-2/3'>
      <h2 className=' text-2xl lg:text-[28px] xl:text-[30px] 2xl:text-[34px] font-normal text-center mb-5'>Frequently Asked <span className="text-test-prep font-medium block sm:inline-block"> Questions</span></h2>
      {/* <Accordion
        className="text-sm"
        itemClasses={{
          title: "font-normal text-sm lg:text-[16px] xl:text-lg",
          base: "faq-title"
        }}
        defaultExpandedKeys={["theme"]}>
        {faq && Object.entries(faq).map(([key, faq]) => (
          <AccordionItem className='text-sm' key={key} aria-label="1" indicator={({ isOpen }) => (isOpen ? <RxDividerVertical /> : <FaPlus />)} title={faq.question}>
            <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
          </AccordionItem>
        ))};
      </Accordion> */}
      <CustomAccor faqs={faqs} isOpen={isOpen} setIsOpen={setIsOpen} handleOpen={handleOpen} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}

const CustomAccor = ({faqs, isOpen, setIsOpen,handleOpen}) => {
  const faq = faqs.faqs;
  const plusSvg = <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4.72858" y="0.0999985" width="1.54286" height="10.8" fill="#6E6E73"/>
  <rect x="10.9" y="4.72857" width="1.54286" height="10.8" transform="rotate(90 10.9 4.72857)" fill="#6E6E73"/>
  </svg>;
  const minusSvg = <svg width="11" height="3" viewBox="0 0 11 3" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="10.9" y="0.728577" width="1.54286" height="10.8" transform="rotate(90 10.9 0.728577)" fill="#6E6E73"/>
  </svg>;
  return(
    <div className='px-2'>
      {faq && Object.entries(faq).map(([key,faq]) => (
          <div className={`border-b-1 border-[#DCDCDC]`}>
            <div onClick={()=>handleOpen(key)} key={key} className='flex gap-3 py-2 md:py-4 items-center'>
              <span className='flex-1 text-foreground font-normal text-sm lg:text-base xl:text-lg'>{faq.question}</span>
              <div className='relative size-3 flex items-center justify-center'>
                <span className={`${isOpen == key?"-rotate-90 opacity-0":"rotate-0 opacity-100"} duration-400 absolute`}>{plusSvg}</span>
                <span className={`${isOpen == key?"rotate-0 opacity-100":"rotate-90 opacity-0"} duration-400 absolute`}>{minusSvg}</span>
              </div>
            </div>
            <div className={`grid transition-all overflow-hidden ${isOpen == key ? "grid-rows-[1fr] opacity-100 pb-2" : "grid-rows-[0fr] opacity-0"}`}>
              <div className={`overflow-hidden text-sm xl:text-base [&>ul]:list-disc [&>ul]:list-insidep`} dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default Faq;