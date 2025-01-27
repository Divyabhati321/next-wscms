
import React from 'react'
import MobileHeader from '@/ui/layout/mobile-layout/MobileHeader'
import DesktopHeader from './desktop-layout/DesktopHeader'
import { getHeaderData } from '@/lib/website';
import { cookies, headers } from 'next/headers'

const Header = async ({ examname }) => {
  const nextDashboard = process.env.NEXT_PUBLIC_TEST_PREP_DASHBOARD;
  let IsAuthenticate = false;
  const cookieStore = cookies()
  const token = cookieStore.get('_token');
  if (token) {
    IsAuthenticate = true;
  }
  if (examname !== 'ielts' && examname !== 'pte' && examname !== 'toefl' && examname !== 'dolungo') {
    examname = 'test-prep';
  }

  const fetchData = async () => {
    try {
      const responseData = await getHeaderData();
      return await responseData.result;
    } catch (error) {
      console.error('Error fetching Header data:', error);
    }
  };

  const header = await fetchData(1);

  const headersList = headers();
  const device = headersList.get("device");

  return (
    <>
      {
        device === "desktop" ? <div className='hidden xl:flex sticky z-50 top-0 mb-2'><DesktopHeader nextDashboard={nextDashboard} header={header} examname={examname} IsAuthenticate={IsAuthenticate} /></div>
          : <div className='flex xl:hidden'><MobileHeader IsAuthenticate={IsAuthenticate} nextDashboard={nextDashboard} header={header} examname={examname} /></div>
      }


    </>
  )
}

export default Header