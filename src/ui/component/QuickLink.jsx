"use client";

import React, { useState } from "react";
import Link from "next/link";
import "@/styles/quick-link.scss";
import { ReadMoreReadLess } from "./ReadMoreReadLess";

const QuickLink = ({ quickLinks }) => {

  const links = quickLinks;
  const linksObj = links && JSON.parse(links?.links) ? JSON.parse(links?.links) : '';
  const [description, setDescription] = useState(links?.description || '');

  const website_public_url = links?.website_public_url;

  const areLinksValid = Array.isArray(linksObj) && linksObj.length > 0;

  let articleHTML = '';
  try {
    let parsedDescription = JSON.parse(description);
    parsedDescription && parsedDescription?.blocks?.forEach(obj => {
      switch (obj?.type) {
        case 'paragraph':
          articleHTML += `<p className="text-[15px] md:text-base font-medium px-[14px] sm:px-[22px] py-4 text-[#3f3d3d] rounded-[20px] bg-white md:bg-[#F5F6F6]">${obj?.data?.text}</p>`;
          break;
        case 'image':
          const caption = obj.data.caption ? `<div className=""><p>${obj.data.caption}</p></div>` : ''

          articleHTML += `<div className="">
                    <img src="${obj?.data?.file?.url}" alt="${obj?.data?.caption}"/>
                    ${caption}
                  </div>`;
          break;
        case 'header':
          if (obj?.data?.level === 1) {
            articleHTML += `<h1 className="h1 blog_post_h1">${obj.data.text}</h1>`;
          } else if (obj?.data?.level === 2) {
            articleHTML += `<h2 className="text-xl md:text-2xl font-semibold text-[#242331] py-5 pl-1.5 sm:pl-0">${obj.data.text}</h2>`;
          } else if (obj?.data?.level === 3) {
            articleHTML += `<h3 className="h3 blog_post_h3">${obj.data.text}</h3>`;
          } else if (obj?.data?.level === 4) {
            articleHTML += `<h4 className="h4 blog_post_h4">${obj.data.text}</h4>`;
          } else if (obj?.data?.level === 5) {
            articleHTML += `<h5 className="h5 blog_post_h5">${obj.data.text}</h5>`;
          } else if (obj?.data?.level === 6) {
            articleHTML += `<h5 className="h5 blog_post_h5">${obj.data.text}</h5>`;
          }
          break;
        case 'raw':
          articleHTML += `
                      <div className="">                        
                          <code>${obj?.data?.html}</code>                          
                      </div>`;
          break;
        case 'list':
          const listItems = obj?.data?.items?.map(item => {
            if (typeof item === 'string') {
              return `<li>${item}</li>`;
            }
            else if (typeof item === 'object' && item?.content) {
              return `<li>${item.content}</li>`;
            }
            return '';
          }).join('');

          const listTag = obj?.data?.style === 'unordered' ? 'ul' : 'ol';
          articleHTML += `<${listTag} class="list-disc font-medium pl-7 py-1${listTag}">
                              ${listItems}
                          </${listTag}>`;
          break;
        case "quote":
          articleHTML += `<div className="spcl_line mar_b30">
                  <blockquote>
                      <p className="spcl_line_p">
                          ${obj?.data?.text}
                      </p>
                  </blockquote>
                  <p>- ${obj?.data?.caption}</p>
              </div>`;
          break;
        case "warning":
          articleHTML += `<section className="nws3_sec4">
                  <div className="row justify-content-center">
                      <div className="col-12 col-md-10 col-lg-8">
                          <div className="table_warning">
                              
                              <h3><span><i className="fas fa-exclamation"></i></span>${obj?.data?.title}</h3>
                              <p>${obj?.data?.message}</p>
                          </div>
                      </div>
                  </div>
              </section>`;
          break;
        case "checklist":
          articleHTML += `<div className="flex flex-col">
                            <input type="checkbox" ${obj?.data?.items[0]?.checked ? 'checked' : ''} id="${obj?.id}">
                            <label for="${obj?.id}">${obj?.data?.items[0]?.text}</label>
                          </div>`;
          break;
        case 'delimiter':
          articleHTML += `<div className="ce-block">
                  <div className="ce-block__content">
                      <div className="ce-delimiter cdx-block"></div>
                  </div>
                  </div>\n`;
          break;
        case 'code':
          articleHTML += `<div>${obj?.data?.code}</div>`;
          break;
        case 'table':
          let tableData = obj.data.content;
          let withHeadings = obj.data.withHeadings;

          articleHTML += "<div className='table-custom'><table className=`text-left`>";

          for (let i = 0; i < tableData.length; i++) {
            articleHTML += "<tr>";
            for (let j = 0; j < tableData[i].length; j++) {
              if (withHeadings && i === 0) {
                articleHTML += "<th>" + tableData[i][j] + "</th>";
              } else {
                articleHTML += "<td>" + tableData[i][j] + "</td>";
              }
            }
            articleHTML += "</tr>";
          }

          articleHTML += "</table></div>";
          break;
        default:
          break;
      }
    });
  } catch (e) {
    articleHTML = description;
  }

  return (
    <>
      {/* {(isDescriptionValid || areLinksValid) ? (
        <div className="container my-8 xl:py-14">
          <h2 className="text-2xl lg:text-[28px] xl:text-[30px] 2xl:text-[34px] font-medium text-center sm:text-left">
            Quick <span className='inline-block text-[#ff2d46] font-medium'>Links</span>
          </h2>
          <div className="flex flex-wrap gap-2 mt-4 mb-1 sm:my-4">
            {linksObj && Object.entries(linksObj).map(([key, link]) => (
              <Link href={`${website_public_url}${link?.link_url}`} key={key} className="rounded-full px-3 sm:px-5 py-1 sm:p-2 text-[12px] lg:text-[14px] inline-block font-medium sm:font-semibold bg-[#E8E8ED] hover:bg-[#ccc]">
                {link.link_name}
              </Link>
            ))}
          </div>
          <div className="quick-link">
            <ReadMoreReadLess content={<>
              <div dangerouslySetInnerHTML={{__html: description}}></div>
            </>}/>
          </div>
        </div>
      ) : null} */}
      <div className="container my-8 xl:py-14">
        <h2 className="text-2xl lg:text-[28px] xl:text-[30px] 2xl:text-[34px] font-medium text-center sm:text-left">
          Quick <span className='inline-block text-test-prep font-medium'>Links</span>
        </h2>
        <div className="flex flex-wrap gap-2 mt-4 mb-1 sm:my-4">
          {linksObj && Object.entries(linksObj).map(([key, link]) => (
            <Link href={`${website_public_url}${link?.link_url}`} key={key} className="rounded-full px-3 sm:px-5 py-1 sm:p-2 text-[12px] lg:text-[14px] inline-block font-medium sm:font-semibold bg-[#E8E8ED] hover:bg-[#ccc]">
              {link.link_name}
            </Link>
          ))}
        </div>
        {/* <div suppressHydrationWarning={true}>
            <div className="inline-block quick-link" dangerouslySetInnerHTML={{ __html: isShowMore || description.length <= 150 ? description : `${description.slice(0, 150)}...` }} />
            {description.length > 150 && (
              <span className="inline-block text-[#006ac9] text-[14px] cursor-pointer" onClick={handleClick}>
                {isShowMore ? 'Read less' : '...Read more'}
              </span>
            )}
          </div> */}
        <div className="quick-link">
          <ReadMoreReadLess content={<>
            <div dangerouslySetInnerHTML={{ __html: articleHTML }}></div>
          </>} />
        </div>
      </div>
    </>
  );
};

export default QuickLink;
