"use client"
import React from 'react'
import gradLoader from '/public/lottie/grad-loader.json';
import dynamic from 'next/dynamic';
const Loading = () => {

    const Player = dynamic(
        () => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
        { ssr: false }
      );
    return (
        <div className='flex space-x-2 justify-center items-center bg-[#F4F7FE] h-[80vh] dark:invert'>
            <Player
                src={gradLoader}
                id="gradLoader"
                autoplay
                loop
                style={{ width: "90px", height: "90px"}}
            ></Player>
        </div>
    )
}

export default Loading