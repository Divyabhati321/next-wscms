import React from 'react'
import dynamic from 'next/dynamic';

const NoBlogFound = () => {

  const Player = dynamic(
    () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
    { ssr: false }
  );
  
  return (
    <>
        <Player
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}lottie/No-result-found.json`}
        autoplay={true}
        loop
        keepLastFrame={true}
        className='w-[288px] h-[176px] mx-auto !my-6'  
        ></Player>
        <p className='text-4xl text-[#24292d] font-semibold text-center'>No Blog Found!</p>
        <p className='text-lg text-[#b0b0b0] font-medium text-center my-4'>According to your preferences, we could not find any blog.</p>
    </>
  )
}

export default NoBlogFound