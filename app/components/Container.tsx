"use client"
import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <>
        <div className={' 2xl:px-[140px] md:px-[70px] sm:px-[60px] px-[40px] lg:px-[50px] xl:px-[50px] 3xl:px-[106px] '}>
            {children}
        </div></>;
};

export default Container;
