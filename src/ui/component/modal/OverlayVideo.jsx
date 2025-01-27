"use client"
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from '@nextui-org/react'
import Link from 'next/link';
import React from 'react'

const OverlayVideo = ({ iframeUrl, title,examname }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const modifiedIframeUrl = `${iframeUrl}&autoplay=1&rel=0`;

    return (
        <div>
            <div onClick={onOpen} target='_blank' className={`cursor-pointer flex items-center gap-2 xl:gap-3 text-sm xl:text-base 2xl:text-lg text-nowrap text-test-prep py-3 px-2 md:px-4 rounded-lg border-transparent ${examname === 'pte'? 'hover:border-pte':'hover:border-ielts'} border-[1.7px] font-semibold underline`}>
                <svg className='w-[20px] lg:w-[34px]' width="34" height="25" viewBox="0 0 34 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.2934 4.24872C32.9042 2.7718 31.7521 1.61282 30.2877 1.21795C27.6352 0.5 17.0051 0.5 17.0051 0.5C17.0051 0.5 6.36988 0.5 3.72259 1.21795C2.25813 1.61282 1.10602 2.7718 0.716867 4.24872C0 6.92051 0 12.5 0 12.5C0 12.5 -2.92996e-07 18.0795 0.711747 20.7513C1.1009 22.2282 2.25301 23.3872 3.71747 23.7821C6.36988 24.5 17 24.5 17 24.5C17 24.5 27.6352 24.5 30.2825 23.7821C31.747 23.3872 32.8991 22.2282 33.2882 20.7513C34 18.0795 34 12.5 34 12.5C34 12.5 34 6.92051 33.2934 4.24872ZM13.5232 17.5615V7.43846L22.4072 12.5L13.5232 17.5615Z" fill="#FF0000" />
                </svg>
                {title}
            </div>
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                radius="lg"
                isDismissable={false}
                size="xl"
                placement="center"
                classNames={{
                    body: "w-full py-1 h-full px-0",
                    backdrop: "bg-[#242529]/80 backdrop-opacity-40",
                    base: "realtive border-[#292f46] bg-[#f5f7f9] dark:bg-[#006ac9] text-[#000] rounded-lg p-2 overflow-visible	",
                    header: "border-b-[1px] border-[#292f46]",
                    footer: "border-t-[1px] border-[#292f46]",
                    closeButton: "-right-3 shadow-sm -top-4 p-1.5 rounded-full bg-[#f5f7f9] shadow-inner-custom",
                }}>
                <ModalContent>
                    {(onClose) => (
                        <ModalBody
                            className=''
                        >
                            <iframe
                                src={modifiedIframeUrl}
                                width={560}
                                height={415}
                                className='w-auto rounded-lg aspect-video'
                                allow='autoplay'
                                allowFullScreen
                            />
                        </ModalBody>
                    )}
                </ModalContent>
            </Modal>
        </div>
    )
}

export default OverlayVideo