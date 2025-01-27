
import React, { useEffect, useRef, useState } from 'react';

export default function Timer({ initialDuration, setInitialDuration }) {
    const [elapsedTime, setElapsedTime] = useState(initialDuration);
    const intervalIdRef = useRef(null);

    useEffect(() => {
        setElapsedTime(initialDuration);
        let Timer = initialDuration;

        clearInterval(intervalIdRef.current);
        intervalIdRef.current = setInterval(() => {
            Timer = Timer - 1;
            setElapsedTime(Timer);
            if (Timer < 0) {
                clearInterval(intervalIdRef.current);
                if (setInitialDuration) {
                    setInitialDuration(0);
                }
            }
        }, 1000);

        return () => {
            clearInterval(intervalIdRef.current);
        };
    }, [initialDuration, setInitialDuration]);

    const minutes = Math.max(0, Math.floor(elapsedTime / 60)); // Ensure minutes are not negative
    const seconds = Math.max(0, elapsedTime % 60); // Ensure seconds are not negative

    return (
        <div className='text-[#006ac9] text-sm inline-block mx-1'>{`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</div>
    );
};
