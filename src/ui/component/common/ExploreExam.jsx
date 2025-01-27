import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'

const exploreExam = {
    title: "Explore Different Exams to Enter Your Dream Nation",
    desc: "Find out the perfect test and dodge the linguistic barrier with Gradding.",
    examCard: [
        {
            link: "ielts",
            imageUrl: "ieltsLogo",
            className: "from-[#FF3D5C] to-[#FA8094]",
            examname: "IELTS"
        },
        {
            link: "pte",
            imageUrl: "pteLogo",
            className: "from-[#027FA2] to-[#62ACC0]",
            examname: "PTE"
        },
        {
            link: "test-preparation-toefl",
            imageUrl: "toeflLogo",
            className: "from-[#9196FF] to-[#B3B5E9]",
            examname: "TOEFL"
        },
        {
            link: "test-preparation-duolingo",
            imageUrl: "DuolingoIconLogo",
            className: "from-[#FFC800] to-[#FEDB5B]",
            examname: "DUOLINGO"
        },
        {
            link: "language-courses\/german",
            imageUrl: "GermanIcon",
            className: "from-[#000000] via-[#DE0000] to-[#FECE00] explore-german",
            examname: "GERMAN"
        },
        {
            link: "language-courses\/french",
            imageUrl: "franchIcon",
            className: "from-[#0052B5] via-[#FFFFFF] to-[#D80027] explore-french",
            examname: "FRENCH"
        }
    ]
};

const ExploreExam = () => {

    return (
        <div className='container my-10 sm:my-24'>
            <h2 className='text-center text-[24px] lg:text-[28px] xl:text-[30px] 2xl:text-[34px] capitalize font-normal'>
                {exploreExam?.title}
            </h2>
            <p className="hidden sm:block text-center text-sm md:text-base text-[#797979] mt-2.5 mb-6">
                {exploreExam?.desc}
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-x-3 flex-wrap mt-5 sm:mt-0'>
                {
                    exploreExam?.examCard.map((exam, index) => (
                        <Link href={exam?.link ? `${process.env.NEXT_PUBLIC_APP_URL + exam?.link}` : '#'} className={`group w-full sm:w-[45%] flex items-center justify-between p-2.5 sm:px-3 sm:py-5 border-t-1  border-[#CDD2D5] transition-all hover:bg-gradient-to-r ${exam?.className}`}>
                            <div className='flex items-center gap-3'>
                                <Image src={`/test-preparation/testprep-flags/${exam?.imageUrl}.png`} width={40} height={40} className='' alt='exam-image' />
                                <p className='group-hover:text-white uppercase text-[18px] '>{exam?.examname}</p>
                            </div>
                            <span className='p-2 rounded-full border-black border-1 group-hover:border-white'>
                                <FaArrowRight className='group-hover:text-white font-normal ' />
                            </span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ExploreExam