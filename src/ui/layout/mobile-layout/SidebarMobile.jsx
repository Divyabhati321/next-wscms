
import Link from 'next/link'
import "@/styles/mobile/sidebar.scss";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/redux/slices/sidebarSlice';
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { AccomodationIcon, AdmissionIcon, BlogIcon, CalenderIcon, DocsIcon, EligibilityIcon, ExampatternIcon, FeesIcon, FinanceIcon, FullmockIcon, LanguageIcon, ListeningIcon, ReadingIcon, RegisterIcon, ResultIcon, SpeakingIcon, SyllabusIcon, VisaIcon, WritingIcon, CoachingIcon, BookieltsIcon, BandScoreIcon, BandCalculatorIcon, NewsICon } from '@/ui/component/CustomIcons';
import { FaAngleDown } from "react-icons/fa";
import { HiAcademicCap } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import AuthButton from '@/ui/component/buttons/AuthButton';
import { setBookState } from '@/redux/slices/bookSessionSlice';

const SidebarMobile = ({ header, examname }) => {
  // ('headerData',header?.pricing);
  const AboutItems = [<CoachingIcon />, <EligibilityIcon />, <ExampatternIcon />, <SyllabusIcon />, <FeesIcon />, <CalenderIcon />, <RegisterIcon />, <ResultIcon />, <BandScoreIcon />]
  const MockItems = [<FullmockIcon />, <ListeningIcon />, <ReadingIcon />, <WritingIcon />, <SpeakingIcon />]
  const Resources = [<HiAcademicCap />, <NewsICon />, <BlogIcon />, <BandCalculatorIcon/>]
  const Services = [<AdmissionIcon />, <LanguageIcon />, <VisaIcon />, <FinanceIcon />, <AccomodationIcon />, <DocsIcon />, <BookieltsIcon />]


  const [selectedKeys, setSelectedKeys] = useState(new Set(["0"]));
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-medium text-sm menu-title text-[#0d2862]",
    trigger: "px-2 py-1 data-[hover=true]:bg-default-100 rounded-lg h-5 flex items-center",
    indicator: "text-sm",
    content: "py-0 pt-2 text-small",
  };
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [])
  return (
    <>
      {/* Mobile */}
      <div className='xl:hidden'>

        {showSidebar && (
          <div className='fixed w-full h-full overflow-hidden bg-[rgba(245,245,247,.5)] backdrop-blur-[21px] z-50' onClick={() => dispatch(toggleSidebar())}></div>
        )
        }
      </div>
      {/* Mobile end */}
      <section className={` min-h-[90%] overflow-y-auto  side-bar-sec bg-white shadow-custom rounded-[16px] max-w-[85%] min-w-[85%]  z-50 fixed top-2 left-2 bottom-5 p-5 2xl:p-7 transition-transform duration-300 transform ${showSidebar ? 'translate-x-0' : '-translate-x-[110%]'} `}>
        {
          showSidebar ?
            <div className="content flex flex-col gap-2 ">
              {/* <Link href={"/"} className=' mx-auto mb-5'>
                <Image src="/logo.png" width={109} height={39} className='m-auto' alt='graadding' priority/>
            </Link> */}

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
                className=" flex p-0 flex-col gap-2 upper-content h-full w-full"
                itemClasses={itemClasses}
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
              >
                {
                  header?.mobileHeader?.map((menuitem, index) => (                                          
                      <AccordionItem
                          indicator={<FaAngleDown />}
                          key={index}
                          aria-label={menuitem.title}
                          startContent={menuitem.icon}
                          title={menuitem.title}
                          className={`upper-btns py-0 p-2 text-[14px] transition-all rounded-[12px] text-[#53545C] ${examname === 'pte'? 'focus:text-pte focus:bg-pte-light': examname === 'ielts'? 'focus:text-ielts focus:bg-ielts-light':'focus:text-[#006ac9] focus:bg-[#006ac91A]'} font-semibold`}
                        >
                          <ul className=" bg-white py-2 rounded-[12px] mt-2">
                            {
                              menuitem.lists?.map((list, index) => (
                                <li key={index} className="pt-3 px-3">
                                  <div className="flex items-center gap-2" onClick={() => dispatch(toggleSidebar())}>
                                    <div className="text-lg">
                                      {menuitem.iconArray == 'AboutItems' ? AboutItems[index] : ''}
                                      {menuitem.iconArray == 'Services' ? Services[index] : ''}
                                      {menuitem.iconArray == 'MockItems' ? MockItems[index] : ''}
                                      {menuitem.iconArray == 'Resources' ? Resources[index] : ''}
                                    </div>
                                    {list.path ?
                                      list.title == 'Book My IELTS' ?
                                        <AuthButton url={list.path} key={index} className={`text-[14px] capitalize font-medium text-gray-900 truncate dark:text-white ${examname === 'pte'? 'focus:text-pte': examname === 'ielts'? 'focus:text-ielts': 'focus:text-[#006ac9]'}`}>
                                          {list.title}
                                        </AuthButton>
                                        :
                                        <Link href={list.path} key={index} className={`text-[14px] capitalize font-medium text-gray-900 truncate dark:text-white ${examname === 'pte'? 'focus:text-pte': examname === 'ielts'? 'focus:text-ielts': 'focus:text-[#006ac9]'}`}>
                                          {list.title}
                                        </Link>
                                      :
                                      <div key={index} onClick={() => dispatch(setBookState({ status: 'true' }))} className="text-[14px] capitalize font-medium text-gray-900 truncate dark:text-white focus:text-red-500">
                                        {list.title}
                                      </div>
                                    }
                                  </div>
                                </li>
                              ))
                            }
                          </ul>
                      </AccordionItem>
                  ))
                }
              </Accordion>              
              <AuthButton
                url={header && header?.preIeltsExam ? header?.preIeltsExam : '#'}
                className={`upper-btns block my-auto pl-4 py-1.5 text-sm transition-all  rounded-[12px] text-[#0d2862] ${examname === 'pte'? 'focus:text-pte focus:bg-ptelight' : examname === 'ielts'? 'focus:text-ielts focus:bg-ieltslight':'focus:text-[#006ac9] focus:bg-[#006ac91a]'} font-medium`}
                onClick={() => dispatch(toggleSidebar())}>
                Pre-{examname == 'pte' ? 'PTE' : 'IELTS'} Test
              </AuthButton>
              <AuthButton
                url={header && header?.pricing ? header?.pricing : '#'}
                className={`upper-btns block my-auto pl-4 py-1.5 text-sm transition-all  rounded-[12px] text-[#0d2862] ${examname === 'pte'? 'focus:text-pte focus:bg-ptelight' : examname === 'ielts'? 'focus:text-ielts focus:bg-ieltslight':'focus:text-[#006ac9] focus:bg-[#006ac91a]'} font-medium`}
                onClick={() => dispatch(toggleSidebar())}>
                Pricing
              </AuthButton>

              <div className="lower-content h-full">
                <Button className="justify-center text-[#fff] bg-[#006ac9] inline-flex rounded-md border-[1.5008px] border-[#006ac9] my-1 py-2 text-center capitalize font-semibold text-[14px] w-full h-fit" onClick={() => dispatch(setBookState({ status: 'true' }))}>Book a Session
                </Button>
              </div>
            </div>
            : ''
        }
      </section>



    </>
  )
}

export default SidebarMobile