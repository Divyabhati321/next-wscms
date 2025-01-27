import { Player } from '@lottiefiles/react-lottie-player'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

const SuccessPopup = ({ head, subhead, desc, ctaDesc, handleModalClose, link }) => {
  return (
    <div className="w-full m-auto pb-5">
      <Player
        src={`${process.env.NEXT_PUBLIC_BASE_PATH}lottie/congrats.json`}
        id="giftlottie"
        autoplay={true}
        loop
        keepLastFrame={true}
        className='w-[233px] h-[150px] m-auto '

      ></Player>
      <p className='text-[16px] sm:text-[20px] font-medium block text-center'><span className='block text-[20px]'>{head}</span>{subhead}</p>
      <p className='text-[14px] sm:text-[16px] text-[#000000] block text-center my-5'>{desc}</p>
      {link ?
        <Link href={link} className='w-full bg-[#FF2D46] h-10 text-white font-medium p-4 rounded-[7px] hover:shadow-[0px_3.46px_13.83px_0px_#FF2D462E] transition-all'>{ctaDesc}</Link>
        :
        <Button onPress={handleModalClose} className='w-full bg-[#006ac9] h-10 text-white font-medium p-4 rounded-[7px] hover:shadow-[0px_3.46px_13.83px_0px_#006ac9] transition-all'>{ctaDesc}</Button>
      }
    </div>
  )
}

export default SuccessPopup