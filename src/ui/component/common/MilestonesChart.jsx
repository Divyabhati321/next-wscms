import Image from 'next/image'
import React from 'react'
import MilestoneCard from '../test-preparation/cards/MilestoneCard'

const milestonesChart = {
    title: "Know the",
    title2: "Success Trajectory of Gradding",
    desc: "Get hands on the decade-long legacy of our experts serving the study abroad aspirants. They help them to live their lifelong dream and mould their careers.",
    milestoneCard: [
        {
            title: "Marked the beginning",
            list: [
                "Established Gradding.com in June 2012 as a study abroad platform",
                "Started IELTS coaching in Jaipur",
            ]
        },
        {
            title: "Helped Many Students to Study Across 54 Nations",
            list: [
                "Placed over 1200+ students in 100+ universities across the globe.",
                "Started TOEFL & PTE classes. ",
                "Expanded roots to Udaipur."
            ]
        },
        {
            title: "Initiated successful visa requests",
            list: [
                "In times of difficulty, when the world was going through COVID-19, we helped students to live their dreams.",
                "The visa success rate was 98%.",
            ]
        },
        {
            title: "Started the Language Proficiency Classes",
            list: [
                "After the launch of DET, we expanded our roots to provide coaching for the same.",
                "Expanded our niche to technical tests like the ACT and SAT.",
                "Started our services across India."
            ]
        },
        {
            title: "Flourishing Year",
            list: [
                "We became India’s first AI-powered test preparation platform, where artificial intelligence was integrated with our existing services.",
                "Started providing classes for European languages like German, French, and Spanish. ",
            ]
        },
        {
            title: "Tie up with International Universities",
            list: [
                "Gradding has signed MoUs with 1800+ universities.",
                "Started visiting universities for hoisting seminars.",
                "Provided aid of 2 crore rupees in the last 10 years.",
                "Launched Door-to-Door counselling service.",
                "Started language classes across the globe."
            ]
        }
    ]
};
const MilestonesChart = () => {
    const styles = ["absolute left-[1%] bottom-[32%] w-[16%]","absolute left-[19.5%] bottom-[32%] w-[16%]","absolute left-[38%] bottom-[32%] w-[16%]","absolute left-[56.5%] bottom-[32%] w-[16%]","absolute left-[75%] bottom-[32%] w-[16%]","absolute left-[93.5%] bottom-[32%] w-[16%]"];
    return (
        <div className=' my-10 sm:my-24 milestone-section'>
            <h2 className='container text-center text-[24px] lg:text-[28px] xl:text-[34px] capitalize font-normal'>
                {milestonesChart?.title}
                <span className="text-[#006ac9] sm:mx-2 xl:inline-block block font-medium">{milestonesChart?.title2}</span>
            </h2>
            <p className="container hidden sm:block text-center text-sm md:text-base text-[#797979] mt-2 ">{milestonesChart?.desc}</p>
            <div className='relative  overflow-x-auto 2xl:overflow-x-visible 2xl:w-max w-full 2xl:mx-auto '>
                <div className='w-max md:w-full relative mt-[10rem] sm:mt-[10rem] ml-[3rem] sm:ml-[6rem] 2xl:ml-[0] 2xl:mt-[15rem]' style={{ display: "-webkit-box" }}>
                    {
                        milestonesChart?.milestoneCard.map((chart, index) => (
                            <div key={index} className={styles[index]}>
                                <MilestoneCard title={chart.title} desc={chart.desc} list={chart?.list} />
                            </div>
                        ))
                    }
                    <Image src="/common/MilestoneChart.png" width={1187} height={248} alt='Milestone Chart' className='w-unset sm:w-full m-auto' />
                </div>
            </div>
        </div>
    )
}

export default MilestonesChart