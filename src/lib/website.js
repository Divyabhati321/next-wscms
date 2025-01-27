"use server";
import axiosInstanceWebsite from "@/lib/axiosInterceptorInstanceWebsite";
import { cookies, headers as nextHeaders } from "next/headers";

const getExamName = async () => {
  const headersList = nextHeaders();
  const header_url = headersList.get("x-url");
  const pathArray = header_url ? header_url.split("/") : null;
  const examname = pathArray && pathArray[1];
  return examname;
}

const getCookie = async () => {
  const cookieStore = cookies();
  return cookieStore.getAll();  
};

export const getUserInfo = async () => {
  if(process.env.NEXT_PUBLIC_APP_MODE !== 'local'){
    await getUserLocation()
  }
};

const fetchData = async (api, method, payload, allowCache = true) => {
  let cookies = await getCookie();  
  
  let examname = cookies.find(cookie => cookie.name === 'examname')?.value || null;  
  let userCityName = cookies.find(cookie => cookie.name === 'userCityName')?.value || null;
  let userCountry = cookies.find(cookie => cookie.name === 'userCountry')?.value || null;
  let userIp = cookies.find(cookie => cookie.name === 'userIp')?.value || null;
  let token = cookies.find(cookie => cookie.name === '_token')?.value || null;
  let device = cookies.find(cookie => cookie.name === 'device')?.value || null;

  if(examname != 'ielts' || examname != 'pte' || examname != 'toefl' || examname != 'duolingo'){
    examname = await getExamName();
  }


  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const updatedPayload = { ...payload, examname, userCityName, userCountry, userIp, device};

  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + api, {
    cache: allowCache ? process.env.NEXT_PUBLIC_APP_MODE === 'local' ? "no-store" : "force-cache" : "no-store",
    method: "POST",
    headers: headers,    
    body: JSON.stringify(updatedPayload),
  });
  const data = await res.json();
  return data;
};

export const getFooterData = async () => {
  try {
    return await fetchData("footer", "POST", {});
  } catch (error) {
    console.error("Error fetching Footer data:", error.message);
  }
};

export const getCountryArray = async () => {
  try {
    const data = await fetchData("country-array", "POST", {});
    return data.result.data;
  } catch (error) {
    console.error("Error fetching Country data:", error.message);
  }
};

export const BookFreeSession = async (formData) => {
  try {
    const response = await axiosInstanceWebsite.post("popup", formData);
    if (response.status !== 200) {
      return false;
    }
    return await response.data;
  } catch (error) {
    console.error("Something Went Wrong:", error.message);
  }
};

export const getMobileVerification = async (formData) => {
  try {
    return await fetchData(
      "mobile-verification",
      "POST",
      formToObject(formData),
      false
    );
  } catch (error) {
    console.error("Mobile Verification Api Failed:", error.message);
  }
};

export const getPinVerification = async (formData) => {
  try {
    return await fetchData(
      "pin-verification",
      "POST",
      formToObject(formData),
      false
    );
  } catch (error) {
    console.error("Pin Verification Api Failed:", error.message);
  }
};

export const sentOtp = async (formData) => {
  try {
    return await fetchData("otp-sent", "POST", formToObject(formData), false);
  } catch (error) {
    console.error("OTP Sent Api Failed:", error.message);
  }
};

export const getOtpVerification = async (formData) => {
  try {
    return await fetchData(
      "otp-verification",
      "POST",
      formToObject(formData),
      false
    );
  } catch (error) {
    console.error("OTP Verification Api Failed:", error.message);
  }
};

export const PinGenerate = async (formData) => {
  try {
    return await fetchData(
      "pin-generate",
      "POST",
      formToObject(formData),
      false
    );
  } catch (error) {
    console.error("Pin Generate Api Failed:", error.message);
  }
};

export const getWebsiteSetting = async () => {
  try {
    return await fetchData("website-setting", "POST", {});
  } catch (error) {
    console.error("Fetching Website Setting Data Failed:", error.message);
  }
};

export const getHeaderData = async () => {
  try {
    return await fetchData("header-data", "POST", {});
  } catch (error) {
    console.error("Fetching Header Data Failed:", error.message);
  }
};

export const getSideBarData = async () => {
  try {
    return await fetchData("side-bar", "POST", {});
  } catch (error) {
    console.error("Fetching Side Bar Failed:", error.message);
  }
};

export const getData = async (api, payload) => {
  try {
    const response = await fetchData(api, "POST", payload);
    return response;
  } catch (error) {
    console.error(
      api,
      " Fetching Failed:",
      error.message,
      ", With Payload ",
      payload
    );
  }
};

// Get User Data for Redux
export const getUserData = async () => {
  try {
    return await fetchData("get-user", "POST", false);
  } catch (error) {
    console.error("User Fetching Failed:", error.message);
  }
};

import { headers } from "next/headers";
export const getDevice = () => {
  const headersList = headers();
  return headersList.get("device");
};

export const blogPage = async (payload) => {
  try {
    let data = await fetchData("blog", "POST", payload);
    return data;
  } catch (error) {
    console.error("Error in Blog Page Api:", error.message);
  }
};

export const getRecentBlogs = async (payload, page) => {
  try {
    let data = await fetchData(`recent-blogs?page=${page}`, "POST", payload, false);
    return data;
  } catch (error) {
    console.error("Error in Recent Blog Api:", error.message);
  }
};

export const newsletter = async (formData) => {
  try {
    const response = await axiosInstanceWebsite.post("news-letter", formData);

    if (!response.status) {
      return false;
    }
    return await response.data;
  } catch (error) {
    console.error("NewsLetter Api Failed", error.message);
  }
};

export const blogComment = async (formData) => {
  try {
    const response = await axiosInstanceWebsite.post("blog-comment", formData);

    if (!response.status) {
      return false;
    }
    return await response.data;
  } catch (error) {
    console.error("Blog Comment Api Failed", error.message);
  }
};

export const blogDetailPage = async (params) => {
  try {
    let data = await fetchData("blog-details-page", "POST", params);
    return data;
  } catch (error) {
    console.error("Error in Recent Blog Api:", error.message);
  }
};

export const whatsappInquiry = async (formData) => {
  try {
    const response = await axiosInstanceWebsite.post(
      "whatsapp-inquiry",
      formData
    );

    if (!response.status) {
      return false;
    }
    return await response.data;
  } catch (error) {
    console.error("Whatsapp Inquiry Api Failed", error.message);
  }
};

const getUserLocation = async () => {
  
  const headersList = nextHeaders();
  let ipAddress = headersList.get("x-remote-ip");
  if(ipAddress.indexOf(",") !== -1) ipAddress = ipAddress.split(",")[0]  
  
  const ipInfoTokens = ["425cd205f57f72", "dcfab8ac14b9e7"];
  const randomToken = ipInfoTokens[Math.floor(Math.random() * ipInfoTokens.length)];

  const GEOCODING_API_URL = "https://ipinfo.io/"+ipAddress+"?token=425cd205f57f72";

  let city = null;
  let country = null;
  let ip = null;

  try {
    const geoApiRes = await fetch(GEOCODING_API_URL);
    if (geoApiRes.ok) {
      const data = await geoApiRes.json();
      
      city = data.city || null;
      country = data.country || null;
      ip = data.ip || null;

      if (city && country && ip) {        
        let countryInfo = await fetchData("get-country-info", "POST", {'country': country}, false)
        let countryName = countryInfo?.countryInfo?.name;
        let countryCode = countryInfo?.countryInfo?.country_code;
        countryName ? createCookie('userCountryName', countryName.replace('%20','')) : '';
        createCookie('userCountryCode', countryCode);
        createCookie('userCityName', city);
        createCookie('userCountry', country);
        createCookie('userIp', ip);
      }
    }
  } catch (error) {
    console.error("Error fetching geo info:", error);
  }

  return { city, country, ip };
};

const createCookie = (name, value) => {
  const expirationTime = 30 * 24 * 60 * 60;
  cookies().set({
    name: name,
    value: value,
    domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
    path: "/",
    maxAge: expirationTime,
  });
}

const formToObject = (formData) => {
  const formDataObj = {};
  formData.forEach((value, key) => {
    formDataObj[key] = value;
  });
  return formDataObj
};
