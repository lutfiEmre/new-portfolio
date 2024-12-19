"use client"
import React, { useState, useEffect } from 'react';

const TopBar = () => {
    const [localTime, setLocalTime] = useState(new Date());
    const [serverTime, setServerTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setLocalTime(now);

            // Server time is 6 hours behind the current time
            const serverTimeOffset = new Date(now.getTime() - 6 * 60 * 60 * 1000);
            setServerTime(serverTimeOffset);
        }, 1000); // Update every second

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    const formatTime = (date: Date) => {
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <div className={'flex flex-col gap-[15px] pt-[25px] pt-[29px] lg:flex-row z-20 justify-between items-center'}>
            <div className={'flex flex-col justify-center items-center sm:flex-row sm:gap-[39px]'}>
                <div className={'flex flex-row items-end bigbold gap-[3px]'}>
                    <h4 className={'text-[#7DFF68] leading-8 text-[26px]'}>100</h4>
                    <h4 className={'text-[#FFFFFF] text-[16px] uppercase'}>Level</h4>
                </div>
                <div className={'flex flex-row items-end bigbold gap-[3px]'}>
                    <h4 className={'text-[#7DFF68] leading-8 text-[26px]'}>1,425</h4>
                    <h4 className={'text-[#FFFFFF] text-[16px] uppercase'}>coins awarded</h4>
                </div>
            </div>
            <div className={'flex flex-col justify-center items-center sm:flex-row sm:gap-[27px]'}>
                <h6 className={'iceregular uppercase text-[#7A7A7A]'}>
                    SERVER TIME: <span className={'text-white'}>{formatTime(serverTime)}</span>
                </h6>
                <h6 className={'iceregular uppercase text-[#7A7A7A]'}>
                    LOCAL TIME: <span className={'text-white'}>{formatTime(localTime)}</span>
                </h6>
            </div>
        </div>
    );
};

export default TopBar;
