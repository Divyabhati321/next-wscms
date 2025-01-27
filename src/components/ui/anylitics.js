// analytics.js
"use client"
import { useEffect } from 'react';

export function initializeFacebook() {
  !function(f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '725808585635289');
  fbq('track', 'PageView');
}

export function initializeGoogleAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-7CJTNFP15G');
  gtag('config', 'AW-11234199219');

  (function(w,d,s,l,i) {
    w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-5ZWHTDS');
}

export function initializeGoogleAds() {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'AW-11234199219');
}

function Analytics() {
  useEffect(() => {
    function handleMouseMove() {
      initializeFacebook();
      initializeGoogleAnalytics();
      initializeGoogleAds();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleMouseMove);
    }

    // Google Analytics initialization code
    if(process.env.NEXT_PUBLIC_APP_MODE == 'production') {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchstart', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('touchstart', handleMouseMove);
    };
  }, []);

  return null;
}

export default Analytics;
