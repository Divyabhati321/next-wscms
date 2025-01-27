"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const CollapsibleToC = ({ headings }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [heights, setHeights] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const newHeights = {};
    refs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
      }
    });
    setHeights(newHeights);
  }, [headings]);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white py-3 px-5 rounded-xl flex flex-col gap-2">
      {headings.map((item, index) => (
        <div key={index}>
          <div
            key={index}
            className="flex items-start justify-between w-fit gap-3"
          >
            <Link
              href={`#${item?.id}`}
              className="text-black text-sm font-bold"
            >
              <p dangerouslySetInnerHTML={{ __html: item?.text }} />
            </Link>
            {item?.h3elemts && item?.h3elemts.length > 0 && (
              <span
                className={`w-fit cursor-pointer transition-all ${
                  activeIndex === index ? "rotate-[135deg]" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                <Image
                  className="max-w-none"
                  src={`${process.env.NEXT_PUBLIC_APP_URL}icons/CollapseIconGrey.svg`}
                  width={20}
                  height={20}
                  alt="toggle icon"
                />
              </span>
            )}
          </div>
          {item?.h3elemts.length > 0 && (
            <div
              ref={(el) => (refs.current[index] = el)}
              className={`ml-2.5 overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight:
                  activeIndex === index ? `${heights[index]}px` : "0px",
              }}
            >
              <ul className="list-disc pl-5 text-sm text-primary">
                {item?.h3elemts &&
                  item?.h3elemts.map((child, childIndex) => (
                    <li key={childIndex} className="font-medium">
                      <Link href={`#${child?.id}`}>
                        <p dangerouslySetInnerHTML={{ __html: child?.text }} />
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CollapsibleToC;
