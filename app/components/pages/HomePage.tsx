"use client"
import React, {useState} from 'react';
import Image from "next/image";

import whalesvg from '@/public/whale.svg'
import {ComputersCanvas} from "@/app/components/canvas";


const HomePage = () => {
    const [isMobile, setIsMobile] = useState<any>(false);

    return (
        <div className="mt-[35px]  w-full flex flex-col">
            <h6 className={'iceregular  leading-6 text-[16px] text-white w-full'}>
                I’m a Frontend Developer passionate about building user-friendly, fast, and modern web interfaces. I specialize in technologies like React.js, Next.js, TypeScript, and TailwindCSS, crafting performance-driven solutions that not only work seamlessly but also look great.

                I’m a lifelong learner, constantly exploring new tools and technologies to grow both technically and creatively. Let’s build something amazing together! 🚀
            </h6>
            <div className={'mt-[24px]'}>
                <div className={'flex  justify-center group cursor-pointer  items-center '}>
                    <div className={' w-[700px] h-[290px] overflow-hidden'}>
                        <div className={' w-[700px]   h-[450px] -mt-[70px]'}>
                            <ComputersCanvas isMobile={isMobile} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomePage;
