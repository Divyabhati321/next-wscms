import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RecentBlogCard = ({card,index}) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' }); // e.g., "Jul"
    const year = date.getFullYear();
  
    return `${day} ${month}, ${year}`;
  }

  return (
    <Link href={`${process.env.NEXT_PUBLIC_APP_URL}${card?.category?.url}/${card?.url}`} className='w-full sm:w-[45%] lg:w-[30%] bg-white shadow-sm rounded-xl hover:shadow-[0px_0px_40px_0px_#00000026] duration-250' key={index}>
        <div className='rounded-t-xl w-full h-auto'>
            <Image src={card?.image} className='rounded-t-xl' width={403} height={227} />
        </div>
        <div className='p-6'>
            <p className='text-xs uppercase text-[#6e6e73] font-bold'>{card?.category?.name}</p>
            <h2 className='text-lg my-1.5 text-[#1d1d1f] font-bold line-clamp-2 '>{card.header_title}</h2>
            <p className='text-xs uppercase text-[#6e6e73] font-bold'>{card.display_date ? formatDate(card.display_date) : ''}</p>
        </div>
    </Link>
  )
}

export default RecentBlogCard