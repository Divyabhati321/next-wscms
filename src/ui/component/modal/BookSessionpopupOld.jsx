"use client"
import React, { useEffect, useState } from 'react'
import { Modal, ModalContent, ModalBody, Select, SelectItem, Avatar, Button, useDisclosure } from "@nextui-org/react";
import Link from "next/link"
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaInstagram, FaGlobe } from "react-icons/fa";
import { FaXTwitter, FaUser, FaFacebookF } from "react-icons/fa6";
import { Input } from '@nextui-org/react';
import { DatePicker } from '@nextui-org/date-picker';
import { BookFreeSession } from '@/lib/website';
import { usePathname } from 'next/navigation'
import successlottie from '../../../../public/lottie/success.json';
import { Player } from '@lottiefiles/react-lottie-player';
import { getCountryArray, getWebsiteSetting } from '@/lib/website';
import { useDispatch, useSelector } from 'react-redux';
import { setBookState } from '@/redux/slices/bookSessionSlice';
import { getCookie } from '@/lib/cookies';
import {today, getLocalTimeZone} from "@internationalized/date";

const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

const BookSessionpopupOld = () => {

    const [countryArray, setCountryArray] = useState('');
    const [error, setError] = useState('');
    const pathname = usePathname();
    const [date, setDate] = useState(null);
    const [website, setWebsite] = useState('');
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const openPopup = useSelector((state) => state.bookSessionState.onOpen);

    useEffect(() => {
        const websiteSetting = async () => {
            try {
                const responseData = await getWebsiteSetting();                
                setWebsite(responseData?.result); 
            } catch (error) {
                console.error('Website Setting Api Failed:', error);
            }
        };
        websiteSetting();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getCountryArray();                
                setCountryArray(responseData);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };
        fetchData();
    }, []);

    const dispatch = useDispatch();

    useEffect(() => {
        if (openPopup == 'true') {
          onOpen();
        }
      }, [openPopup, onOpen]);

    const handleModalClose = () => {
        setActiveModal('modal1');
        dispatch(setBookState({status: 'false' }))
    }    

    const handlePhoneInput = (e) => {
        let number = e.target.value;
        number = number.replace(/\./g, '');
        if (number.length > 15) {
            number = number.slice(0, 15);
        }
        e.target.value = number;
    }  
    
    const handleDateChange = (newDateString) => {
        const newDate = new Date(newDateString);
        const formattedDate = formatDate(newDate);
        setDate(formattedDate);

        const name = 'date';
    
        setError((prevErrors) => {
          const updatedErrors = { ...prevErrors };
          delete updatedErrors[name];
          return updatedErrors;
        });
    };

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };


    const validateForm = (formData) => {
        const errors = {};
        const requiredKeys = [
            "date",
            "name",
            "email",
            "phone",
        ];
    
        for (const key of requiredKeys) {
          const value = formData.get(key);
          if (
            value === null ||
            value === "" ||
            value == "0000-00-00" ||
            value === "null" ||
            value === "0"
          ) {
            errors[key] = `${
              key.charAt(0).toUpperCase() + key.slice(1)
            } is required`;
          }
        }
    
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append("date", date);
        const formErros = validateForm(formData);
        setError(formErros);
        if (Object.keys(formErros).length === 0) {
            formData.append("url", pathname);
            formData.append("source", 'Book-Free-Session');
            const webJourneyCookieName = "web_journey";
            const journey = getCookie(webJourneyCookieName);
            if(journey){
              formData.append("webJourney",journey);
              deleteCookie('web_journey');
            }
            const success = await BookFreeSession(formData);
            if (success) {
                if (success.status === 1) {
                    document.querySelector('form').reset();
                    setActiveModal('modal2')
                }
            }
        }        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setError((prevErrors) => {
          const updatedErrors = { ...prevErrors };
          delete updatedErrors[name];
          return updatedErrors;
        });
      };

    const [activeModal, setActiveModal] = useState('modal1'); 

    return (
        <div >
            <Modal
                backdrop="blur"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                onClose={handleModalClose}
                radius="lg"
                isDismissable={false}
                size="3xl"
                placement="auto"
                classNames={{
                    body: "py-4 ",
                    wrapper:"wrapper-modal h-full overflow-scroll",
                    backdrop: "backdrop-modal bg-[#242529]/80 backdrop-opacity-40 h-full sm:h-auto w-full",
                    base: "base-modal mx-auto relative border-[#292f46] bg-[#f5f7f9] dark:bg-[#006ac9] text-[#000] rounded-lg p-0 sm:p-5 overflow-visible w-full	",
                    header: "border-b-[1px] border-[#292f46] h-full sm:h-auto",
                    footer: "border-t-[1px] border-[#292f46] h-full sm:h-auto",
                    closeButton: "right-0 sm:-right-2 shadow-sm -top-3 p-1.5 rounded-full bg-[#f5f7f9] z-50",
                }}>
                <ModalContent className='sm:w-fit sm:rounded-large m-0 sm:m-1  rounded-b-none'>
                    {(onClose) => (
                        <>
                            {activeModal === 'modal1' && (
                                <ModalBody>
                                    <form id='bookSessionForm' className='h-full' onSubmit={handleSubmit}>
                                        <div className="flex flex-col-reverse sm:flex-row items-stretch gap-2 sm:gap-8 h-full">
                                            
                                            <div className="hidden sm:block w-full sm:w-1/2">
                                                <h2 className='hidden sm:block font-semibold text-[40px] leading-[130%]'>Confused Which Plan is for you? Book Session</h2>
                                                <p className='hidden sm:block text-[15px] text-[#6E6E73] mt-4 mb-8'>Get guidance on country, intake, deadline, tests, eligibility criterea, finance and many more..</p>
                                                <div className="flex flex-col items-start gap-1 sm:gap-5">
                                                    <Link href={`mailto:${website?.email}`} className='group p-3 sm:py-5 hover:p-1 sm:hover:p-5 rounded-lg text-[16px] sm:text-[21px] hover:bg-[#006AC9] hover:text-white font-semibold w-full transition-all'>
                                                        <IoIosMail className='inline-block mr-2 text-[#006ac9] group-hover:text-white text-[25px]' />
                                                        {website?.email}
                                                    </Link>
                                                    <Link href={`tel:${website?.phone}`} className='group p-3 sm:py-5 hover:p-1 sm:hover:p-5 rounded-lg text-[16px] sm:text-[21px] hover:bg-[#006AC9] hover:text-white font-semibold w-full transition-all'>
                                                        <IoCall className='inline-block mr-2 text-[#006ac9] group-hover:text-white text-[25px]' />
                                                        {website?.phone}
                                                    </Link>
                                                    <div className="flex items-center gap-3 justify-between">
                                                        <Link href={website && website?.facebook ? website?.facebook : '#' } className='group text-2xl hover:rounded-full p-2 hover:bg-[#006ac9]'><FaFacebookF className='text-[#006ac9] group-hover:text-white' /></Link>
                                                        <Link href={website && website?.instagram ? website?.instagram : '#'} className='group text-2xl hover:rounded-full p-2 hover:bg-[#006ac9]'><FaInstagram className='text-[#006ac9] group-hover:text-white' /></Link>
                                                        <Link href={website && website?.twitter ? website?.twitter : '#'} className='group text-2xl hover:rounded-full p-2 hover:bg-[#006ac9]'><FaXTwitter className='text-[#006ac9] group-hover:text-white' /></Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full sm:w-1/2 bg-white p-4 rounded-lg flex flex-col gap-2 sm:gap-3 shadow-lg">
                                                <div className="sm:hidden">
                                                    <h2 className='font-semibold text-[19px]'>Book Your Free 1-1 Counseling Session with Our Experts</h2>
                                                    <p className='text-[12px] text-[#6E6E73] my-1'>Get guidance on country, intake, deadline, tests, eligibility criteria, finance and many more..</p>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    <p className='text-[#6E6E73] text-[13px] sm:text-[15px] font-medium capitalize'>Select Date *</p>
                                                    <DatePicker onChange={handleDateChange} minValue={today(getLocalTimeZone())}  className="w-full" slotprops={{ name: 'date' }} size="md" radius='sm' />
                                                </div>
                                                <span className='text-rose-500 text-[11px] sm:text-[13px] block'>{error?.date}</span>
                                                {/* Intake div */}
                                                {/* <div className='flex flex-col gap-2'>
                                                    <p className='text-[#6E6E73] text-[13px] sm:text-[15px] font-medium capitalize'>choose intake</p>
                                                    <ul className="flex w-full gap-2 items-center justify-around">

                                                        <li className='w-1/3 relative'>
                                                            <p className='p-[2px] capitalize inline-block absolute -top-2.5 left-1 sm:left-4 bg-[#d7fff3] text-[#0cbc87] text-[10px] sm:text-[12px] font-medium rounded-sm border-[1px] border-[0cbc87]'>recommended</p>
                                                            <input
                                                                type="radio"
                                                                id="hosting-one"
                                                                name="intake"
                                                                value='2024'
                                                                className="hidden peer"
                                                                required=""
                                                                defaultChecked
                                                            />
                                                            <label
                                                                aria-labelledby="first-li"
                                                                htmlFor="hosting-one"
                                                                className="inline-flex items-center justify-center w-full p-2 sm:py-3 sm:px-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  peer-checked:border-[#006ac9] peer-checked:text-white peer-checked:bg-[#7db0e1] transition-all hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                                            >
                                                                <div className="w-full text-[13px] sm:text-[15px] font-semibold text-center">2024</div>

                                                            </label>
                                                        </li>
                                                        <li className='w-1/3'>
                                                            <input
                                                                type="radio"
                                                                id="hosting-two"
                                                                name="intake"
                                                                value='2025'
                                                                className="hidden peer"
                                                            />
                                                            <label
                                                                aria-labelledby="second-li"
                                                                htmlFor="hosting-two"
                                                                className="inline-flex items-center justify-center w-full p-2 sm:py-3 sm:px-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  peer-checked:border-[#006ac9] peer-checked:text-white peer-checked:bg-[#7db0e1] transition-all hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                                            >
                                                                <div className="w-full tex text-[13px] sm:text-[15px] font-semibold text-center">2025</div>

                                                            </label>
                                                        </li>
                                                        <li className='w-1/3'>
                                                            <input
                                                                type="radio"
                                                                id="hosting-three"
                                                                name="intake"
                                                                value='2026'
                                                                className="hidden peer"
                                                                required=""
                                                            />
                                                            <label
                                                                aria-labelledby="third-li"
                                                                htmlFor="hosting-three"
                                                                className="inline-flex items-center justify-center w-full p-2 sm:py-3 sm:px-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700  peer-checked:border-[#006ac9] peer-checked:text-white peer-checked:bg-[#7db0e1] transition-all hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                                                            >
                                                                <div className="w-full text-[13px] sm:text-[15px] font-semibold text-center">2026</div>

                                                            </label>
                                                        </li>
                                                    </ul>
                                                </div> */}
                                                <div className="flex flex-col gap-2">
                                                    <p className='text-[#6E6E73] text-[13px] sm:text-[15px] font-medium capitalize'>Name *</p>
                                                    <Input
                                                        radius='sm'
                                                        onChange={handleChange}
                                                        type="name"
                                                        name='name'
                                                        labelPlacement="outside"
                                                        placeholder="Full Name"
                                                        classNames={{ label: 'font-medium', input: 'text-gray-300 font-medium p-3' }}
                                                        startContent={
                                                            <FaUser className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                                                        }
                                                    />
                                                </div>
                                                <span className='text-rose-500 text-[11px] sm:text-[13px] block'>{error?.name}</span>
                                                <div className="flex flex-col gap-1 sm:gap-2">
                                                    <p className='text-[#6E6E73] text-[13px] sm:text-[15px] font-medium capitalize'>Email Address *</p>
                                                    <Input
                                                        onChange={handleChange}
                                                        radius='sm'
                                                        type="email"
                                                        name='email'
                                                        labelPlacement="outside"
                                                        placeholder="Enter Your Email"
                                                        classNames={{ label: 'font-medium', input: 'text-gray-300 font-medium p-3' }}
                                                        startContent={
                                                            <IoIosMail className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
                                                        }
                                                    />
                                                </div>
                                                <span className='text-rose-500 text-[11px] sm:text-[13px] block'>{error?.email}</span>
                                                <div className="flex flex-col gap-1 sm:gap-2">
                                                    <p className='text-[#6E6E73] text-[13px] sm:text-[15px] font-medium capitalize'>Phone Number *</p>
                                                    <div className='flex items-center gap-2'>
                                                        <Select
                                                            onChange={handleChange}
                                                            className="w-[40%]"
                                                            name='country'
                                                            radius='sm'
                                                            placeholder="Country"
                                                            classNames={{
                                                                base:"text-[14px]",
                                                                placeholder:"text-[14px]",
                                                                trigger: "h-10",
                                                            }}
                                                            defaultSelectedKeys={['India@#$?91']}
                                                        >
                                                           {countryArray && Object.entries(countryArray.country).map(([key, country], index) => (
                                                                <SelectItem key={`${country.name}@#$?${country.code}`} aria-labelledby="Select Country" data-sort_code={country.sort_code} data-country={country.name} alt={country.name} value={`${country.name}@#$?${country.code}`} textValue={`${country.sort_code} +${country.code}`} startContent={<Avatar alt="Argentina" className="w-6 h-6" src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${country.image}`} />}>
                                                                    {country.name}
                                                                </SelectItem>
                                                            ))}
                                                        </Select>
                                                        <Input
                                                            onChange={handleChange}
                                                            className='w-2/3'
                                                            type="number"
                                                            name='phone'
                                                            radius='sm'
                                                            onKeyUp={handlePhoneInput}
                                                            labelPlacement="outside"
                                                            placeholder="Phone Number"
                                                            classNames={{ label: 'font-medium', input: 'text-gray-300 font-medium p-3' }}
                                                            startContent={
                                                                <IoCall className="text-lg text-default-400 pointer-events-none flex-shrink-0" />
                                                            }
                                                        />
                                                    </div>
                                                    <span className='text-rose-500 text-[13px] block'>{error?.phone}</span>
                                                </div>
                                                <Button type='submit' className='mt-2 sm:mt-5 text-white bg-[#006ac9] px-4 py-2 text-center font-semibold block rounded-md hover:bg-[#1a5cb0]'>Book a FREE Session</Button>

                                            </div>
                                        </div>
                                    </form>
                                </ModalBody>
                            )}
                            {activeModal === 'modal2' && (
                                <ModalBody>
                                    <div className="bg-white flex flex-col gap-4 py-6">
                                        <Player
                                            src={successlottie}
                                            id="successlottie"
                                            alt="success lottie"
                                            autoplay
                                            loop
                                            className='w-[97px] h-[97px] xl:w-[120px] xl:h-[120px] m-auto'
                                        ></Player>

                                        <p className='text-2xl font-semibold text-center capitalize'>Meeting Booked Successfully</p>

                                    </div>
                                </ModalBody>
                            )}
                        </>
                    )}
                </ModalContent>

            </Modal>
        </div>
    )
}

export default BookSessionpopupOld