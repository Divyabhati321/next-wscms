'use client'

import React, { useState } from "react";
import { blogComment } from "@/lib/website";
import { setLoginState } from "@/redux/slices/loginPopupSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";

const CommentSection = ({ comments, commentsCount, IsAuthenticate, page_id }) => {
  const dispatch = useDispatch();
  const pathname = usePathname()

  const userData = useSelector((state) => state.auth.userData);
  const [validation, setValidation] = useState(false)
  const [allComments, setAllComments] = useState(false);
  const [allowed, setAllowed] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const handleClick = () => {
    dispatch(setLoginState({ redirectUrl: null, status: 'true' }));
  };

  const handdleSubmit = async (e) => {
    e.preventDefault();
    setAllowed(true);
    const formData = new FormData(e.target);
    if (formData.get('comment') == '') {
      setValidation(true);
      setAllowed(false);
      return;
    }

    formData.append('name', userData?.name);
    formData.append('phone', userData?.phoneNumber);
    formData.append("url", pathname);

    const success = await blogComment(formData);
    if (success) {
      setAllowed(false);
      toast.success('Comment added successfully');
      if (success.status) {
        setValidation(false);
        e.target.reset();
      }
    } else {
      setAllowed(false);
      toast.error('Something Went Wrong');
      console.error('Failed to add Comment');
    }
  }

  return (
    <section class="bg-white p-5 antialiased rounded-[15px] shadow-[0px_0px_40px_0px_#1D3A531A]">
      <div class="">
        <div class="flex justify-between items-center mb-6">
          <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
            {commentsCount} comments
          </h2>
        </div>
        <form class="mb-6" onSubmit={handdleSubmit}>
          <div className="flex items-center justify-between gap-2">
            <div class="py-2 px-4 bg-[#F3F3F3] rounded-[28px] border border-[#B4B7C9] w-[85%]">
              <label for="comment" class="sr-only">
                Your comment
              </label>
              <textarea id="comment" rows="1" name="comment" class="resize-none px-0 w-full text-[15px] text-[#565973] border-0 focus:ring-0 focus:outline-none bg-[#F3F3F3]" placeholder="Write a comment..."></textarea>
              <input type="hidden" name="page_id" value={page_id} />
            </div>
            {IsAuthenticate ?
              <button type="submit" disabled={allowed} class="inline-flex w-[12%] items-center justify-center py-2.5 px-10 bg-[#066AC9] rounded-[28px] text-[15px] font-medium text-center text-white focus:ring-4 focus:ring-primary-200 hover:bg-[#4e95db]">
                Post
              </button>
              :
              <button type="button" class="inline-flex w-[12%] items-center justify-center py-2.5 px-10 bg-[#066AC9] rounded-[28px] text-[15px] font-medium text-center text-white focus:ring-4 focus:ring-primary-200 hover:bg-[#4e95db]" onClick={handleClick}>
                Post
              </button>
            }
          </div>
          {validation ? <span className='text-danger text-sm font-medium absolute'>Please Enter A Comment First</span> : ''}
        </form>

        {comments && comments.filter((ele, index) => allComments ? true : index < 1).map((comment, index) => (
          <>
            <article className=" flex justify-between mb-5">
              <div className="w-[6%]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_LARAVEL_APP_URL}/backend/image/default_user.png`}
                  width={46}
                  height={46}
                  alt="author image"
                  className=" rounded-full "
                />
              </div>
              <div className=" p-4 bg-[#EFF2FC] rounded-[10px] w-[92%]">
                <footer class="flex justify-between items-center mb-2">
                  <div class="flex items-center justify-between w-full">
                    <p class="inline-flex items-center mr-3 text-[15px] text-[#0B0F19] font-semibold">
                      {comment?.name}
                    </p>
                    {/* <p class="text-[13px] text-[#9397AD]">
                      <time
                        pubdate
                        datetime="2022-02-08"
                        title="February 8th, 2022"
                      >
                        {formatDate(comment?.created_at)}
                      </time>
                    </p> */}
                  </div>
                </footer>
                <p class="text-[#0B0F19] text-[15px] " dangerouslySetInnerHTML={{ __html: comment?.comment }} />
                {/* <div class="flex items-center mt-2 justify-end gap-4">
            <button
              type="button"
              class="flex items-center text-sm text-[#9397AD] hover:underline font-medium gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.6186 6.46238H10.6585L11.451 4.08648C11.5935 3.65745 11.5215 3.18184 11.2569 2.81491C10.9923 2.44797 10.5633 2.22852 10.1109 2.22852H8.97344C8.76386 2.22852 8.56557 2.32166 8.4308 2.48255L5.11427 6.46238H3.32828C2.54996 6.46238 1.91699 7.09535 1.91699 7.87367V14.2245C1.91699 15.0028 2.54996 15.6358 3.32828 15.6358H5.44521H12.7183C13.3033 15.6358 13.8339 15.2681 14.04 14.7198L15.9854 9.53264C16.0151 9.45361 16.0299 9.36964 16.0299 9.28496V7.87367C16.0299 7.09535 15.3969 6.46238 14.6186 6.46238ZM3.32828 7.87367H4.73957V14.2245H3.32828V7.87367ZM14.6186 9.15724L12.7183 14.2245H6.15086V7.42347L9.30368 3.6398H10.1123L9.01013 6.94434C8.93745 7.15956 8.97414 7.39595 9.1068 7.58012C9.23947 7.765 9.45257 7.87367 9.67908 7.87367H14.6186V9.15724Z"
                  fill="#9397AD"
                />
              </svg>
              5
            </button>
            <button
              type="button"
              class="flex items-center text-sm text-[#9397AD] hover:underline font-medium gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M14.3705 2.22852H3.08023C2.30191 2.22852 1.66895 2.86148 1.66895 3.6398V16.3414L5.43215 13.5188H14.3705C15.1489 13.5188 15.7818 12.8859 15.7818 12.1075V3.6398C15.7818 2.86148 15.1489 2.22852 14.3705 2.22852ZM14.3705 12.1075H4.96219L3.08023 13.5188V3.6398H14.3705V12.1075Z"
                  fill="#9397AD"
                />
              </svg>
              3
            </button>
          </div> */}
              </div>
            </article>
            {comment?.comment_reply ?
              <article className=" flex justify-between mb-5 ml-7 lg:ml-16">
                <div className="w-[6%]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_LARAVEL_APP_URL}/backend/image/default_user.png`}
                    width={46}
                    height={46}
                    alt="author image"
                    className=" rounded-full "
                  />
                </div>
                <div className=" p-4 bg-[#EFF2FC] rounded-[10px] w-[92%]">
                  <footer class="flex justify-between items-center mb-2">
                    <div class="flex items-center justify-between w-full">
                      <p class="inline-flex items-center mr-3 text-[15px] text-[#0B0F19] font-semibold">
                        Gradding
                      </p>
                      {/* <p class="text-[13px] text-[#9397AD]">
                        <time
                          pubdate
                          datetime="2022-02-08"
                          title="February 8th, 2022"
                        >
                          {formatDate(comment?.created_at)}
                        </time>
                      </p> */}
                    </div>
                  </footer>
                  <p class="text-[#0B0F19] text-[15px] " dangerouslySetInnerHTML={{ __html: comment?.comment_reply }} />

                  {/* <div class="flex items-center mt-2 justify-end gap-4">
                <button
                  type="button"
                  class="flex items-center text-sm text-[#9397AD] hover:underline font-medium gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M14.6186 6.46238H10.6585L11.451 4.08648C11.5935 3.65745 11.5215 3.18184 11.2569 2.81491C10.9923 2.44797 10.5633 2.22852 10.1109 2.22852H8.97344C8.76386 2.22852 8.56557 2.32166 8.4308 2.48255L5.11427 6.46238H3.32828C2.54996 6.46238 1.91699 7.09535 1.91699 7.87367V14.2245C1.91699 15.0028 2.54996 15.6358 3.32828 15.6358H5.44521H12.7183C13.3033 15.6358 13.8339 15.2681 14.04 14.7198L15.9854 9.53264C16.0151 9.45361 16.0299 9.36964 16.0299 9.28496V7.87367C16.0299 7.09535 15.3969 6.46238 14.6186 6.46238ZM3.32828 7.87367H4.73957V14.2245H3.32828V7.87367ZM14.6186 9.15724L12.7183 14.2245H6.15086V7.42347L9.30368 3.6398H10.1123L9.01013 6.94434C8.93745 7.15956 8.97414 7.39595 9.1068 7.58012C9.23947 7.765 9.45257 7.87367 9.67908 7.87367H14.6186V9.15724Z"
                      fill="#9397AD"
                    />
                  </svg>
                  5
                </button>
                <button
                  type="button"
                  class="flex items-center text-sm text-[#9397AD] hover:underline font-medium gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M14.3705 2.22852H3.08023C2.30191 2.22852 1.66895 2.86148 1.66895 3.6398V16.3414L5.43215 13.5188H14.3705C15.1489 13.5188 15.7818 12.8859 15.7818 12.1075V3.6398C15.7818 2.86148 15.1489 2.22852 14.3705 2.22852ZM14.3705 12.1075H4.96219L3.08023 13.5188V3.6398H14.3705V12.1075Z"
                      fill="#9397AD"
                    />
                  </svg>
                  3
                </button>
              </div> */}
                </div>
              </article>
              :
              ''
            }
          </>
        ))}
        {comments.length > 1 ?
          <div className="grid mt-2">
            <Button onClick={() => setAllComments(prev => !prev)} className={`inline-flex w-fit m-auto items-center justify-center py-2.5 px-10 bg-[#066AC9] rounded-[28px] text-[15px] font-medium text-center text-white focus:ring-4 focus:ring-primary-200 hover:bg-[#4e95db]`}>{allComments ? "View Less" : "View More"}</Button>
          </div>
          :
          null
        }
      </div>
    </section>
  );
};

export default CommentSection;
