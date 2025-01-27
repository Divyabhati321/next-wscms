'use client'
import { useEffect, useState } from 'react';

const ZendeskComponent = () => {
    const [mouseMoved, setMouseMoved] = useState(false);
    useEffect(() => {
        if (!mouseMoved) {
            const handleMouseMove = () => {
                console.log('zendesk mouse move');
                const script = document.createElement('script');
                script.id = 'ze-snippet';
                script.src = `${process.env.NEXT_PUBLIC_WEBSITE_URL}frontend/assets-desktop/js/snippet.js?key=70bd0148-c316-48c9-be26-23e4a3a7ed12?v=00195`;
                script.onload = () => { setTimeout(()=>{ zE('messenger', 'open') },5000)}
                document.body.appendChild(script);
                setMouseMoved(true);
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('touchstart', handleMouseMove);
            };

            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('touchstart', handleMouseMove);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('touchstart', handleMouseMove);
            };
        }
    }, [mouseMoved]);

    return null;
};

export default ZendeskComponent;