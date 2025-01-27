"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "@/styles/blog/blogPage.scss";
import BannerCard from "@/ui/component/blog-component/BannerCard";

const BlogHeroSection = ({ popularBlogs, bannerCardMobile, device }) => {
  console.log('device', device);  
  return (
    <div className="bg-[#4E4949] -mt-2 overflow-auto py-7 sm:py-14 relative">
      <div className="container">
        <div className="pb-14 h-[500px] xl:h-[380px]">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, Pagination]}
            pagination={{
              dynamicBullets: true,
            }}
            // lazy={{
            //   enabled: true,
            //   loadPrevNext: true,
            //   loadPrevNextAmount: 1,
            //   loadOnTransitionStart: true,
            // }}
            autoplay={{
              disableOnInteraction: true,
              delay: 4000,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            grabCursor={true}
            className="blog-hero-slider !pb-8 !static"
          >
            {popularBlogs?.map((BlogDetail, index) => (
              <SwiperSlide className="relative" key={index}>
                <Link
                  href={`${process.env.NEXT_PUBLIC_APP_URL}${BlogDetail?.category?.url}/${BlogDetail?.url}`}
                  className="flex sm:flex-row flex-col gap-8 h-full"
                >
                  <div className="w-full sm:w-2/5 rounded-[15px] border-4 border-white overflow-hidden">
                    <Image
                      priority={index == 0 ? true : false}
                      loading="eager"
                      src={BlogDetail?.image}
                      width={431}
                      height={240}
                      alt="blog image"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full sm:w-3/5  flex flex-col justify-between items-start">
                    <div>
                      <h1 className="text-[23px] sm:text-[40px] capitalize font-medium text-white line-clamp-2 leading-[130%]">
                        {BlogDetail?.header_title}
                      </h1>
                      <div
                        className="text-white text-base line-clamp-3 w-full sm:w-3/4 mt-2 mb-4 sm:my-3"
                        dangerouslySetInnerHTML={{
                          __html: BlogDetail?.header_description,
                        }}
                      />
                    </div>
                    <div className="group hover:text-white hover:bg-transparent transition-all  border-2 border-white inline-flex items-center gap-1 py-1.5 sm:py-2.5 px-5 rounded-[10px] bg-white text-base sm:text-lg capitalize text-[#4E4949] font-medium">
                      Visit Blog
                      <span className="inline-block">
                        <svg
                          className="group-hover:translate-x-1 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="16"
                          viewBox="0 0 15 16"
                          fill="none"
                        >
                          <path
                            className="group-hover:stroke-[#fff]"
                            d="M10.3125 3.3125L14.0625 8M14.0625 8L10.3125 12.6875M14.0625 8H0.9375"
                            stroke="#4E4949"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {device === "desktop" && (
          <BannerCard bannerCardMobile={bannerCardMobile} examname="ielts" />
        )}
      </div>
    </div>
  );
};

export default BlogHeroSection;
