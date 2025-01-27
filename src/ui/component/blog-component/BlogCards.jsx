"use client";
import React, { useEffect, useState } from "react";
import BlogPagination from "./BlogPagination";
import TrendingCard from "./TrendingCard";
import RecentBlogCard from "./RecentBlogCard";
import AdvertisementBlogCard from "./AdvertisementBlogCard";
import { getRecentBlogs } from "@/lib/website";
import NoBlogFound from "./NoBlogFound";
import dynamic from "next/dynamic";
import Loading from "@/ui/Loading";

const BlogCards = ({
  trendingBlog,
  Strip1,
  payload,
  country,
  search,
  visibility,
  handlePageChange,
  currentPage,
  device,
}) => {
  const AdvertisementBlogCard = dynamic(
    () => import("@/ui/component/blog-component/AdvertisementBlogCard"),
    {
      ssr: false,
    }
  );
  const [totalPages, setTotalPages] = useState(10);
  const [recentBlogs, setRecentBlogs] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      payload.country_id = country;
      payload.search = search;
      setLoading(true);
      const responseData = await getRecentBlogs(payload, currentPage);
      if (responseData?.status == 200) {
        setRecentBlogs(responseData?.result?.recentBlogs);
        setTotalPages(responseData?.result?.recentBlogs?.last_page);
      }
    } catch (error) {
      console.error("Recent Blogs Api Failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, JSON.stringify(payload), country, search]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container my-10 pb-10 box-border ">
      {trendingBlog?.length != 0 ? (
        <>
          <p
            className={`pb-5 sm:pb-10 pt-2 sm:pt-20 text-3xl font-bold ${
              visibility ? "hidden" : ""
            }`}
          >
            Trending Blogs
          </p>
          <div
            className={`flex flex-wrap gap-8 lg:justify-between lg:gap-0 ${
              visibility ? "hidden" : ""
            }`}
          >
            {trendingBlog &&
              trendingBlog.map((card, index) => {
                return <TrendingCard card={card} index={index} />;
              })}
          </div>
        </>
      ) : (
        ""
      )}
      {recentBlogs?.data && recentBlogs?.data.length != 0 ? (
        <>
          <p
            id="recentBlogScroll"
            className={`pb-10 ${
              trendingBlog?.length != 0 ? "pt-20" : "pt-10"
            } text-3xl font-bold`}
          >
            Recent Blogs
          </p>
          <div className="flex flex-wrap lg:justify-between gap-10 relative">
            {recentBlogs?.data?.map((card, index) => {
              return index !== 4 ? (
                <RecentBlogCard card={card} index={index} />
              ) : (
                <>
                  {Strip1 ? <AdvertisementBlogCard Strip1={Strip1} /> : ""}
                  <RecentBlogCard card={card} index={index} />
                </>
              );
            })}
          </div>
          <BlogPagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            currentPage={currentPage}
            device={device}
          />
        </>
      ) : (
        <>
          <NoBlogFound />
        </>
      )}
    </div>
  );
};

export default BlogCards;
