'use client'
import { setBookState } from '@/redux/slices/bookSessionSlice';
import { setLoginState } from '@/redux/slices/loginPopupSlice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { navigate } from "@/lib/navigate";

const BlogDescription = ({ descriptionHtml }) => {    
    const dispatch = useDispatch();

    const isAuthLoaded = useSelector(state => state.auth?.isLoaded);

    const handleLoginClick = () => {
        dispatch(setLoginState({ redirectUrl: '', status: 'true' }));
    };

    const handleBookSession = () => {
        dispatch(setBookState({ status: 'true' }));
    };

    useEffect(() => {
        const loginButtons = document.querySelectorAll('.handleLoginClick, [onclick*="showPopup(\'login\')"]');

        loginButtons.forEach(button => {
            button.addEventListener('click', handleLoginClick);
        });

        return () => {
            loginButtons.forEach(button => {
                button.removeEventListener('click', handleLoginClick);
            });
        };
    }, [descriptionHtml]);

    useEffect(() => {
        const bookSessionButtons = document.querySelectorAll('.handleBookSession, [onclick*="showPopup(\'addLecture\')"], [onclick*="showPopup(\'addLectureMobile\')"]');

        bookSessionButtons.forEach(button => {
            button.addEventListener('click', handleBookSession);
        });

        return () => {
            bookSessionButtons.forEach(button => {
                button.removeEventListener('click', handleBookSession);
            });
        };
    }, [descriptionHtml]);

    const downloadPdf = () => {
        const element = document.querySelector('.handleDownloadPdf');
        if (element) {
            const url = element.getAttribute('data-url');
            if (url) {
                if (!isAuthLoaded) {
                    dispatch(setLoginState({ redirectUrl: url, status: 'true' }));
                } else {
                    navigate(url);
                }            
            }
        }
    }

    useEffect(() => {
        const observerCallback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.setAttribute('src', img.getAttribute('data-src'));
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          });
        };
      
        const observer = new IntersectionObserver(observerCallback);
      
        const observeImages = () => {
          const images = document.querySelectorAll('img[data-src]');
          if (images.length > 0) {
            images.forEach((img) => observer.observe(img));
          }
        };
      
        observeImages();
      
        const handleScroll = () => {
          observeImages(); 
        };
      
        window.addEventListener('scroll', handleScroll);
      
        return () => {
          observer.disconnect();
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      

    useEffect(() => {
        const button = document.querySelector('.handleDownloadPdf');
    
        if (button) {
            button.removeEventListener('click', downloadPdf);
            button.addEventListener('click', downloadPdf);
        }
    
        return () => {
            if (button) {
                button.removeEventListener('click', downloadPdf);
            }
        };
    }, [descriptionHtml, isAuthLoaded]);
  
    return (
        <div dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
    )
}

export default BlogDescription;

