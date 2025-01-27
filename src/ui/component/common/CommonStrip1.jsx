import React from 'react'
import CallusNow from './CallusNow'
import { Strip16 } from '../Strip'

const CommonStrip1 = ({ StripData, Contact, device }) => {
  return (
    <div className="container flex flex-col lg:flex-row justify-between items-stretch gap-10 my-8 sm:my-12">
      <div className="w-full lg:w-3/4">
        <Strip16 device={device} StripData={StripData} />
      </div>
      {
        device === 'desktop' ?
          <div className="hidden sm:block w-full lg:w-[25%] bg-white shadow-custom p-3 px-4 pb-5 rounded-[15px]">
            <CallusNow callUsNow={Contact} />
          </div> : ''
      }

    </div>
  )
}

export default CommonStrip1