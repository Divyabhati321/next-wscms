
import { DropdownSection } from '@nextui-org/dropdown'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Spinner } from '@nextui-org/react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const NotificationDropdown = ({ examname }) => {

  const [loading, setLoading] = useState(true)
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    const count = Object.keys(userData)?.length;
    if (count != 0) {
      setLoading(false);
    }
  }, [userData])

  const handleLogout = (e) => {
    e.preventDefault();
    const logoutUrl = `${process.env.NEXT_PUBLIC_STUDY_ABROAD_DASHBOARD}logout`;
    window.location.href = logoutUrl;
  };

  return (
    <Dropdown
      radius="sm"
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 border-small border-divider bg-background",

      }}
    >
      <DropdownTrigger>
        <span className='cursor-pointer bg-test-prep-light w-fit p-2 rounded-full flex flex-col gap-1 z-50 relative'>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M16.2498 6C16.2498 8.07107 14.5709 9.75 12.4998 9.75C10.4288 9.75 8.74984 8.07107 8.74984 6C8.74984 3.92893 10.4288 2.25 12.4998 2.25C14.5709 2.25 16.2498 3.92893 16.2498 6Z" stroke={examname === 'pte' ? '#027FA2' : examname === 'ielts' ? '#FF2D46' : '#006ac9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M5.00098 20.1182C5.07128 16.0369 8.40171 12.75 12.4998 12.75C16.5981 12.75 19.9286 16.0371 19.9987 20.1185C17.7159 21.166 15.1762 21.75 12.5002 21.75C9.82384 21.75 7.28394 21.1659 5.00098 20.1182Z" stroke={examname === 'pte' ? '#027FA2' : examname === 'ielts' ? '#FF2D46' : '#006ac9'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </span>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className='p-3 shadow-lg bg-white rounded-lg'
        disabledKeys={["profile"]}

      >
        <DropdownSection aria-label="Profile & Actions">
          {
            loading ?
              <DropdownItem>
                <div className="flex items-center justify-center">
                  <Spinner color="primary" />
                </div>
              </DropdownItem>
              :
              <DropdownItem
                isReadOnly
                key="profile"
                className=" opacity-100"
              >
                <div className="flex items-center gap-2">
                  <span >
                    <svg width="43" height="44" viewBox="0 0 43 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect y="0.5" width="43" height="43" rx="7.64444" fill="#8F9BBA25" />
                      <path d="M22 22C24.7614 22 27 19.7614 27 17C27 14.2386 24.7614 12 22 12C19.2386 12 17 14.2386 17 17C17 19.7614 19.2386 22 22 22Z" stroke="#45464E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M30.5902 32C30.5902 28.13 26.7402 25 22.0002 25C17.2602 25 13.4102 28.13 13.4102 32" stroke="#45464E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <p className='block text-[#45464E] text-[16px] font-semibold'>{userData?.name + " " + userData?.lastName}</p>
                    <p className='block text-[14px] text-[#8F9BBA]'>
                      <span className='inline-block mr-1'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.451 6.62403C10.319 6.62403 10.1809 6.58188 10.0488 6.55177C9.78154 6.49183 9.51875 6.41336 9.26232 6.31692C8.9838 6.21529 8.67765 6.22057 8.40278 6.33174C8.12791 6.44291 7.90374 6.65212 7.77341 6.9191L7.64133 7.19611C7.05826 6.86443 6.51961 6.45973 6.03834 5.99174C5.57177 5.50901 5.16829 4.96873 4.83761 4.38391L5.11378 4.25745C5.37996 4.12672 5.58854 3.90188 5.69937 3.62617C5.81021 3.35047 5.81547 3.04339 5.71414 2.76403C5.6188 2.50451 5.54058 2.23897 5.48 1.96914C5.44998 1.83666 5.42597 1.69816 5.40796 1.56568C5.33505 1.14151 5.11355 0.757393 4.78335 0.482494C4.45314 0.207595 4.03593 0.0599829 3.60685 0.0662403H1.79974C1.54593 0.0659068 1.29492 0.119382 1.06316 0.22316C0.8314 0.326938 0.624122 0.478675 0.454917 0.668425C0.282203 0.863325 0.153602 1.09342 0.0779481 1.34289C0.00229452 1.59237 -0.0186176 1.85532 0.0166485 2.11367C0.343001 4.62005 1.48468 6.9484 3.26464 8.7377C5.04854 10.5231 7.36988 11.6682 9.86869 11.9955C9.94663 12.0015 10.0249 12.0015 10.1028 11.9955C10.5456 11.9962 10.973 11.8333 11.3036 11.5379C11.4928 11.3681 11.644 11.1602 11.7475 10.9278C11.851 10.6953 11.9043 10.4435 11.9039 10.189V8.38241C11.9007 7.96633 11.7544 7.56411 11.4896 7.24374C11.2249 6.92336 10.8581 6.70447 10.451 6.62403ZM10.7452 10.2371C10.745 10.3212 10.7273 10.4042 10.6932 10.481C10.6591 10.5577 10.6093 10.6265 10.5471 10.6828C10.4813 10.7429 10.403 10.7876 10.3179 10.8136C10.2327 10.8397 10.1429 10.8464 10.0548 10.8333C7.8144 10.5398 5.73231 9.51572 4.12917 7.91873C2.52467 6.30937 1.49477 4.21371 1.19937 1.9571C1.18633 1.86878 1.19303 1.77866 1.21899 1.69325C1.24495 1.60785 1.28952 1.52931 1.34947 1.46331C1.40627 1.40017 1.47577 1.34982 1.55338 1.31557C1.63099 1.28131 1.71495 1.26394 1.79974 1.26459H3.60085C3.73963 1.26119 3.8753 1.30613 3.98476 1.39177C4.09422 1.47741 4.17072 1.59845 4.20122 1.73429C4.20122 1.89688 4.25525 2.06549 4.29127 2.22808C4.36066 2.54355 4.45296 2.8535 4.56744 3.15545L3.72692 3.55289C3.58245 3.61941 3.47018 3.74068 3.41473 3.89011C3.35469 4.03672 3.35469 4.20117 3.41473 4.34777C4.27878 6.20416 5.76652 7.6964 7.61731 8.56307C7.76348 8.6233 7.92742 8.6233 8.07359 8.56307C8.22257 8.50745 8.34348 8.39484 8.4098 8.24993L8.78803 7.40687C9.09776 7.52016 9.41465 7.6127 9.73661 7.68388C9.89271 7.72001 10.0608 7.75012 10.2229 7.77421C10.3583 7.8048 10.479 7.88152 10.5644 7.99132C10.6498 8.10111 10.6946 8.23719 10.6912 8.37639L10.7452 10.2371ZM7.20306 0C7.06497 0 6.92088 0 6.7828 0C6.62357 0.0135753 6.47624 0.0900389 6.37322 0.21257C6.2702 0.3351 6.21993 0.493661 6.23346 0.653371C6.247 0.81308 6.32323 0.960855 6.44539 1.06419C6.56755 1.16752 6.72563 1.21794 6.88486 1.20437H7.20306C8.15842 1.20437 9.07466 1.58504 9.7502 2.26262C10.4257 2.94021 10.8053 3.85922 10.8053 4.81748C10.8053 4.92587 10.8053 5.02824 10.8053 5.13664C10.792 5.2955 10.842 5.45317 10.9444 5.57509C11.0468 5.697 11.1933 5.77321 11.3516 5.787H11.3996C11.5499 5.78761 11.695 5.73166 11.8061 5.6302C11.9173 5.52873 11.9865 5.38915 12 5.23901C12 5.10051 12 4.95598 12 4.81748C12 3.54085 11.4948 2.31641 10.5954 1.41313C9.69594 0.509854 8.47584 0.00159579 7.20306 0ZM8.40379 4.81748C8.40379 4.97719 8.46705 5.13036 8.57964 5.24329C8.69223 5.35622 8.84493 5.41966 9.00416 5.41966C9.16339 5.41966 9.3161 5.35622 9.42869 5.24329C9.54128 5.13036 9.60453 4.97719 9.60453 4.81748C9.60453 4.17864 9.35152 3.56597 8.90115 3.11424C8.45079 2.66252 7.83997 2.40874 7.20306 2.40874C7.04383 2.40874 6.89112 2.47218 6.77853 2.58512C6.66594 2.69805 6.60269 2.85121 6.60269 3.01092C6.60269 3.17063 6.66594 3.3238 6.77853 3.43673C6.89112 3.54966 7.04383 3.61311 7.20306 3.61311C7.52151 3.61311 7.82692 3.74 8.05211 3.96586C8.27729 4.19172 8.40379 4.49806 8.40379 4.81748Z" fill="#8F9BBA" />
                        </svg>
                      </span>
                      {userData?.countryCode} {userData?.phoneNumber}
                    </p>
                  </div>
                </div>
              </DropdownItem>
          }
          <DropdownItem
            classNames={{
              base: [
                "data-[hover=true]:bg-test-prep",
                "data-[hover=true]:text-white",


              ]

            }}
            key="dashboard" textValue="Go to Dashboard" className={`capitalize text-[15px] my-3 text-test-prep p-2 border-[1.5px] border-test-prep text-center block rounded-[8px] font-semibold hover:${examname === 'pte' ? 'bg-pte' : examname === 'ielts' ? 'bg-ielts' : 'bg-[#006ac9]'} hover:text-white`}>
            <Link href={process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD} className='font-medium'>Go to Dashboard</Link>
          </DropdownItem>
          <DropdownItem
            classNames={{
              base: [
                "data-[hover=true]:bg-test-prep",
                "data-[hover=true]:text-white",
              ],
              title: "font-medium"
            }}
            key="logout" textValue="logout" className={`group text-[15px] text-test-prep p-2  text-center block rounded-[8px] bg-test-prep-light font-semibold hover:${examname === 'pte' ? 'bg-pte' : examname === 'ielts' ? 'bg-ielts' : 'bg-[#006ac9]'} hover:text-white`}>
            <div onClick={handleLogout}>Logout
              <span className='inline-block ml-1 align-middle group-hover:translate-x-1 transition-all'>
                <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.89083 4.10466L5.2575 1.47133C5.13606 1.3456 5.06886 1.17719 5.07038 1.0024C5.0719 0.827598 5.14201 0.66039 5.26562 0.536784C5.38922 0.413179 5.55643 0.343066 5.73123 0.341547C5.90603 0.340028 6.07443 0.407225 6.20016 0.528663L9.9715 4.3C10.0336 4.36177 10.0829 4.43521 10.1166 4.5161C10.1502 4.59698 10.1675 4.68372 10.1675 4.77133C10.1675 4.85894 10.1502 4.94568 10.1166 5.02657C10.0829 5.10745 10.0336 5.18089 9.9715 5.24266L6.20016 9.014C6.13867 9.07767 6.0651 9.12846 5.98377 9.1634C5.90243 9.19834 5.81495 9.21673 5.72643 9.2175C5.63791 9.21827 5.55012 9.2014 5.46819 9.16788C5.38626 9.13436 5.31183 9.08486 5.24923 9.02226C5.18664 8.95967 5.13714 8.88523 5.10362 8.8033C5.07009 8.72137 5.05323 8.63358 5.054 8.54506C5.05477 8.45654 5.07316 8.36906 5.1081 8.28773C5.14303 8.20639 5.19382 8.13283 5.2575 8.07133L7.89083 5.438H1.50016C1.32335 5.438 1.15378 5.36776 1.02876 5.24273C0.903734 5.11771 0.833496 4.94814 0.833496 4.77133C0.833496 4.59452 0.903734 4.42495 1.02876 4.29993C1.15378 4.1749 1.32335 4.10466 1.50016 4.10466H7.89083Z" className='group-hover:fill-[#fff]' fill={examname === 'pte' ? '#027FA2' : examname === 'ielts' ? '#FF2D46' : '#006ac9'} />
                </svg>
              </span>
            </div>
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  )
}

export default NotificationDropdown