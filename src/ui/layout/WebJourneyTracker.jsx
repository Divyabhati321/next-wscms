// components/WebJourneyTracker.js
'use client';
import react, { useEffect } from 'react';
import { getCookie, setCookie, getCookieSize } from '@/lib/cookies';

const WebJourneyTracker = () => {
    useEffect(() => {
        const updateWebJourney = () => {
            const currentUrl = window.location.href;
            const baseUrl = window.location.origin;
            let path = currentUrl.replace(baseUrl, '');

            if (path === '/') {
                path = 'home-page';
            }

            const existingCookies = document.cookie.split(';');
            const totalSize = existingCookies.reduce((accumulator, currentValue) => {
                const cookieName = currentValue.split('=')[0].trim();
                return accumulator + getCookieSize(cookieName);
            }, 0);

            const maxCookieSize = 4096;
            const webJourneyCookieName = "web_journey";
            const webJourney = getCookie(webJourneyCookieName) ? JSON.parse(decodeURIComponent(getCookie(webJourneyCookieName))) : [];
           

            const newPathSize = encodeURIComponent(webJourneyCookieName).length + encodeURIComponent(JSON.stringify(path)).length;

            if (totalSize + newPathSize <= maxCookieSize) {
                if (webJourney.length === 0 || webJourney[webJourney.length - 1] !== path) {
                    if (webJourney.length >= 15) {
                        webJourney.shift();
                    }
                    webJourney.push(path);
                    const domain = process.env.NEXT_PUBLIC_COOKIE_DOMAIN;
                    setCookie(webJourneyCookieName, JSON.stringify(webJourney), 365, domain);
                }
            }
        };

        updateWebJourney();
    }, []);
    return null;
};

export default WebJourneyTracker;
