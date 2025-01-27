"use server";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInterceptorInstanceWebsite = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Request interceptor

axiosInterceptorInstanceWebsite.interceptors.request.use(
  async (config) => {
    try {
      const cookieData = await getCookieData();
      const tokenCookie = cookieData.find(cookie => cookie.name === '_token');
      const accessToken = tokenCookie ? tokenCookie.value : null;
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      // Handle any errors
      console.error("Error fetching cookie data:", error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


function getCookieData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const cookieStore = cookies(); // Assuming cookies() is a valid function
   
        resolve(cookieStore.getAll());
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}


// Response interceptor
axiosInterceptorInstanceWebsite.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInterceptorInstanceWebsite;
