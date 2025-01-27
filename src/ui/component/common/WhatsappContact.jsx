import React from 'react'
import Image from "next/image"
import Link from 'next/link'
const WhatsappContact = ({phone, style}) => {
  return (
    <div className={`block w-fit h-fit fixed ${style} bottom-24 md:bottom-20 left-3.5 bg-white shadow-[0_0_40px_0px_rgba(29,58,83,0.15)] p-1.5 rounded-full z-40`}>
        <Link href={`https://wa.me/${phone.replace(/\s+/g, '').replace('+','')}`} className="rounded-full">
            <Image src="/common/whatsappContact.png" width={40} height={40} alt='whatsapp icon'/>
        </Link>
    </div>
  )
}

export default WhatsappContact