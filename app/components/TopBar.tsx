import React from 'react';

const TopBar = () => {
    return (
        <div className={'flex flex-row justify-between items-center'}>
            <div className={'flex flex-row gap-[39px]'}>
                <div className={'flex flex-row items-end  bigbold  gap-[3px]'}>
                    <h4 className={'text-[#7DFF68] leading-8 text-[26px]'}>100</h4>
                    <h4 className={'text-[#FFFFFF] text-[16px] uppercase'}>Level</h4>
                </div>
                <div className={'flex flex-row items-end  bigbold  gap-[3px]'}>
                    <h4 className={'text-[#7DFF68] leading-8 text-[26px]'}>1,425</h4>
                    <h4 className={'text-[#FFFFFF] text-[16px] uppercase'}>coins awarded</h4>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
