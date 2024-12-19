import React, { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <>
        <div className={'px-[166px] w-full min-h-screen h-full h-screen -z-10 bg-[#000003] py-[60px]'}>
            {children}
        </div></>;
};

export default Container;
