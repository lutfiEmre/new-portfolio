import React from 'react';
import Image from "next/image";
import emrelutfi from "@/public/emrelutfi.svg";
import infobg from "@/public/infobg.svg";
import whalesvg from '@/public/whale.svg'

const HomePage = () => {
    return (
        <div className="mt-[35px]  w-full flex flex-col">
            <h6 className={'iceregular  leading-6 text-[16px] text-white w-full'}>
                I’m a Frontend Developer passionate about building user-friendly, fast, and modern web interfaces. I specialize in technologies like React.js, Next.js, TypeScript, and TailwindCSS, crafting performance-driven solutions that not only work seamlessly but also look great.

                I’m a lifelong learner, constantly exploring new tools and technologies to grow both technically and creatively. Let’s build something amazing together! 🚀
            </h6>
            <div className={'mt-[24px]'}>
                <div className={'flex  justify-center group cursor-pointer  items-center '}>

                    <Image
                        className={' w-full max-w-[1500px] h-fit cursor-pointer'}
                        width={269} height={242} src={whalesvg} alt={'info bg'}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
