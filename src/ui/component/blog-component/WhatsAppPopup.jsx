'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Popover, PopoverTrigger, PopoverContent, Button, Input, Select, SelectItem, Avatar } from "@nextui-org/react";
import { getCountryArray, whatsappInquiry } from '@/lib/website';
import { FaGlobe } from 'react-icons/fa6';

const WhatsAppPopup = ({style}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [textAreaValue, setTextAreaValue] = useState("");
    const [errorMessageOne, setErrorMessageOne] = useState("");
    const [error, setError] = useState("");
    const [numberInput, setNumberInput] = useState("");
    const [countryCode, setCountryCode] = useState("91");
    const [countryInput, setCountryInput] = useState("India@#$?91");
    const [isActive, setIsActive] = useState(1);
    const [countryArray, setCountryArray] = useState("");
    const [buttonDisable, setButtonDisable] = useState(false);
    const inputRef = useRef(null);


    const handleClose = () => {
        setIsActive(1);
        setIsOpen(false);
    }

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const handleButtonClick = () => {
        const checkArray = textAreaValue.split(" ");
        if (checkArray.length <= 3) {
            setErrorMessageOne("Message should be more than 3 words");
        } else {
            setIsActive(2);
        }
    }

    const validateForm = () => {
        const errors = {};
        let requiredKeys = ["phone"]

        if (requiredKeys != "") {
            for (const key of requiredKeys) {
                if (key == "phone") {                                    
                    if ((countryCode == '91' && (numberInput.length < 10)) || (countryCode != '91' && (numberInput.length <= 6))) {                    
                        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is Invalid`;
                    }
                }
            }
        }
        return errors;
    };

    const handleCountryChange = async (e) => {
        if (e.target.value) {
            let code = e.target.value.split("-")[0];
            let name = e.target.value.split("-")[1];
            setCountryCode(code);
            setCountryInput(`${name}@#$?${code}`);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getCountryArray();
                setCountryArray(responseData);
            } catch (error) {
                console.error("Error Fetching Country Data: ", error);
            }
        };
        if (countryArray?.length == 0 || countryArray == "") {
            fetchData();
        }
    }, []);

    const handleSubmit = async () => {
        setButtonDisable(true);
        const formData = new FormData();
        formData.append('country', countryInput);
        formData.append('phone', numberInput);
        formData.append('message', textAreaValue);

        const formErros = validateForm(formData, "mobile-verification");
        setError(formErros);

        if (Object.keys(formErros).length === 0) {
            const success = await whatsappInquiry(formData);
            if(success && success?.status) {
                setButtonDisable(false);
                setIsActive(3);
                setNumberInput('');
                setTextAreaValue('');
                setErrorMessageOne('');
            }
        }else{
            setButtonDisable(false);
        }
    };
    const [isScrolling, setIsScrolling] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
          setIsScrolling(window.scrollY >= 100); // Update when scrolled past the initial view
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll); // Cleanup
      }, []);

    return (
        <div className={`w-fit fixed z-30 left-[22px] ${style} md:bottom-[18px] duration-200 ${isScrolling ? 'bottom-24' : '-bottom-24'}`}>
            <Popover
                placement={'top-start'}
                isOpen={isOpen}
                shouldBlockScroll={true}
                onClose={() => { }}
            >
                <PopoverTrigger
                    onClick={handleOpen}
                >
                    <div className='cursor-pointer rounded-full p-2 bg-white'>
                        <div className='rounded-full bg-[#2cb742] size-10 grid place-items-center'>
                            <svg className='fill-[#ffffff]' xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 448 512">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </PopoverTrigger>
                <PopoverContent>
                    <div className="p-5 w-60 md:w-80 relative">
                        <span onClick={handleClose} className='absolute top-1 right-1 cursor-pointer'>
                            <svg width="15" height="15" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.397499 0.355657C0.927499 -0.118552 1.7868 -0.118552 2.31678 0.355657L9.49999 6.78276L16.6832 0.355657C17.2132 -0.118552 18.0725 -0.118552 18.6025 0.355657C19.1325 0.829857 19.1325 1.5987 18.6025 2.07291L11.4193 8.50001L18.6025 14.9271C19.1325 15.4013 19.1325 16.1701 18.6025 16.6443C18.0725 17.1186 17.2132 17.1186 16.6832 16.6443L9.49999 10.2172L2.31678 16.6443C1.7868 17.1186 0.927499 17.1186 0.397499 16.6443C-0.1325 16.1701 -0.1325 15.4013 0.397499 14.9271L7.58071 8.50001L0.397499 2.07291C-0.1325 1.5987 -0.1325 0.829857 0.397499 0.355657Z" fill="#888888" />
                            </svg>
                        </span>
                        {isActive == 1 ?
                            <div>
                                <p className='text-lg md:text-xl mt-6 mb-2 font-bold text-[#24292d]'>Hi!</p>
                                <p className='text-sm md:text-base text-[#747579] mb-4 font-medium'>We're here to answer your questions! Send us a message, and we'll
                                    reply via WhatsApp.</p>
                                <div className='relative'>
                                    <textarea value={textAreaValue} onChange={(e) => { setTextAreaValue(e.target.value) }} rows="4" className='pr-10 py-2 px-4 border-2 border-[#dde0e3] w-full outline-none resize-none text-sm md:text-base rounded-lg font-medium' placeholder='Enter your Message'></textarea>
                                    <p onClick={handleButtonClick} className='cursor-pointer absolute right-2 top-[50%] translate-y-[-50%] bg-[#066ac9] p-0 size-10 cursor-pointing rounded-full grid place-items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 9.375 8.568">
                                            <path d="M2.971,9.543,5.888,8.96c.26-.052.26-.137,0-.189L2.971,8.187a.521.521,0,0,1-.378-.378L2.01,4.893c-.052-.261.1-.382.343-.27l8.9,4.108c.161.074.161.195,0,.269l-8.9,4.108c-.241.111-.4-.01-.343-.27l.583-2.917A.521.521,0,0,1,2.971,9.543Z" transform="translate(-2 -4.581)" fill="#fff"></path>
                                        </svg>
                                    </p>
                                    <p className='text-red-500 text-[10px]'>{errorMessageOne}</p>
                                </div>
                            </div>
                            : (isActive == 2 ?
                                <div>
                                    <p className='text-md md:text-base mt-6 mb-2 font-medium text-[#747579]'>Please enter your phone number and we’ll contact you shortly via WhatsApp!</p>
                                    <div className='flex justify-between'>
                                        <Select
                                            className="text-[#9a9ea4] p-1 w-[45%] rounded border-[1px] border-[#dde0e3] outline-none"
                                            aria-label="Select Country"
                                            radius="sm"
                                            name="country_code"
                                            placeholder="Country"
                                            id="countrySelect"                                            
                                            classNames={{
                                                trigger: "rounded",
                                            }}
                                            startContent={<FaGlobe className="w-5 h-5" />}
                                            onChange={handleCountryChange}
                                            defaultSelectedKeys={["91-India"]}
                                        >
                                            {countryArray &&
                                                Object.entries(countryArray.country).map(
                                                    ([key, country], index) => (
                                                        <SelectItem
                                                            key={`${country.code}-${country.name}`}
                                                            startContent={
                                                                <Avatar
                                                                    alt="Argentina"
                                                                    className="w-6 h-6"
                                                                    src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${country.image}`}
                                                                />
                                                            }
                                                            aria-labelledby="Select Country"
                                                            data-sort_code={country.sort_code}
                                                            data-country={country.name}
                                                            alt={country.name}
                                                            value={`${country.name}@#$?${country.code}`}
                                                            textValue={`${country.sort_code} +${country.code}`}
                                                        >
                                                            {country.name}
                                                        </SelectItem>
                                                    )
                                                )}
                                        </Select>
                                        <Input
                                            value={numberInput}
                                            onChange={(e) => setNumberInput(e.target.value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1'))}
                                            type='text'
                                            className='text-[#242529] px-4 w-[55%] rounded border-[1px] border-[#dde0e3] outline-none' placeholder='Enter Your Mobile No.'
                                            maxLength={16}
                                            classNames={{
                                                inputWrapper: "p-0 bg-white grow",
                                                innerWrapper: " bg-white",
                                            }}
                                            name='phone'
                                        />
                                    </div>
                                    <p className='text-red-500 text-[10px]'>{error?.phone}</p>
                                    <Button onClick={handleSubmit} disabled={buttonDisable} className='bg-[#006ac9] text-white border-none outline-nonepy-2 px-4 mt-3 rounded w-full'>Send</Button>
                                </div>
                                :
                                <div className='text-center'>
                                    <span className='flex justify-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                            <g id="tick-icon" transform="translate(-408 -1089)">
                                                <ellipse id="Ellipse_588" data-name="Ellipse 588" cx="18.5" cy="14" rx="18.5" ry="14" transform="translate(408 1093.828)" fill="#fff"></ellipse>
                                                <g id="Group_10276" data-name="Group 10276" transform="translate(408 1089)">
                                                    <path id="Path_58419" data-name="Path 58419" d="M20,0A20,20,0,1,0,40,20,20,20,0,0,0,20,0ZM31.178,14.738,18.4,27.411a1.967,1.967,0,0,1-2.757.051L8.872,21.3a2.033,2.033,0,0,1-.15-2.807,1.983,1.983,0,0,1,2.805-.1l5.364,4.913L28.32,11.88a2.021,2.021,0,0,1,2.858,2.858Z" fill="#2DB261"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <p className='text-lg md:text-[21px] my-2 font-bold text-[#24292d]'>Thank You!</p>
                                    <p className='text-sm md:text-base text-[#747579] mb-4 font-medium'>We will contact you as soon as we're available!</p>
                                </div>
                            )
                        }
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default WhatsAppPopup