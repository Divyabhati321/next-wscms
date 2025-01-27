"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BlogSwiperButton from "./BlogSwiperButton";

const BlogSlider = ({ blogs, examname,device }) => {
  const blog = blogs?.blogs;
  const blogUrl = blogs?.blog_Url;
  const website_public_url = blogs?.website_public_url;
  const [swiperInstance, setSwiperInstance] = useState(null);
  return (
    <div className=" m-auto my-12 sm:my-14 xl:px-0 md:-pl-10 blog-slider">
      <h2 className=" text-2xl lg:text-[28px] xl:text-[30px] 2xl:text-[34px] font-normal text-center">
        Gradding{" "}
        <span className="font-medium inline-block text-primary">Blogs</span>
      </h2>
      <div className="flex gap-3 items-center justify-center mt-4 mb-2">
        <p className="text-[14px] text-[#6E6E73] font-medium">
          Want to read more?
        </p>
        <Link
          href={blogUrl ? blogUrl : "#"}
          className={`p-2 font-medium rounded-md text-[14px] inline-block bg-[#006ac91a] text-primary hover:bg-[#006ac9] hover:text-white capitalize`}
        >
          explore blogs
          <FaAngleRight className="inline-block font-normal" />
        </Link>
      </div>
      <Swiper
        onSwiper={setSwiperInstance}
        breakpoints={{
          300: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1400: {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          1600: {
            slidesPerView: 4.5,
            spaceBetween: 40,
          },
        }}
        lazy="true"
        loop={true}
        centeredSlides={false}
        grabCursor={false}
        spaceBetween={20}
        navigation={false}
        modules={[Navigation]}
      >
        {blog &&
          Object.entries(blog).map(([key, blog]) => (
            <SwiperSlide
              key={key}
              className=" first:ml-[1.6rem] first:sm:ml-[3rem] first:lg:ml-[4rem] first:xl:ml-[6rem] first:2xl:ml-[18rem] sm:mt-3 sm:mb-16"
            >
              <Link
                href={`${website_public_url}blog/${blog?.category?.url}/${blog?.url}`}
                className="overflow-hidden hover:shadow-[0px_4px_14px_0px_#00000040] rounded-[16px] block transition-all ease-in-out"
              >
                <Image
                  onError={(event) => {
                    event.target.srcset = `${process.env.NEXT_PUBLIC_APP_URL}imageDefault.png`;
                  }}
                  src={`${process.env.NEXT_PUBLIC_S3_URL}${blog?.image}`}
                  width={408}
                  height={230}
                  alt={blog ? blog?.imageAltText : "blog image"}
                  title={blog?.imageTitle}
                  className="h-full w-full"
                />
                <div className="bg-white p-3 lg:p-4 w-fit">
                  {blog.category ? (
                    <span className="font-semibold text-[10px] lg:text-xs xl:text-sm text-[#6E6E73]">
                      {" "}
                      {blog.category.name}{" "}
                    </span>
                  ) : (
                    ""
                  )}
                  <h3 className="text-limit text-ellipsis font-semibold text-sm lg:text-base xl:text-lg text-[#1D1D1F]">
                    {" "}
                    {blog.header_title}{" "}
                  </h3>
                  <span className="font-semibold text-[10px] lg:text-xs xl:text-sm text-[#6E6E73]">
                    {" "}
                    {blog.display_date &&
                      new Date(blog.display_date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}{" "}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
      {swiperInstance && device === "desktop" && (
        <BlogSwiperButton swiperInstance={swiperInstance} />
      )}
    </div>
  );
};

export default BlogSlider;
