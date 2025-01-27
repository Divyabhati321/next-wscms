"use client"
import { setClaimState } from '@/redux/slices/ClaimpopupSlice';
import { Avatar, Button, Input, Modal, ModalBody, ModalContent, Select, SelectItem, useDisclosure, Spinner, } from '@nextui-org/react'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Player } from '@lottiefiles/react-lottie-player';
import Link from 'next/link';
import { FaGlobe } from 'react-icons/fa6';
import SuccessPopup from './SuccessPopup';
import { BookFreeSession, getCountryArray, getMobileVerification } from '@/lib/website';
import { usePathname } from 'next/navigation';
import { getCookie } from '@/lib/cookies';
const ClaimPopup = ({ examname }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [countryArray, setCountryArray] = useState([]);
  const [error, setError] = useState({});
  const pathname = usePathname();
  const [activeModal, setactiveModal] = useState('modal1');
  const dispatch = useDispatch();
  const openPopup = useSelector((state) => state.claimsessionState.onOpen);
  const inputRef = useRef(null);
  const [verification, setVerification] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [countryCode, setCountryCode] = useState("91");
  const [btnFirst, setBtnFirst] = useState(`Claim Free ${examname} Coaching`);
  const [isIPhoneNot, setIsIPhoneNot] = useState(null);

  useEffect(() => {
    if (openPopup == 'true') {
      onOpen();
    }
  }, [openPopup, onOpen]);

  const handleModalClose = () => {
    setactiveModal('modal1');
    dispatch(setClaimState({ status: 'false' }))
    onOpenChange(false);
  }

  useEffect(() => {
    const handleEvent = () => {
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('touchstart', handleEvent);
      if (countryArray?.length === 0 || countryArray === "") {
        fetchData();
      }
    };

    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('touchstart', handleEvent);
  }, []);

  const fetchData = async () => {
    try {
      const responseData = await getCountryArray();
      setCountryArray(responseData);
    } catch (error) {
      console.error('Error fetching country data:', error);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    let requiredKeys = [];
    if (!isVisible) {
      requiredKeys = ["name", "last_name", "phone"];
    } else {
      requiredKeys = ["phone"];
    }

    requiredKeys.forEach(key => {
      const value = formData.get(key);
      if (!value || value === "null" || value === "0") {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    return errors;
  };

  const handleCountryChange = async () => {
    if (inputRef?.current?.value) {
      let code = inputRef.current.value.split("-")[0];
      let name = inputRef.current.value.split("-")[1];
      if (code == '91') setIsCounrtyIndia(true);
      else setIsCounrtyIndia(false);
      setCountryCode(code);
    }
  };

  const handleInputAndChange = async (e) => {
    await handleCountryChange();
    let number = e.target.value;
    number = number.replace(/\./g, '');
    if (number.length > 15) {
      number = number.slice(0, 15);
    }
    e.target.value = number;
    if (number.length == 10) {
      setBtnFirst(<Spinner color="default" />);
      const formData1 = new FormData();
      formData1.append("country_code", countryCode);
      formData1.append("phone", number);
      const successData = await getMobileVerification(formData1);
      if (successData?.status == 1) {
        setBtnFirst(`Claim Free ${examname} Coaching`);
        setIsVisible(true);
        setVerification(false);
      } else if (successData?.status == 0) {
        setBtnFirst(`Claim Free ${examname} Coaching`);
        setIsVisible(false);
        setVerification(false);
      }
    }
  };

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const formErrors = validateForm(formData);
    setError(formErrors);

    if (Object.keys(formErrors).length === 0) {
      formData.append("url", pathname);
      formData.append("source", 'Claim-Popup');
      formData.append("popup", 'Claim');
      formData.append("examname", examname);
      const webJourneyCookieName = "web_journey";
      const journey = getCookie(webJourneyCookieName);
      if (journey) {
        formData.append("webJourney", journey);
        deleteCookie('web_journey');
      }
      const success = await BookFreeSession(formData);
      if (success && success.status) {
        e.target.reset();
        setactiveModal('modal2');
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

  useEffect(() => {
    navigator.appVersion.includes("iPhone") && navigator.appVersion.includes("Mobile") ? setIsIPhoneNot(false) : setIsIPhoneNot(true);
  }, [isIPhoneNot]);

  return (
    <Modal
      shouldBlockScroll={isIPhoneNot}
      backdrop="blur"
      size="2xl"
      classNames={{
        body: "",
        wrapper: "",
        backdrop: "",
        base: "base-modal ",

      }}
      isOpen={isOpen} onOpenChange={onOpenChange} onClose={handleModalClose}>
      <ModalContent className='sm:w-fit sm:rounded-large m-0 sm:m-1  rounded-b-none'>
        {(onClose) => (
          <>
            {activeModal === 'modal1' && (
              <ModalBody className='p-1.5 '>
                <div className="flex flex-col items-center sm:flex-row gap-2 sm:gap-2 claim-popup">
                  <div className='w-full sm:w-[50%] shadow-[0px_0px_24px_0px_#FFFFFF40] bg-gradient-to-b from-[#F05050] to-[#B32044] rounded-[14px] p-4 pb-0 left-card relative'>
                    <div className='text-center  relative'>
                      <p className='text-[24px] sm:text-[30px] font-medium text-white'>FREE IELTS Coaching</p>
                      <Image src="/common/claim-strip.png" width={40} height={50} alt='claim strip' className='absolute left-6 sm:left-0 top-7' />
                    </div>
                    <p className='text-[14px] sm:text-[18px] text-white text-center m-auto w-fit'>Worth ₹12,000/-</p>
                    <Image src="/common/starsvg.png" width={374} height={270} alt='star background' className='absolute bottom-0 right-0 left-0 z-10' />
                    <Player
                      src="/lottie/gift-box.json"
                      id="giftlottie"
                      autoplay={true}
                      keepLastFrame={true}
                      className='visible w-[233px] h-[200px] m-auto translate-y-10'

                    ></Player>
                    <Link href={"#"} className='text-[10px] text-white float-right inline-block mb-2 cursor-pointer relative z-20'>T&C Apply*</Link>
                  </div>
                  <div className='py-4 px-1 sm:px-4 sm:py-0 w-full sm:w-[60%]'>
                    <form id='claimPopup' onSubmit={handleSubmit}>
                      <p className='text-center text-[20px] font-medium mb-[5px] sm:mb-[15px]'>Claim Offer Now!</p>
                      <p className='text-[#6F6C90] text-[14px] sm:text-[16px] text-center'>Master IELTS for Free and Start IELTS Journey</p>
                      <div className='my-5'>
                        <div className="flex items-center gap-2 rounded-lg border-[1px] border-[#B6C2E2] p-1 relative  w-full">
                          <Select
                            className="w-[38%] sm:w-[40%] font-medium text-[14px]"
                            aria-label="Select Country"
                            radius="sm"
                            name="country_code"
                            placeholder="Country"
                            classNames={{
                              trigger: "h-8 w-full",
                            }}
                            onChange={handleCountryChange}
                            startContent={<FaGlobe className="w-5 h-5" />}
                            defaultSelectedKeys={['India@#$?91']}
                          >
                            {countryArray && countryArray.country && Object.entries(countryArray.country).map(([key, country], index) => (
                              <SelectItem key={`${country.name}@#$?${country.code}`} aria-labelledby="Select Country" data-sort_code={country.sort_code} data-country={country.name} alt={country.name} value={`${country.name}@#$?${country.code}`} textValue={`${country.sort_code} +${country.code}`} startContent={<Avatar alt="Argentina" className="w-6 h-6" src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${country.image}`} />}>
                                {country.name}
                              </SelectItem>
                            ))}
                          </Select>
                          <Input
                            onKeyUp={handleInputAndChange}
                            onChange={handleChange}
                            className="w-[60%] md:w-2/3 "
                            type="number"
                            radius="sm"
                            name="phone"
                            labelPlacement="outside"
                            placeholder="Enter Mobile Number"
                            classNames={{
                              label: "font-medium bg-white",
                              inputWrapper:
                                "p-0 bg-transparent shadow-none data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent",
                              input:
                                "text-gray-300 font-medium py-1 px-0 font-medium text-[16px]",
                            }}
                          />
                        </div>
                        <span className='text-red-500'>{error?.phone}</span>
                        <div className={`flex items-center mt-4 gap-4 ${isVisible ? "hidden" : ""}`}>
                          <div className="w-1/2 rounded-lg border-[1px] border-[#B6C2E2] p-1 relative">
                            <Input
                              onChange={handleChange}
                              type="text"
                              radius="sm"
                              name="name"
                              labelPlacement="outside"
                              placeholder="First Name"
                              classNames={{
                                label:
                                  "font-medium bg-white text-[#445275] text-[14px]",
                                inputWrapper:
                                  "shadow-none bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent text-[14px font-medium]",
                                input:
                                  "text-gray-300 font-medium py-2 px-0 font-medium text-[16px]",
                              }}
                            />
                          </div>
                          <span className='text-red-500'>{error?.name}</span>
                          <div className="w-1/2 rounded-lg border-[1px] border-[#B6C2E2] p-1 relative">
                            <Input
                              onChange={handleChange}
                              type="text"
                              name="last_name"
                              radius="sm"
                              labelPlacement="outside"
                              placeholder="Last Name"
                              classNames={{
                                label:
                                  "font-medium bg-white text-[#445275] text-[14px]",
                                inputWrapper:
                                  "shadow-none bg-transparent data-[hover=true]:bg-transparent group-data-[focus=true]:bg-transparent text-[14px font-medium]",
                                input:
                                  "text-gray-300 font-medium py-2 px-0 font-medium text-[16px]",
                              }}
                            />
                          </div>
                          <span className='text-red-500'>{error?.last_name}</span>
                        </div>
                      </div>
                      <Button type='submit' className='w-full bg-[#FF2D46] h-12 text-white font-medium p-4 rounded-[12px] hover:shadow-[0px_3.46px_13.83px_0px_#FF2D462E] transition-all'>{btnFirst}
                        <span className='inline-block'>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.00033 16.1585C12.9123 16.1585 16.0837 12.9872 16.0837 9.07522C16.0837 5.1632 12.9123 1.99188 9.00033 1.99188C5.08831 1.99188 1.91699 5.1632 1.91699 9.07522C1.91699 12.9872 5.08831 16.1585 9.00033 16.1585Z" stroke="#EDF5FF" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8.10742 11.5756L10.6008 9.07518L8.10742 6.57477" stroke="#EDF5FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </Button>
                    </form>
                  </div>
                </div>
              </ModalBody>
            )}
            {/* Claim Now  */}
            {activeModal === 'modal2' && (
              <ModalBody>
                <SuccessPopup head="Congratulations!" subhead="You have just claimed FREE IELTS Class"
                  desc="Our Counsellor will contact you soon!"
                  ctaDesc="Explore Other Offers"
                  handleModalClose={handleModalClose}
                  link={`${process.env.NEXT_PUBLIC_LARAVEL_APP_URL}/offers`}
                />
              </ModalBody>
            )}
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default ClaimPopup