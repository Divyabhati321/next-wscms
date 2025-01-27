import React from "react";

const BlogSwiperButton = ({ swiperInstance }) => {
  return (
    <div className="flex justify-center gap-28">
      <button
        className="swiper-button-prev-custom flex items-center gap-1 text-base"
        onClick={() => swiperInstance.slidePrev()}
      >
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.41406 8.34263L7.36406 12.2926C7.54171 12.4821 7.63869 12.7332 7.63448 12.9929C7.63026 13.2526 7.52518 13.5004 7.34146 13.684C7.15775 13.8676 6.90982 13.9725 6.65014 13.9765C6.39045 13.9806 6.13938 13.8834 5.95006 13.7056L0.293058 8.04963C0.199873 7.95697 0.125924 7.84681 0.0754624 7.72548C0.0250011 7.60415 -0.000976563 7.47404 -0.000976562 7.34263C-0.000976562 7.21122 0.0250011 7.08111 0.0754624 6.95977C0.125924 6.83844 0.199873 6.72828 0.293058 6.63563L5.95006 0.978628C6.0423 0.883118 6.15265 0.806936 6.27465 0.754527C6.39666 0.702118 6.52788 0.674531 6.66066 0.673378C6.79344 0.672224 6.92512 0.697525 7.04801 0.747806C7.17091 0.798087 7.28256 0.87234 7.37645 0.966233C7.47035 1.06013 7.5446 1.17178 7.59488 1.29467C7.64516 1.41757 7.67046 1.54925 7.66931 1.68203C7.66815 1.81481 7.64057 1.94603 7.58816 2.06803C7.53575 2.19004 7.45957 2.30038 7.36406 2.39263L3.41406 6.34263H13.0001C13.2653 6.34263 13.5196 6.44798 13.7072 6.63552C13.8947 6.82306 14.0001 7.07741 14.0001 7.34263C14.0001 7.60784 13.8947 7.8622 13.7072 8.04973C13.5196 8.23727 13.2653 8.34263 13.0001 8.34263H3.41406Z"
              fill="#0F172A"
            />
          </svg>
        </span>
        <span>Prev</span>
      </button>
      <button
        className="swiper-button-next-custom flex items-center gap-1 text-base"
        onClick={() => swiperInstance.slideNext()}
      >
        <span>Next</span>
        <span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5_2)">
              <path
                d="M10.5859 5.65746L6.63591 1.70749C6.45826 1.51799 6.36128 1.26689 6.36549 1.00719C6.36971 0.747492 6.47479 0.499692 6.65851 0.316092C6.84222 0.132492 7.09015 0.0275928 7.34983 0.0235928C7.60952 0.0194928 7.86059 0.116693 8.04991 0.294493L13.7069 5.95046C13.8001 6.04312 13.874 6.15328 13.9245 6.27461C13.975 6.39594 14.0009 6.52605 14.0009 6.65746C14.0009 6.78887 13.975 6.91898 13.9245 7.04032C13.874 7.16165 13.8001 7.27181 13.7069 7.36446L8.04991 13.0215C7.95767 13.117 7.84732 13.1932 7.72532 13.2456C7.60331 13.298 7.47209 13.3256 7.33931 13.3267C7.20653 13.3279 7.07485 13.3026 6.95196 13.2523C6.82906 13.202 6.71741 13.1278 6.62352 13.0339C6.52962 12.94 6.45537 12.8283 6.40509 12.7054C6.35481 12.5825 6.32951 12.4508 6.33066 12.3181C6.33182 12.1853 6.3594 12.0541 6.41181 11.9321C6.46422 11.8101 6.5404 11.6997 6.63591 11.6075L10.5859 7.65746L0.99987 7.65746C0.73467 7.65746 0.48037 7.55211 0.29277 7.36457C0.10527 7.17703 -0.000129819 6.92268 -0.000129819 6.65746C-0.000129819 6.39225 0.10527 6.13789 0.29277 5.95036C0.48037 5.76282 0.73467 5.65746 0.99987 5.65746L10.5859 5.65746Z"
                fill="#0F172A"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_2">
                <rect
                  width="14"
                  height="14"
                  fill="white"
                  transform="matrix(-1 0 0 -1 14 14.0001)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default BlogSwiperButton;