import React from 'react';
import righttop from '@/public/righttop.svg'
import leftbottom from '@/public/leftbottom.svg'
import Image from "next/image";

const Main = () => {
    return (
        <div className={''}>
            <Image width={583} height={309} className={'top-0 right-0 absolute -z-10'} src={righttop} alt={''}/>
            <Image width={583} height={309} className={'bottom-0 left-0 absolute -z-10'} src={leftbottom} alt={''}/>

        </div>
    );
};

export default Main;
