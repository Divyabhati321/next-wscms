"use server";
import React from "react";
import CollapsibleToC from "@/ui/component/blog-component/CollapsibleToC";

const TocCard = ({ description }) => {
  let headings = "";

  const extractHeadings = (description) => {
    const headingRegex = /<(h[23])>(.*?)<\/\1>/gi;

    const structuredHeadings = [];
    let currentH2 = null;
    let match;

    while ((match = headingRegex.exec(description)) !== null) {
      const tagName = match[1].toUpperCase();
      const textContent = match[2].trim();
      const slug = textContent
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-")
        .substring(0, 50);

      if (tagName === "H2") {
        currentH2 = {
          tagName,
          text: textContent,
          id: slug || null,
          h3elemts: [],
        };
        structuredHeadings.push(currentH2);
      } else if (tagName === "H3" && currentH2) {
        currentH2.h3elemts.push({
          tagName,
          text: textContent,
          id: slug || null,
        });
      }
    }

    return structuredHeadings;
  };

  const extractHeadingsFromEditorJs = (parsedDescription) => {
    let structuredHeadings = [];
    let currentH2 = null;

    parsedDescription?.blocks?.forEach((block) => {
      if (block?.type === "header") {
        const slug = block?.data?.text
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, "")
          .replace(/\s+/g, "-")
          .substring(0, 50);

        if (block?.data?.level === 2) {
          currentH2 = {
            tagName: "H2",
            text: block?.data?.text,
            id: slug || null,
            h3elemts: [],
          };
          structuredHeadings.push(currentH2);
        } else if (block?.data?.level === 3 && currentH2) {
          currentH2.h3elemts.push({
            tagName: "H3",
            text: block?.data?.text,
            id: slug || null,
          });
        }
      }
    });

    return structuredHeadings;
  };

  try {
    const parsedDescription = JSON.parse(description);
    headings = extractHeadingsFromEditorJs(parsedDescription);
  } catch (error) {
    headings = extractHeadings(description);
  }

  return (
    <>
      <p className="text-2xl mb-4 font-semibold inline-block capitalize">
        Table of Contents
      </p>
      <CollapsibleToC headings={headings} />
    </>
  );
};

export default TocCard;
