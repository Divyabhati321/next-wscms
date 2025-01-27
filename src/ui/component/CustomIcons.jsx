import Image from "next/image";
import React from "react";

const EligibilityIcon = () => {
  return (
    <Image
      src="/icons/eligibilityIcon.png"
      className=""
      width={24}
      height={24}
      alt="eligibilityIcon"
    />
  );
};
const SyllabusIcon = () => {
  return (
    <Image
      src="/icons/syllabusIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="syllabusIcon"
    />
  );
};
const CalenderIcon = () => {
  return (
    <Image
      src="/icons/testdatesIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="testdatesIcon"
    />
  );
};
const ResultIcon = () => {
  return (
    <Image
      src="/icons/resultIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="resultIcon"
    />
  );
};
const BandScoreIcon = () => {
  return (
    <Image
      src="/icons/bandScoreIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="bandScoreIcon"
    />
  );
};
const ExampatternIcon = () => {
  return (
    <Image
      src="/icons/exampatternIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="exampatternIcon"
    />
  );
};
const FeesIcon = () => {
  return (
    <Image
      src="/icons/feesIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="feesIcon"
    />
  );
};
const RegisterIcon = () => {
  return (
    <Image
      src="/icons/registrationIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="registrationIcon"
    />
  );
};
const FullmockIcon = () => {
  return (
    <Image
      src="/icons/eligibilityIcon.png"
      className=""
      width={24}
      height={24}
      alt="eligibilityIcon"
    />
  );
};
const ListeningIcon = () => {
  return (
    <Image
      src="/icons/listeningIcon1.png"
      className=""
      width={24}
      height={24}
      alt="listeningIcon1"
    />
  );
};
const WritingIcon = () => {
  return (
    <Image
      src="/icons/WritingIcon1.png"
      className=""
      width={24}
      height={24}
      alt="WritingIcon1"
    />
  );
};
const ReadingIcon = () => {
  return (
    <Image
      src="/icons/readingIcon1.png"
      className=""
      width={24}
      height={24}
      alt="readingIcon1"
    />
  );
};
const SpeakingIcon = () => {
  return (
    <Image
      src="/icons/speakingIcon1.png"
      className=""
      width={24}
      height={24}
      alt="speakingIcon1"
    />
  );
};
const AdmissionIcon = () => {
  return (
    <Image
      src="/icons/admissionIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="admissionIcon"
    />
  );
};
const VisaIcon = () => {
  return (
    <Image
      src="/icons/visaIcon1.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="visaIcon1"
    />
  );
};
const AccomodationIcon = () => {
  return (
    <Image
      src="/icons/accomondationIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="accomondationIcon"
    />
  );
};
const LanguageIcon = () => {
  return (
    <Image
      src="/icons/languageIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="languageIcon"
    />
  );
};
const FinanceIcon = () => {
  return (
    <Image
      src="/icons/financeIcon1.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="financeIcon1"
    />
  );
};
const DocsIcon = () => {
  return (
    <Image
      src="/icons/documentIcon.png"
      className="image-rendering"
      width={24}
      height={24}
      alt="documentIcon"
    />
  );
};
const BlogIcon = () => {
  return (
    <Image
      src="/icons/blogIcon.png"
      className=""
      width={24}
      height={24}
      alt="blogIcon"
    />
  );
};
const RedhatIcon = ({ examname }) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24.0714"
        cy="24.5099"
        r="23.6355"
        fill={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        fillOpacity="0.1"
      />
      <path
        d="M22.0678 14.778L15.8814 18.8166C13.8981 20.1114 13.8981 23.0093 15.8814 24.3041L22.0678 28.3427C23.1776 29.0723 25.0068 29.0723 26.1166 28.3427L32.2721 24.3041C34.2452 23.0093 34.2452 20.1217 32.2721 18.8269L26.1166 14.7883C25.0068 14.0484 23.1776 14.0484 22.0678 14.778Z"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5255 25.6195L17.5153 30.4391C17.5153 31.7442 18.5223 33.1418 19.7555 33.5528L23.0336 34.6421C23.5988 34.8271 24.534 34.8271 25.1095 34.6421L28.3876 33.5528C29.6208 33.1418 30.6278 31.7442 30.6278 30.4391V25.6709"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.7313 27.5925V21.4268"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const RedbookIcon = ({ examname }) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24.3987"
        cy="24.5098"
        r="23.6355"
        fill={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        fillOpacity="0.1"
      />
      <path
        d="M34.6751 29.3806V16.9771C34.6751 15.7439 33.668 14.8293 32.4451 14.9321H32.3834C30.2254 15.1171 26.9473 16.2166 25.1181 17.3676L24.9434 17.4806C24.6454 17.6656 24.1521 17.6656 23.8541 17.4806L23.5972 17.3265C21.768 16.1858 18.5001 15.0965 16.3421 14.9218C15.1192 14.819 14.1224 15.7439 14.1224 16.9668V29.3806C14.1224 30.3671 14.924 31.292 15.9105 31.4153L16.2085 31.4564C18.4385 31.7544 21.8811 32.8848 23.8541 33.9638L23.8952 33.9844C24.1727 34.1385 24.6146 34.1385 24.8817 33.9844C26.8548 32.8951 30.3076 31.7544 32.5479 31.4564L32.887 31.4153C33.8735 31.292 34.6751 30.3671 34.6751 29.3806Z"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.3987 17.8197V33.2342"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0313 20.9026H17.7191"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.802 23.9855H17.7191"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const RedvisaIcon = ({ examname }) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="23.6956"
        cy="24.5098"
        r="23.6355"
        fill={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        fillOpacity="0.1"
      />
      <path
        d="M13.491 16.9052C14.3131 13.3496 19.6671 13.3496 20.4789 16.9052C20.9619 18.9913 19.6362 20.7588 18.4853 21.8584C17.6426 22.6599 16.317 22.6496 15.4743 21.8584C14.3337 20.7588 13.008 18.9913 13.491 16.9052Z"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
      />
      <path
        d="M26.8502 29.2367C27.6723 25.6811 33.0571 25.6811 33.8792 29.2367C34.3622 31.3228 33.0365 33.0903 31.8753 34.1899C31.0327 34.9914 29.6967 34.9812 28.8541 34.1899C27.6929 33.0903 26.3672 31.3228 26.8502 29.2367Z"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
      />
      <path
        d="M23.6952 17.3162H26.4493C28.3504 17.3162 29.2342 19.6695 27.8058 20.9232L19.595 28.1064C18.1666 29.3498 19.0503 31.7031 20.9412 31.7031H23.6952"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.54145"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0016 17.83H17.0135"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="2.05526"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.3607 30.1616H30.3726"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="2.05526"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const RedmoneyIcon = ({ examname }) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24.0714"
        cy="24.5099"
        r="23.6355"
        fill={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        fillOpacity="0.1"
      />
      <path
        d="M20.0101 24.2553C20.0101 25.0156 20.6109 25.6376 21.3418 25.6376H22.8437C23.4845 25.6376 24.0051 25.0945 24.0051 24.433C24.0051 23.7123 23.6847 23.4556 23.2141 23.2878L20.8111 22.4584C20.3305 22.2906 20.0101 22.0339 20.0101 21.3132C20.0101 20.6517 20.5308 20.1086 21.1716 20.1086H22.6735C23.4144 20.1185 24.0151 20.7306 24.0151 21.4909"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0123 25.687V26.4176"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0123 19.3287V20.0988"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0026 30.7518C26.4208 30.7518 30.0025 27.22 30.0025 22.8632C30.0025 18.5065 26.4208 14.9747 22.0026 14.9747C17.5843 14.9747 14.0026 18.5065 14.0026 22.8632C14.0026 27.22 17.5843 30.7518 22.0026 30.7518Z"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.9961 32.6276C25.8972 33.8815 27.3691 34.701 29.0512 34.701C31.7846 34.701 34.0073 32.5092 34.0073 29.8138C34.0073 28.1749 33.1863 26.7235 31.9348 25.835"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const RedaccomodationIcon = ({ examname }) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="24.3987"
        cy="24.5098"
        r="23.6355"
        fill={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        fillOpacity="0.1"
      />
      <path
        d="M21.0313 14.8435L15.6346 19.0488C14.7335 19.7496 14.0026 21.2415 14.0026 22.3729V29.7922C14.0026 32.1151 15.8949 34.0174 18.2178 34.0174H29.8123C32.1352 34.0174 34.0276 32.1151 34.0276 29.8022V22.5131C34.0276 21.3016 33.2166 19.7496 32.2253 19.0588L26.0376 14.7234C24.6358 13.7421 22.383 13.7922 21.0313 14.8435Z"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.015 30.0125V27.0087"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const ReddocsIcon = ({ examname }) => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="23.6956"
        cy="24.5098"
        r="23.6355"
        fill={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        fillOpacity="0.1"
      />
      <path
        d="M35.0276 23.0125V28.0188C35.0276 33.025 33.0251 35.0275 28.0188 35.0275H22.0113C17.0051 35.0275 15.0026 33.025 15.0026 28.0188V22.0113C15.0026 17.005 17.0051 15.0025 22.0113 15.0025H27.0176"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.0276 23.0125H31.0226C28.0188 23.0125 27.0176 22.0113 27.0176 19.0075V15.0025L35.0276 23.0125Z"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0087 26.0162H26.0162"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0087 30.0212H24.0137"
        stroke={
          examname === "pte"
            ? "#027FA2"
            : examname === "ielts"
            ? "#FF2D46"
            : "#006ac9]"
        }
        strokeWidth="1.37671"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const StarIcon = () => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="21.8947"
        height="20.1962"
        transform="translate(0 1)"
        fill="white"
      />
      <path
        d="M10.9475 1.75708L14.0768 7.90527L21.0738 8.90173L16.0106 13.6848L17.211 20.4386L10.9535 17.2466L4.68876 20.4364L5.88913 13.6825L0.821167 8.8973L7.81812 7.90084L10.9475 1.75708Z"
        fill="#374151"
        stroke="#374151"
        strokeWidth="1.64211"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const UserIcon = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.14 21.7458C17.26 22.0073 16.22 22.128 15 22.128H8.99998C7.77998 22.128 6.73999 22.0073 5.85999 21.7458C6.07999 19.1306 8.74998 17.0686 12 17.0686C15.25 17.0686 17.92 19.1306 18.14 21.7458Z"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 2.01172H9C4 2.01172 2 4.02339 2 9.05255V15.0876C2 18.8896 3.14 20.9717 5.86 21.7462C6.08 19.131 8.75 17.069 12 17.069C15.25 17.069 17.92 19.131 18.14 21.7462C20.86 20.9717 22 18.8896 22 15.0876V9.05255C22 4.02339 20 2.01172 15 2.01172ZM12 14.2527C10.02 14.2527 8.42 12.6333 8.42 10.6418C8.42 8.65024 10.02 7.04088 12 7.04088C13.98 7.04088 15.58 8.65024 15.58 10.6418C15.58 12.6333 13.98 14.2527 12 14.2527Z"
        fill="#374151"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.0026C14.4011 15.0026 16.33 13.0406 16.33 10.6417C16.33 8.24003 14.3984 6.29077 12 6.29077C9.60172 6.29077 7.67004 8.24003 7.67004 10.6417C7.67004 13.0406 9.59902 15.0026 12 15.0026Z"
        stroke="#374151"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const LocationIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.0507 10.2618C10.2712 10.2618 11.2607 9.27235 11.2607 8.0518C11.2607 6.83125 10.2712 5.8418 9.0507 5.8418C7.83015 5.8418 6.8407 6.83125 6.8407 8.0518C6.8407 9.27235 7.83015 10.2618 9.0507 10.2618Z"
        stroke="#24292D"
      />
      <path
        d="M3.11482 6.76261C4.51024 0.628446 13.5982 0.635529 14.9865 6.7697C15.8011 10.368 13.5627 13.4139 11.6007 15.298C10.1769 16.6722 7.92441 16.6722 6.49357 15.298C4.53857 13.4139 2.30024 10.3609 3.11482 6.76261Z"
        stroke="#24292D"
      />
    </svg>
  );
};
const PhoneIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.562 12.9837C15.562 13.2387 15.5054 13.5008 15.385 13.7558C15.2645 14.0108 15.1087 14.2516 14.9033 14.4783C14.5562 14.8608 14.1737 15.137 13.7416 15.3141C13.3166 15.4912 12.8562 15.5833 12.3604 15.5833C11.6379 15.5833 10.8658 15.4133 10.0512 15.0662C9.23663 14.7191 8.42204 14.2516 7.61454 13.6637C6.79996 13.0687 6.02788 12.41 5.29121 11.6804C4.56163 10.9437 3.90288 10.1716 3.31496 9.36413C2.73413 8.55663 2.26663 7.74913 1.92663 6.94871C1.58663 6.14121 1.41663 5.36913 1.41663 4.63246C1.41663 4.15079 1.50163 3.69038 1.67163 3.26538C1.84163 2.83329 2.11079 2.43663 2.48621 2.08246C2.93954 1.63621 3.43538 1.41663 3.95954 1.41663C4.15788 1.41663 4.35621 1.45913 4.53329 1.54413C4.71746 1.62913 4.88038 1.75663 5.00788 1.94079L6.65121 4.25704C6.77871 4.43413 6.87079 4.59704 6.93454 4.75288C6.99829 4.90163 7.03371 5.05038 7.03371 5.18496C7.03371 5.35496 6.98413 5.52496 6.88496 5.68788C6.79288 5.85079 6.65829 6.02079 6.48829 6.19079L5.94996 6.75038C5.87204 6.82829 5.83663 6.92038 5.83663 7.03371C5.83663 7.09038 5.84371 7.13996 5.85788 7.19663C5.87913 7.25329 5.90038 7.29579 5.91454 7.33829C6.04204 7.57204 6.26163 7.87663 6.57329 8.24496C6.89204 8.61329 7.23204 8.98871 7.60038 9.36413C7.98288 9.73954 8.35121 10.0866 8.72663 10.4054C9.09496 10.717 9.39954 10.9295 9.64038 11.057C9.67579 11.0712 9.71829 11.0925 9.76788 11.1137C9.82454 11.135 9.88121 11.142 9.94496 11.142C10.0654 11.142 10.1575 11.0995 10.2354 11.0216L10.7737 10.4904C10.9508 10.3133 11.1208 10.1787 11.2837 10.0937C11.4466 9.99454 11.6095 9.94496 11.7866 9.94496C11.9212 9.94496 12.0629 9.97329 12.2187 10.037C12.3745 10.1008 12.5375 10.1929 12.7145 10.3133L15.0591 11.9779C15.2433 12.1054 15.3708 12.2541 15.4487 12.4312C15.5195 12.6083 15.562 12.7854 15.562 12.9837Z"
        stroke="#292D32"
        strokeMiterlimit="10"
      />
    </svg>
  );
};
const MailIcon = () => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0416 14.5208H4.95829C2.83329 14.5208 1.41663 13.4583 1.41663 10.9791V6.02079C1.41663 3.54163 2.83329 2.47913 4.95829 2.47913H12.0416C14.1666 2.47913 15.5833 3.54163 15.5833 6.02079V10.9791C15.5833 13.4583 14.1666 14.5208 12.0416 14.5208Z"
        stroke="#292D32"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0417 6.375L9.82462 8.14583C9.09504 8.72667 7.89795 8.72667 7.16837 8.14583L4.95837 6.375"
        stroke="#292D32"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const GetDirectionIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7328 8.36327L9.63255 0.263014C9.28154 -0.0879969 8.71002 -0.0879969 8.36351 0.263014L0.263258 8.36327C-0.0877527 8.71428 -0.0877527 9.28579 0.263258 9.6368L8.36351 17.7326V17.7371C8.71452 18.0881 9.28604 18.0881 9.63705 17.7371L17.7373 9.6368C18.0883 9.28129 18.0883 8.71428 17.7328 8.36327ZM10.7981 11.2479V8.99778H7.19797V11.6979H5.39792V8.09776C5.39792 7.59824 5.79843 7.19773 6.29795 7.19773H10.7981V4.94766L13.9482 8.09776L10.7981 11.2479Z"
        fill="white"
      />
    </svg>
  );
};
const RedphoneIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.39001 1.10742C1.06775 1.19531 0.833374 1.45898 0.833374 1.78125C0.833374 9.31055 6.92712 15.375 14.4271 15.375C14.7787 15.375 15.0424 15.1699 15.1302 14.8477L15.8334 11.8008C15.892 11.4785 15.7455 11.127 15.4232 10.9805L12.142 9.57422C11.849 9.45703 11.5267 9.54492 11.3217 9.7793L9.85681 11.5664C7.57166 10.4824 5.72595 8.60742 4.67126 6.38086L6.45837 4.91602C6.69275 4.71094 6.78064 4.38867 6.66345 4.0957L5.2572 0.814453C5.11072 0.492188 4.75916 0.316406 4.43689 0.404297L1.39001 1.10742Z"
        fill="#FF2D46"
      />
    </svg>
  );
};
const RedshareIcon = () => {
  return (
    <svg
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9111 8.67561C6.00173 8.67561 1.49247 12.9405 1.37469 17.8175C1.3688 18.0521 1.30401 18.0619 1.22974 17.8391C0.998098 17.1451 0.804077 15.9699 0.804077 14.7498C0.804077 8.78031 5.44715 3.88629 10.8935 3.51461C11.1267 3.4989 11.3162 3.29605 11.3162 3.06211V0.385416C11.3162 0.0242047 11.5599 -0.106342 11.8606 0.0938951L20.3039 5.72278C20.6043 5.92301 20.6043 6.24823 20.3039 6.4488L11.8606 12.0777C11.5599 12.2779 11.3175 12.1474 11.3195 11.7862C11.3295 9.90441 11.3345 8.96354 11.3345 8.96354C11.3345 8.80485 11.1447 8.67561 10.9111 8.67561Z"
        fill="#FF2D46"
      />
    </svg>
  );
};
const RedCalenderIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3 1.8H14.4V0.9C14.4 0.36 14.04 0 13.5 0C12.96 0 12.6 0.36 12.6 0.9V1.8H5.4V0.9C5.4 0.36 5.04 0 4.5 0C3.96 0 3.6 0.36 3.6 0.9V1.8H2.7C1.17 1.8 0 2.97 0 4.5V5.4H18V4.5C18 2.97 16.83 1.8 15.3 1.8ZM0 15.3C0 16.83 1.17 18 2.7 18H15.3C16.83 18 18 16.83 18 15.3V7.2H0V15.3ZM13.5 9C14.04 9 14.4 9.36 14.4 9.9C14.4 10.44 14.04 10.8 13.5 10.8C12.96 10.8 12.6 10.44 12.6 9.9C12.6 9.36 12.96 9 13.5 9ZM13.5 12.6C14.04 12.6 14.4 12.96 14.4 13.5C14.4 14.04 14.04 14.4 13.5 14.4C12.96 14.4 12.6 14.04 12.6 13.5C12.6 12.96 12.96 12.6 13.5 12.6ZM9 9C9.54 9 9.9 9.36 9.9 9.9C9.9 10.44 9.54 10.8 9 10.8C8.46 10.8 8.1 10.44 8.1 9.9C8.1 9.36 8.46 9 9 9ZM9 12.6C9.54 12.6 9.9 12.96 9.9 13.5C9.9 14.04 9.54 14.4 9 14.4C8.46 14.4 8.1 14.04 8.1 13.5C8.1 12.96 8.46 12.6 9 12.6ZM4.5 9C5.04 9 5.4 9.36 5.4 9.9C5.4 10.44 5.04 10.8 4.5 10.8C3.96 10.8 3.6 10.44 3.6 9.9C3.6 9.36 3.96 9 4.5 9ZM4.5 12.6C5.04 12.6 5.4 12.96 5.4 13.5C5.4 14.04 5.04 14.4 4.5 14.4C3.96 14.4 3.6 14.04 3.6 13.5C3.6 12.96 3.96 12.6 4.5 12.6Z"
        fill="#FF2D46"
      />
    </svg>
  );
};

const ChecklistIcon = () => {
  return (
    <Image src="/checkmarkGreen.png" width={21} height={21} alt="checkmark" />
  );
};
const AdvancetechList = () => {
  return (
    <Image
      src="/icons/advanceTechIcon.png"
      width={30}
      height={29}
      alt="AdvancetechList"
    />
  );
};
const PteAdvancetechList = () => {
  return (
    <Image
      src="/icons/pteadvanceTechIcon.png"
      width={30}
      height={29}
      alt="AdvancetechList"
    />
  );
};
export const AdvanceTechCal = () => {
  return (
    <Image
      src="/icons/advanceTechIcon1.png"
      width={25}
      height={30}
      alt="AdvancetechList"
    />
  );
};
export const PteadvanceCal = () => {
  return (
    <Image
      src="/icons/pteadvanceTechIcon1.png"
      width={25}
      height={30}
      alt="AdvancetechList"
    />
  );
};
const FreeIcon = () => {
  return (
    <svg
      className="animate-bounce"
      width="37"
      height="20"
      viewBox="0 0 37 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_7435_26426)">
        <rect
          x="0.169922"
          y="5.60938"
          width="35"
          height="14"
          rx="3"
          transform="rotate(-8.33288 0.169922 5.60938)"
          fill="#208A43"
        />
        <path
          d="M8.58873 15.1743C8.47032 15.1938 8.36516 15.1705 8.27325 15.1046C8.18791 15.0375 8.13605 14.9481 8.11767 14.8363L7.11384 8.7282C7.09546 8.61636 7.11651 8.51832 7.17698 8.43406C7.24294 8.34215 7.33184 8.287 7.44368 8.26862L10.9072 7.6994C11.019 7.68103 11.1204 7.70153 11.2112 7.76092C11.302 7.82031 11.3567 7.90592 11.375 8.01775C11.3923 8.12301 11.3675 8.2183 11.3004 8.30364C11.2334 8.38898 11.1439 8.44083 11.0321 8.45921L7.92378 8.97005L7.97001 8.88138L8.36733 11.2989L8.30015 11.1985L10.9545 10.7623C11.0664 10.7439 11.1683 10.7677 11.2602 10.8337C11.351 10.893 11.4056 10.9787 11.424 11.0905C11.4402 11.1892 11.4153 11.2845 11.3494 11.3764C11.2823 11.4617 11.1929 11.5136 11.081 11.5319L8.40691 11.9714L8.46139 11.8713L8.92682 14.7033C8.9452 14.8151 8.9214 14.917 8.85544 15.0089C8.78947 15.1008 8.70057 15.156 8.58873 15.1743ZM14.2175 14.2493C14.0925 14.2698 13.9775 14.2482 13.8724 14.1844C13.7739 14.1195 13.7155 14.0311 13.6971 13.9193L12.6933 7.81124C12.6749 7.6994 12.696 7.60136 12.7564 7.51711C12.8224 7.42519 12.9113 7.37004 13.0231 7.35166L15.7466 6.90407C16.115 6.84353 16.4612 6.87445 16.7854 6.99684C17.1084 7.11265 17.3798 7.30452 17.5995 7.57243C17.8247 7.83269 17.9686 8.1536 18.0313 8.53515C18.0768 8.81144 18.0668 9.07994 18.0016 9.34064C17.9352 9.59476 17.8246 9.82576 17.6696 10.0337C17.5135 10.235 17.3246 10.4011 17.1029 10.5321L16.8599 10.4099C17.0922 10.4258 17.3085 10.4882 17.5088 10.5972C17.7081 10.6996 17.8809 10.8468 18.0273 11.0389C18.1727 11.2245 18.2713 11.4549 18.3233 11.7301C18.3765 11.9713 18.4248 12.1627 18.4684 12.3042C18.5119 12.4457 18.5604 12.5559 18.6139 12.6349C18.6664 12.7074 18.7326 12.7607 18.8125 12.7949C18.9143 12.8389 18.9865 12.9081 19.029 13.0025C19.0781 13.0958 19.0774 13.1938 19.0267 13.2968C18.997 13.3625 18.9481 13.4144 18.88 13.4526C18.8109 13.4842 18.7396 13.5027 18.6662 13.508C18.5928 13.5133 18.527 13.5039 18.469 13.4796C18.354 13.4377 18.238 13.369 18.1209 13.2733C18.0028 13.1711 17.893 13.0169 17.7915 12.8106C17.6901 12.6044 17.6085 12.3137 17.5469 11.9388C17.5123 11.7283 17.4508 11.5593 17.3623 11.432C17.2738 11.3047 17.1666 11.2074 17.0407 11.1403C16.9148 11.0731 16.7801 11.0345 16.6365 11.0243C16.493 11.0141 16.3489 11.0209 16.2041 11.0447L14.0037 11.4063L14.0929 11.2092L14.5161 13.7847C14.5345 13.8965 14.5173 13.9973 14.4645 14.0871C14.4117 14.1768 14.3294 14.2309 14.2175 14.2493ZM13.8869 10.6959L16.3045 10.2985C16.4931 10.254 16.6599 10.1591 16.8049 10.0136C16.9565 9.86709 17.0676 9.67993 17.1382 9.45212C17.2144 9.21666 17.2303 8.96406 17.186 8.69435C17.1287 8.34569 16.9693 8.07462 16.7078 7.88114C16.4528 7.68657 16.1576 7.61685 15.8221 7.67199L13.4934 8.05471L13.5415 7.85425L14.0345 10.854L13.8869 10.6959ZM19.6915 6.25575L23.2044 5.67842C23.3162 5.66005 23.4175 5.68055 23.5084 5.73994C23.5992 5.79933 23.6538 5.88494 23.6722 5.99677C23.6906 6.10861 23.6662 6.20719 23.5992 6.29253C23.531 6.37128 23.4411 6.41985 23.3292 6.43823L20.1519 6.96042L20.2131 6.77807L20.6234 9.27458L20.5069 9.18226L23.2501 8.73142C23.3619 8.71305 23.4632 8.73355 23.5541 8.79294C23.6449 8.85233 23.6995 8.93794 23.7179 9.04977C23.7363 9.16161 23.7119 9.26019 23.6449 9.34553C23.5768 9.42428 23.4868 9.47285 23.3749 9.49123L20.6613 9.9372L20.7158 9.83704L21.1358 12.3928L21.0653 12.3334L24.2131 11.8161C24.3249 11.7977 24.4268 11.8215 24.5187 11.8875C24.6106 11.9534 24.6647 12.0358 24.6809 12.1344C24.6993 12.2463 24.6749 12.3449 24.6079 12.4302C24.5408 12.5155 24.4514 12.5674 24.3396 12.5858L20.8267 13.1631C20.7148 13.1815 20.613 13.1577 20.5211 13.0917C20.4357 13.0247 20.3839 12.9352 20.3655 12.8234L19.3616 6.71532C19.3433 6.60349 19.3643 6.50545 19.4248 6.42119C19.4908 6.32928 19.5797 6.27413 19.6915 6.25575ZM25.3191 5.33087L28.832 4.75355C28.9438 4.73517 29.0452 4.75567 29.136 4.81506C29.2268 4.87445 29.2814 4.96006 29.2998 5.0719C29.3182 5.18373 29.2939 5.28231 29.2268 5.36765C29.1587 5.44641 29.0687 5.49498 28.9569 5.51336L25.7795 6.03554L25.8407 5.8532L26.251 8.34971L26.1345 8.25738L28.8777 7.80655C28.9895 7.78817 29.0909 7.80867 29.1817 7.86806C29.2725 7.92745 29.3271 8.01306 29.3455 8.1249C29.3639 8.23673 29.3396 8.33531 29.2725 8.42065C29.2044 8.49941 29.1144 8.54798 29.0026 8.56636L26.289 9.01232L26.3435 8.91216L26.7635 11.4679L26.6929 11.4085L29.8407 10.8912C29.9525 10.8728 30.0544 10.8966 30.1463 10.9626C30.2382 11.0286 30.2923 11.1109 30.3085 11.2096C30.3269 11.3214 30.3026 11.42 30.2355 11.5053C30.1685 11.5907 30.079 11.6425 29.9672 11.6609L26.4543 12.2382C26.3425 12.2566 26.2406 12.2328 26.1487 12.1668C26.0633 12.0998 26.0115 12.0103 25.9931 11.8985L24.9893 5.79045C24.9709 5.67861 24.9919 5.58057 25.0524 5.49631C25.1184 5.4044 25.2073 5.34925 25.3191 5.33087Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_7435_26426">
          <rect
            x="0.169922"
            y="5.60938"
            width="35"
            height="14"
            rx="3"
            transform="rotate(-8.33288 0.169922 5.60938)"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
const BlogMobileIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09607 11H8.10505"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8984 11H16.3984"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.09607 7H8.10505"
        stroke="#292D32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.8984 7H16.3984"
        stroke="#292D32"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CoachingIcon = () => {
  return (
    <Image
      src="/icons/coachingIcon.png"
      width={24}
      height={24}
      alt="Coaching icon"
      className="image-rendering"
    />
  );
};
const BookieltsIcon = () => {
  return (
    <Image
      src="/icons/bookMyIeltsIcon.png"
      width={24}
      height={24}
      alt="bookMyIeltsIcon"
    />
  );
};
const BandCalculatorIcon = () => {
  return (
    <Image
      src="/icons/BandCalculatorIcon.png"
      width={24}
      height={24}
      alt="bookMyIeltsIcon"
    />
  );
};
const NewsICon = () => {
  return (
    <Image
      src="/icons/NewsICon.png"
      width={24}
      height={24}
      alt="bookMyIeltsIcon"
    />
  );
};

const MediaIcon = () => {
  return (
    <Image
      src="/icons/media.png"
      width={24}
      height={24}
      alt="bookMyIeltsIcon"
    />
  );
};

const CueCardsIcon = () => {
  return (
    <Image
      src="/icons/cue_cards.png"
      width={24}
      height={24}
      alt="bookMyIeltsIcon"
    />
  );
};

const SelfHelpKitIcon = () => {
  return (
      <Image src="/icons/self-help-kit-iconn.png" width={24} height={24} alt='bookMyIeltsIcon' />    
  )
}

const MediaICon = () => {
  return (
    <Image
      src="/icons/MediaIcon.png"
      width={24}
      height={24}
      alt="bookMyIeltsIcon"
    />
  );
};

const IeltsIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/ieltsLogo.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const PteIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/pteLogo.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const TofelIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/toeflLogo.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const DuolingoIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/duolingoFlag.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const SATIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/satLogo.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="sat icon"
    />
  );
};
const ACTIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/ActLogo.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};

const GreIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/greLogo.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const GmatIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/gmatLogo.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const GermanIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/GermanIcon.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const SpanIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/SpanIcon.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const FranchIcon = () => {
  return (
    <Image
      src="/test-preparation/testprep-flags/franchIcon.png"
      width={40}
      height={40}
      className=" w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const ChecklistIcon1 = () => {
  return (
    <Image
      src="/consultancy-module/icons/cityCheckLIstIcon1.png"
      width={28}
      height={28}
      alt="cityCheckLIstIcon"
    />
  );
};
const ChecklistIcon2 = () => {
  return (
    <Image
      src="/consultancy-module/icons/cityCheckLIstIcon2.png"
      width={28}
      height={28}
      alt="cityCheckLIstIcon"
    />
  );
};
const UkFlag = () => {
  return (
    <Image
      src="/Header/flag/head-uk.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="uk icon"
    />
  );
};
const CaFlag = () => {
  return (
    <Image
      src="/Header/flag/head-ca.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const IrFlag = () => {
  return (
    <Image
      src="/Header/flag/ir_menu.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const UsFlag = () => {
  return (
    <Image
      src="/Header/flag/head-us.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const AuFlag = () => {
  return (
    <Image
      src="/Header/flag/head-au.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const HuFlag = () => {
  return (
    <Image
      src="/Header/flag/head-hu.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const MtFlag = () => {
  return (
    <Image
      src="/Header/flag/head-mt.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const ItFlag = () => {
  return (
    <Image
      src="/Header/flag/head-it.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const InFlag = () => {
  return (
    <Image
      src="/Header/flag/head-in.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const DeFlag = () => {
  return (
    <Image
      src="/Header/flag/head-de.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const NzFlag = () => {
  return (
    <Image
      src="/Header/flag/head-nz.png"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const OfferIcon = () => {
  return (
    <Image
      src="/icons/OfferIcon"
      width={26}
      height={26}
      className="border-1 border-[#066ac980] rounded-lg w-7 sm:w-10"
      alt="Ielts icon"
    />
  );
};
const CopyIcon = () => {
  return (
    <Image
      priority
      src="/blog/copyLink.png"
      width={34}
      height={34}
      className="w-full"
      alt="instagramIcon"
    />
  );
};

export {
  EligibilityIcon,
  SyllabusIcon,
  CalenderIcon,
  ResultIcon,
  ExampatternIcon,
  FeesIcon,
  RegisterIcon,
  FullmockIcon,
  ListeningIcon,
  WritingIcon,
  ReadingIcon,
  SpeakingIcon,
  AdmissionIcon,
  VisaIcon,
  AccomodationIcon,
  LanguageIcon,
  FinanceIcon,
  DocsIcon,
  BlogIcon,
  RedhatIcon,
  RedbookIcon,
  RedvisaIcon,
  RedmoneyIcon,
  RedaccomodationIcon,
  ReddocsIcon,
  StarIcon,
  UserIcon,
  LocationIcon,
  PhoneIcon,
  MailIcon,
  GetDirectionIcon,
  RedphoneIcon,
  RedshareIcon,
  RedCalenderIcon,
  ChecklistIcon,
  AdvancetechList,
  FreeIcon,
  BlogMobileIcon,
  CoachingIcon,
  BookieltsIcon,
  BandScoreIcon,
  PteAdvancetechList,
  BandCalculatorIcon,
  NewsICon,
  IeltsIcon,
  PteIcon,
  TofelIcon,
  DuolingoIcon,
  SATIcon,
  ACTIcon,
  GreIcon,
  GmatIcon,
  GermanIcon,
  SpanIcon,
  FranchIcon,
  ChecklistIcon1,
  ChecklistIcon2,
  UkFlag,
  CaFlag,
  IrFlag,
  UsFlag,
  AuFlag,
  HuFlag,
  MtFlag,
  ItFlag,
  InFlag,
  DeFlag,
  NzFlag,
  MediaICon,
  OfferIcon,
  CopyIcon,
  CueCardsIcon,
  MediaIcon,
  SelfHelpKitIcon,
};
