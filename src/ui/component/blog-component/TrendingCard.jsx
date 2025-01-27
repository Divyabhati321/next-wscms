import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TrendingCard = ({card,index}) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
  
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Jul"
    const year = date.getFullYear();
  
    return `${day} ${month}, ${year}`;
  }
  return (
    <Link href={`${process.env.NEXT_PUBLIC_APP_URL}${card?.category?.url}/${card?.url}`} className='w-full sm:w-[45%] lg:w-[48%] bg-white shadow-sm rounded-xl flex flex-col lg:flex-row hover:shadow-[0px_0px_40px_0px_#00000026] duration-250' key={index}>
        <div className='rounded-t-xl bg-gray-500 lg:rounded-none lg:rounded-l-xl w-full lg:w-[60%] h-auto'>
            <Image src={card?.image} className='rounded-t-xl h-full lg:rounded-none lg:rounded-l-xl w-full' width={378} height={213} />
        </div>
        <div className='p-6 overflow-hidden w-full lg:w-[40%]'>
            <p className='text-xs uppercase text-[#6e6e73] font-bold'>{card.category.name}</p>
            <h2 className='text-lg mt-4 mb-5 text-[#1d1d1f] font-bold line-clamp-2 '>{card.header_title}</h2>
            <p className='text-xs uppercase text-[#6e6e73] font-bold'>{card.display_date ? formatDate(card.display_date) : ''}</p>
        </div>
    </Link>
  )
}

export default TrendingCard