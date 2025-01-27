'use client'
import Cookies from 'js-cookie';
import { getUserData } from "@/lib/website";
import { setAuthData } from "./slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const CheckAuth = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getUserData();
                if (responseData?.status == 200) {
                    const userData = {
                        name: responseData?.data?.name,
                        lastName: responseData?.data?.last_name,
                        countryCode: responseData?.data?.country_code,
                        countryName: responseData?.data?.country,
                        phoneNumber: responseData?.data?.phone,
                        email: responseData?.data?.email,
                    };
                    dispatch(setAuthData(userData));
                }else{
                    Cookies.remove('_token', { path: '/', domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN });
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        const token = Cookies.get('_token');
        if (token) {
            fetchData(token);
        }
    }, [dispatch]);

    return null;
}

export default CheckAuth;