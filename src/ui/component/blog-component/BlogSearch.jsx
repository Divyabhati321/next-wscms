"use client"
import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards'
import { Avatar, Button, Select, SelectItem } from '@nextui-org/react'
import { FaGlobe } from 'react-icons/fa6'
import { useSearchParams } from 'next/navigation'

const BlogSearch = ({ trendingBlog, Strip1, payload, countryArray, categoryBlog, device }) => {
  const [pathname, setPathname] = useState('');
  const [subPathname, setSubPathname] = useState('');
  const [bubble, setBubble] = useState('')
  const [country, setCountry] = useState('');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [visibility, setVisibility] = useState(false);
  const searchParams = useSearchParams()
  const fParam = searchParams.get('f')

  useEffect(() => {
    setBubble(payload?.url)
    if (fParam && !payload.url.includes(fParam)) {
      payload.url = `${payload?.url}-${fParam}`;
    }
    setPathname(payload?.url);
    setSubPathname(fParam);
  }, [payload, fParam]);


  const handleNavigation = (src) => {
    setCurrentPage(1);
    if (src != '') {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
    const newPath = src || '/';
    payload.url = src;
    setBubble(src)
    setPathname(src)

    const formattedPath = process.env.NEXT_PUBLIC_APP_MODE !== 'local' && newPath.startsWith('/') ? newPath.slice(1) : newPath;
    const basePath = process.env.NEXT_PUBLIC_APP_MODE !== 'local' ? '/blog/' : '';

    window.history.replaceState(window.history.state, '', `${basePath}${formattedPath}`);
  };

  const handleSubNavigation = (src) => {
    setCurrentPage(1);
    setVisibility(true)
    let parts = src.split('-');
    let source = parts[0];
    let url = parts.slice(1).join('-');
    let newurl = `${source}?f=${url}`;
    payload.url = src;
    setBubble(source)
    setPathname(source)
    setSubPathname(url)
    window.history.replaceState(window.history.state, '', newurl);
  };

  const handleKeyDown = (e) => {
    if (e.type == 'keydown') {
      if (e.key === 'Enter') {
        setSearch(e.target.value);
        scrollToSection('recentBlogScroll');
      }
    } else if (e.type == 'blur') {
      setSearch(e.target.value);
      scrollToSection('recentBlogScroll');
    }
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: topPos, behavior: 'smooth' });
    }
  };

  return (
    <div className='my-8 sm:my-16'>
      <div className='container'>
        <h2 className='text-[32px] sm:text-[54px] text-center capitalize font-semibold mb-5 sm:mb-10'>News <span className='text-primary'>&</span> Blogs</h2>
        <div className='w-full sm:w-2/5 m-auto flex items-center gap-1 border-1.5 border-primary rounded-[12px] px-3 py-2'>
          <div className='flex gap-1 w-3/5 sm:w-3/4'>
            <span className='inline-block'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.9649 14.255H15.7549L20.7449 19.255L19.2549 20.745L14.2549 15.755V14.965L13.9849 14.685C12.8449 15.665 11.3649 16.255 9.75488 16.255C6.16488 16.255 3.25488 13.345 3.25488 9.755C3.25488 6.165 6.16488 3.255 9.75488 3.255C13.3449 3.255 16.2549 6.165 16.2549 9.755C16.2549 11.365 15.6649 12.845 14.6849 13.985L14.9649 14.255ZM5.25488 9.755C5.25488 12.245 7.26488 14.255 9.75488 14.255C12.2449 14.255 14.2549 12.245 14.2549 9.755C14.2549 7.26501 12.2449 5.255 9.75488 5.255C7.26488 5.255 5.25488 7.26501 5.25488 9.755Z" fill="#AFB0B8" />
              </svg>
            </span>
            <input type='text' placeholder='Search Blog' onKeyDown={device != 'mobile' ? handleKeyDown : undefined} onBlur={device == 'mobile' ? handleKeyDown : undefined} className='text-sm sm:text-base text-[#242529] placeholder:text-[#AFB0B8] font-medium bg-transparent outline-none w-full' />
          </div>
          <div className='flex gap-1 w-2/5 sm:w-1/4'>
            <span className=" border-1 border-[#AFB0B8] rounded-[9px] "></span>
            <Select
              className=" font-medium text-[16px] bg-transparent border-none"
              aria-label="Select Country"
              radius="sm"
              placeholder="Country"
              classNames={{
                trigger: "h-5 shadow-none capitalize bg-transparent",
              }}
              startContent={<FaGlobe className="w-5 h-5 text-[#AFB0B8]" />}
              onChange={(e) => setCountry(e.target.value)}
              defaultSelectedKeys={["select"]}
            >
              <SelectItem
                key={'select'}
                startContent={<FaGlobe className="w-5 h-5 text-[#AFB0B8]" />}
                aria-labelledby="Select Country"
                alt={"select"}
                className='capitalize'
              >
                Select Country
              </SelectItem>
              {countryArray && countryArray.map((country, index) => (
                <SelectItem
                  key={`${country.id}`}
                  startContent={
                    <Avatar
                      alt="Argentina"
                      className="w-6 h-6"
                      src={`${process.env.NEXT_PUBLIC_WEBSITE_URL}${country.image}`}
                    />
                  }
                  aria-labelledby="Select Country"
                  alt={country.name}
                  className='capitalize'
                >
                  {country.name}
                </SelectItem>
              )
              )}
            </Select>
          </div>
        </div>
        <div className='flex items-center gap-4 flex-wrap justify-center my-10'>
          <button onClick={() => { handleNavigation('') }} className={`${bubble === '' ? "bg-black text-white" : "bg-transparent text-black"} w-fit px-4 py-2.5 rounded-[30px] border-2 border-[#1D1D1F]  text-[15px] text-center font-semibold hover:bg-black hover:text-white transition-all`}>All</button>
          {
            categoryBlog && categoryBlog.map((category, index) => (
              <button key={index} onClick={() => { handleNavigation(category.src) }} className={`${bubble === category.src ? "bg-black text-white" : "bg-transparent text-black"} w-fit px-4 py-2.5 rounded-[30px] border-2 border-[#1D1D1F]  text-[15px] text-center font-semibold hover:bg-black hover:text-white transition-all`}>{category.title}</button>
            ))
          }
        </div>
      </div>
      {
        bubble === "ielts" ?
          <div className='bg-[#d9d9d9] px-4 py-2.5 text-[15px] text-center font-semibold '>
            <div className='container'>
              <div className='sm:!flex sm:items-center  justify-start gap-5 overflow-x-auto' style={{ display: "-webkit-box" }}>
                <p className='text-[15px] uppercase w-fit flex items-center mx-1 sm:m-0'>Filter By</p>
                {categoryBlog && categoryBlog.find(category => category.src === 'ielts').ieltscategory.map((category, index) => (
                  <button key={index} onClick={() => { handleSubNavigation(category.src) }} href={category.src} className={`${subPathname === category.compare ? " bg-black text-white " : "bg-transparent text-black"} block w-fit px-2.5 py-2 mx-1 rounded-[11px] border-2 border-[#1D1D1F] text-[15px] text-center font-semibold hover:bg-black hover:text-white transition-all`}>
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div> : ""
      }
      <BlogCards trendingBlog={trendingBlog} payload={payload} Strip1={Strip1} country={country} search={search} visibility={visibility} handlePageChange={handlePageChange} currentPage={currentPage} device={device} />
    </div>
  )
}

export default BlogSearch