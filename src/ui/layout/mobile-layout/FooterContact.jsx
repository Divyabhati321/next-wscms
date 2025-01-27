"use client"
import { setBookState } from '@/redux/slices/bookSessionSlice';
import { Accordion, AccordionItem } from '@nextui-org/react'
import Link from 'next/link';
import React from 'react'
import { FaAngleDown } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

const FooterContact = ({ footerMenu }) => {
  const dispatch = useDispatch();

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-medium text-sm text-[#6e6e73]",
    trigger: "py-1 data-[hover=true]:bg-default-100 rounded-lg h-5 flex items-center",
    indicator: "text-sm font-medium",
    content: "py-0 pt-2 text-small",
  };
  return (
    <div className='w-full'>
      <Accordion
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              height: "auto",
              transition: {
                height: {
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 1,
                },
                opacity: {
                  easings: "ease",
                  duration: 1,
                },
              },
            },
            exit: {
              y: -10,
              opacity: 0,
              height: 0,
              transition: {
                height: {
                  easings: "ease",
                  duration: 0.25,
                },
                opacity: {
                  easings: "ease",
                  duration: 0.3,
                },
              },
            },
          },
        }}
        showDivider={false}
        className=" "
        itemClasses={itemClasses}
      >
        {
          footerMenu?.map((singleMenu, index) => (
            <AccordionItem
              indicator={<FaAngleDown />}
              key={index}
              aria-label={singleMenu?.title}
              startContent={singleMenu?.icon}
              title={singleMenu?.title}
              className={` px-0 py-2 text-[14px] border-[#ccc] border-t-1 last:border-b-1 transition-all  text-[#53545C] focus:text-[#FF2D46] focus:bg-[#FF2D461A] font-semibold'}`}
            >
              <ul className="">
                {
                  singleMenu && Object.entries(singleMenu.lists).map(([key, value], index) => (
                    value ?
                      <li key={index} className=" pt-2">
                        <div className="flex items-center gap-2">
                          <Link href={value ? value : '#'} key={index} className="text-[14px] capitalize font-medium text-[#6e6e73] truncate dark:text-white focus:text-red-500">
                            {key}
                          </Link>
                        </div>
                      </li>
                      :
                      <li key={index} className=" pt-2" onClick={() => dispatch(setBookState({ status: 'true' }))}>
                        <div className="flex items-center gap-2">
                          <div key={index} className="text-[14px] capitalize font-medium text-[#6e6e73] truncate dark:text-white focus:text-red-500">
                            {key}
                          </div>
                        </div>
                      </li>
                  ))
                }
              </ul>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  )
}

export default FooterContact