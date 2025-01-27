
import Link from 'next/link'
import "@/styles/mobile/sidebar.scss";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/redux/slices/sidebarSlice';
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { AccomodationIcon, AdmissionIcon, BlogIcon, CalenderIcon, DocsIcon, EligibilityIcon, ExampatternIcon, FeesIcon, FinanceIcon, LanguageIcon, RegisterIcon, ResultIcon, SyllabusIcon, VisaIcon, CoachingIcon, BandScoreIcon, BandCalculatorIcon, NewsICon, PteIcon, TofelIcon, DuolingoIcon, SATIcon, GmatIcon, GermanIcon, SpanIcon, FranchIcon, UkFlag, CaFlag, IrFlag, UsFlag, AuFlag, HuFlag, MtFlag, ItFlag, InFlag, DeFlag, NzFlag, MediaICon, OfferIcon } from '@/ui/component/CustomIcons';
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useState } from 'react';
import AuthButton from '@/ui/component/buttons/AuthButton';
import { setBookState } from '@/redux/slices/bookSessionSlice';

const SidebarMobileTestPrep = ({ header, examname }) => {

  const CountryFlag = [<UkFlag />, <CaFlag />, <IrFlag />, <UsFlag />, <AuFlag />, <HuFlag />, <MtFlag />, <ItFlag />, <InFlag />, <DeFlag />, <NzFlag />]
  const Ieltsitem = [<CoachingIcon />, <EligibilityIcon />, <ExampatternIcon />, <SyllabusIcon />, <FeesIcon />, <CalenderIcon />, <RegisterIcon />, <ResultIcon />, <BandScoreIcon />]
  const TestPrepItems = [<PteIcon />,<DuolingoIcon />, <GmatIcon />, <SATIcon />, <TofelIcon />, <GermanIcon/>,<SpanIcon/>,<FranchIcon/>]
  
  // const MockItems = [<FullmockIcon />, <ListeningIcon />, <ReadingIcon />, <WritingIcon />, <SpeakingIcon />]
  const MoreItem = [<MediaICon />, <NewsICon />, <BlogIcon />, <BandCalculatorIcon/>, <OfferIcon/>]
  const Services = [<AdmissionIcon />, <LanguageIcon />, <VisaIcon />, <FinanceIcon />, <AccomodationIcon />, <DocsIcon />,]


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
  const staticObject = {
    mobileHeader: [
      {
        title: 'Countries',
        iconArray: 'CountryFlag',
        lists: [
          { title: 'UK', path: '/study-in-uk' },
          { title: 'Canada', path: '/study-in-canada' },
          { title: 'Ireland', path: '/study-in-ireland' },
          { title: 'USA', path: '/study-in-usa' },
          { title: 'Australia', path: '/study-in-australia' },
          { title: 'Hungary', path: '/study-in-hungary' },
          { title: 'Malta', path: '/study-in-malta' },
          { title: 'Italy', path: '/study-in-italy' },
          { title: 'India', path: '/study-in-india' },
          { title: 'Germany', path: '/study-in-germany' },
          { title: 'New Zealand', path: '/study-in-newzealand' },
        ],
      },
      {
        title: 'Services',
        iconArray: 'Services',
        lists: [
          { title: 'Admission Consultancy', path: '/study-abroad-consultants' },
          { title: 'Visa Assistance', path: '' },
          { title: 'Finance', path: '' },
          { title: 'Accomodation', path: '' },
          { title: 'Document Preparation', path: '' },
          // { title: 'Book My PTE', path: '/french' },
        ],
      },
      {
        title: 'IELTS',
        iconArray: 'Ieltsitem',
        lists: [
          { title: 'IELTS Coaching', path: '/test-preparation/ielts/coaching' },
          { title: 'Eligibility', path: '/test-preparation/ielts/eligibility' },
          { title: 'Exam pattern', path: '/test-preparation/ielts/exam-pattern' },
          { title: 'Syllabus', path: '/test-preparation/ielts/syllabus' },
          { title: 'Test Dates', path: '/test-preparation/ielts/dates' },
          { title: 'Registration', path: '/test-preparation/ielts/registration' },
          { title: 'Result', path: '/test-preparation/ielts/result' },
          { title: 'Fees', path: '/test-preparation/ielts/fees' },
          { title: 'Band Score', path: '/test-preparation/ielts/band-score' },
        ],
      },
      {
        title: 'Test Preparation',
        iconArray: 'TestPrepItems',
        lists: [
          { title: 'PTE', path: '/test-preparation/pte' },
          { title: 'Duolingo', path: '' },
          { title: 'GMAT', path: '' },
          { title: 'SAT', path: '' },
          { title: 'Toefl', path: '' },
          { title: 'German', path: '/language-courses/german-language' },
          { title: 'Spanish', path: '/language-courses/spanish-language' },
          { title: 'French', path: '/language-courses/french-language' },
        ],
      },
      {
        title: 'More',
        iconArray: 'MoreItem',
        lists: [
          { title: 'Media', path: '/media-coverage' },
          { title: 'News', path: '/blog/news' },
          { title: 'Blogs', path: '/blog' },
          { title: 'Offers', path: '/offers' },
          // { title: 'Band Score Calculator', path: '/band-score-calculator' },
        ],
      },
    ],
  };
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
                {staticObject.mobileHeader.map((menuitem, index) => (
        <AccordionItem
          indicator={<FaAngleDown />}
          key={index}
          aria-label={menuitem.title}
          startContent={menuitem.icon}
          title={menuitem.title}
          className={`upper-btns py-0 p-2 text-[14px] transition-all rounded-[12px] text-[#53545C] ${examname === 'pte' ? 'focus:text-pte focus:bg-pte-light' : examname === 'ielts' ? 'focus:text-ielts focus:bg-ielts-light' : 'focus:text-[#006ac9] focus:bg-[#006ac91A]'} font-semibold`}
        >
          <ul className="bg-white py-2 rounded-[12px] mt-2">
            {menuitem.lists?.map((list, listIndex) => (
              <li key={listIndex} className="pt-2 px-3">
                <div className="flex items-center gap-2" onClick={() => dispatch(toggleSidebar())}>
                  <div className="text-lg">
                    {menuitem.iconArray === 'CountryFlag' && CountryFlag[listIndex]}
                    {menuitem.iconArray === 'Services' && Services[listIndex]}
                    {menuitem.iconArray === 'Ieltsitem' && Ieltsitem[listIndex]}
                    {menuitem.iconArray === 'TestPrepItems' && TestPrepItems[listIndex]}
                    {menuitem.iconArray === 'LanguageItems' && LanguageItems[listIndex]}
                    {/* {menuitem.iconArray === 'MockItems' && MockItems[listIndex]} */}
                    {menuitem.iconArray === 'MoreItem' && MoreItem[listIndex]}
                  </div>
                  {list.path ? (
                    list.title === 'Book My IELTS' ? (
                      <AuthButton
                        url={list.path}
                        key={listIndex}
                        className={`text-[14px] capitalize font-medium text-gray-900 truncate dark:text-white ${examname === 'pte' ? 'focus:text-pte' : examname === 'ielts' ? 'focus:text-ielts' : 'focus:text-[#006ac9]'}`}
                      >
                        {list.title}
                      </AuthButton>
                    ) : (
                      <a
                        href={`${process.env.NEXT_PUBLIC_LARAVEL_APP_URL + list.path}`}
                        key={listIndex}
                        className={`text-[14px] capitalize font-medium text-gray-900 truncate dark:text-white ${examname === 'pte' ? 'focus:text-pte' : examname === 'ielts' ? 'focus:text-ielts' : 'focus:text-[#006ac9]'}`}
                      >
                        {list.title}
                      </a>
                    )
                  ) :  (
                    <div
                      key={listIndex}
                      onClick={() => dispatch(setBookState({ status: 'true' }))}
                      className="text-[14px] capitalize font-medium text-gray-900 truncate dark:text-white focus:text-red-500"
                    >
                      {list.title}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </AccordionItem>
      ))}
              </Accordion>              
              {/* <AuthButton
                url={header & header?.preIeltsExam ? header?.preIeltsExam : '#'}
                className={`upper-btns block my-auto pl-4 py-1.5 text-sm transition-all  rounded-[12px] text-[#0d2862] ${examname === 'pte'? 'focus:text-pte focus:bg-ptelight' : examname === 'ielts'? 'focus:text-ielts focus:bg-ieltslight':'focus:text-[#006ac9] focus:bg-[#006ac91a]'} font-medium`}
                onClick={() => dispatch(toggleSidebar())}>
                Pre-{examname == 'pte' ? 'PTE' :examname === 'ielts'? 'IELTS':''} Test
              </AuthButton> */}
              {/* <AuthButton
                url={header & header?.pricing ? header?.pricing : '#'}
                className={`upper-btns block my-auto pl-4 py-1.5 text-sm transition-all  rounded-[12px] text-[#0d2862] ${examname === 'pte'? 'focus:text-pte focus:bg-ptelight' : examname === 'ielts'? 'focus:text-ielts focus:bg-ieltslight':'focus:text-[#006ac9] focus:bg-[#006ac91a]'} font-medium`}
                onClick={() => dispatch(toggleSidebar())}>
                Pricing
              </AuthButton> */}

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

export default SidebarMobileTestPrep