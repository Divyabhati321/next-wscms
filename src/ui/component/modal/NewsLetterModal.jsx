'use client'
import React from 'react'
import { Avatar, Button, Input, Modal, ModalBody, ModalContent, Select, SelectItem, useDisclosure } from '@nextui-org/react'
import Link from 'next/link';

const NewsLetterModal = ({isOpen, onOpen, onOpenChange}) => {

    const handleModalClose = () => {
        onOpenChange(false);
    }

    return (
        <>
        <Modal
          backdrop="blur"
          size="2xl"
          classNames={{
            body: "relative",
            wrapper: "",
            backdrop: "",
            base: "base-modal overflow-hidden",
            closeButton: "right-0 sm:right-2 shadow-sm top-0  p-1 text-xl rounded-full bg-[#f5f7f9] z-50",
    
          }}
          isOpen={isOpen} onOpenChange={onOpenChange} onClose={handleModalClose}>
          <ModalContent className='sm:w-fit rounded-none md:rounded-large shadow-none m-0 sm:m-1 rounded-b-none bg-transparent pt-3.5 pb-0 px-0 md:px-3.5'>
            {(onClose) => (
              <>
                <ModalBody className='flex flex-col justify-center items-center shadow-sm bg-white p-2 md:p-12 rounded-large'>
                    <div className='mt-4 md:mt-0'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140" fill="none">
                        <rect opacity="0.1" width="140" height="140" rx="39.2683" fill="#20AE5C"></rect>
                        <path d="M100 73.5647C97.6034 85.5486 88.5675 96.8326 75.8885 99.3541C69.7048 100.586 63.2901 99.8347 57.5579 97.2084C51.8257 94.5821 47.0682 90.2143 43.9629 84.7269C40.8575 79.2395 39.5625 72.9122 40.2623 66.646C40.9621 60.3797 43.6211 54.494 47.8605 49.8269C56.5561 40.2494 71.2388 37.6129 83.2227 42.4065" stroke="#20AE5C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M59.2544 68.77L71.2383 80.7539L99.9997 49.5957" stroke="#20AE5C" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <h1 className='text-[#24292d] text-xl md:text-4xl font-bold mt-5'>Newsletter Subscribed!</h1>
                    <p className='text-[#747579] text-base md:text-lg text-center mt-2 mb-6 md:mb-8'>Thank you for your request. <br/> Our expert will contact you soon!</p>
                    <Link href="https://wa.me/919773388670?text=Hello Gradding, I am interested in studying abroad! How can I book 1-1 counselling session with experts??" className='w-fit font-medium rounded-md py-3 px-3 md:px-6 mb-8 md:mb-0 text-xl text-white mx-auto bg-[#066ac9] flex items-center gap-1'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.516 2.012C6.206 2.262 2.017 6.652 2.033 11.929C2.03564 13.4823 2.40753 15.0127 3.118 16.394L2.06 21.495C2.0471 21.5588 2.05048 21.6248 2.06983 21.6869C2.08919 21.749 2.1239 21.8053 2.17075 21.8504C2.2176 21.8956 2.27508 21.9282 2.33787 21.9452C2.40067 21.9623 2.46675 21.9633 2.53 21.948L7.564 20.764C8.89729 21.4229 10.361 21.7755 11.848 21.796C17.275 21.879 21.799 17.601 21.968 12.216C22.15 6.441 17.351 1.735 11.516 2.011V2.012ZM17.523 17.379C16.7975 18.1019 15.9364 18.6746 14.9892 19.0641C14.042 19.4536 13.0272 19.6524 12.003 19.649C10.798 19.6527 9.60869 19.3761 8.529 18.841L7.828 18.494L4.741 19.22L5.391 16.089L5.045 15.417C4.4841 14.3297 4.19324 13.1234 4.197 11.9C4.197 9.83 5.009 7.883 6.483 6.42C7.9522 4.9657 9.93576 4.14964 12.003 4.149C14.089 4.149 16.049 4.955 17.523 6.419C18.2492 7.13464 18.8255 7.98785 19.2182 8.92877C19.6109 9.86969 19.8121 10.8794 19.81 11.899C19.81 13.951 18.985 15.929 17.523 17.38V17.379Z" fill="white"/>
                            <path d="M16.842 14.045L14.911 13.495C14.7864 13.4592 14.6545 13.4576 14.529 13.4903C14.4036 13.5231 14.2893 13.5889 14.198 13.681L13.726 14.159C13.6284 14.2579 13.5037 14.3259 13.3676 14.3543C13.2316 14.3828 13.0901 14.3705 12.961 14.319C12.048 13.952 10.126 12.256 9.63502 11.407C9.56619 11.2871 9.53475 11.1493 9.54472 11.0114C9.5547 10.8735 9.60564 10.7418 9.69102 10.633L10.103 10.103C10.1823 10.0015 10.2325 9.88023 10.2482 9.75234C10.2639 9.62445 10.2445 9.4947 10.192 9.377L9.38002 7.553C9.33409 7.45105 9.26514 7.36114 9.1786 7.29034C9.09205 7.21954 8.99026 7.16979 8.88124 7.14498C8.77221 7.12017 8.65891 7.12098 8.55025 7.14736C8.44159 7.17374 8.34053 7.22496 8.25502 7.297C7.71602 7.75 7.07602 8.437 6.99902 9.2C6.86202 10.543 7.44202 12.236 9.63602 14.27C12.171 16.619 14.202 16.93 15.523 16.611C16.273 16.431 16.873 15.708 17.25 15.117C17.3103 15.0231 17.3477 14.9164 17.3593 14.8054C17.3708 14.6945 17.3562 14.5823 17.3165 14.4781C17.2768 14.3738 17.2132 14.2803 17.1308 14.2051C17.0484 14.1299 16.9495 14.075 16.842 14.045Z" fill="white"/>
                        </svg>

                        Connect With Expert
                    </Link>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
        </>
      )
}

export default NewsLetterModal