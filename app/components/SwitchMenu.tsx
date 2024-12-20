"use client"
import React, { useRef, useState} from 'react';

import {useRouter} from "next/navigation";

const SwitchMenu = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const [nav,setNav] = useState<string>("main")
    const router = useRouter()

    const handleClick = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    return (
        <div className={"grid max-w-[1300px] lg:grid-cols-2 2xl:grid-cols-5 w-full flex-wrap gap-[16px]"}>
            <audio ref={audioRef} src="/comp.mp3" preload="auto"></audio>
            <div onClick={() => {
                router.push("/")
                setNav("main")
                handleClick()
            }} className={'flex flex-col cursor-pointer w-full h-full   relative'}>
                <div className={`${nav === "main" && "!bg-basered"} bg-[#333333] w-[2.13px] h-full  absolute left-0'`}/>

                <div
                    className={`w-full overflow-hidden h-full max-h-[35px] pb-[5px]  ${nav === "main" && "!bg-opacity-90  !bg-[#E84A4A]"} bg-opacity-70  bg-[#242425]   group relative cursor-pointer   `}>
                    <h6 className={'text-[24px]  !tracking-widest group-hover:text-white px-[5px]  uppercase text-white bigbold'}>
                        beginning
                    </h6>
                    <svg className={'absolute top-[-10px] right-[-10px]'} width="43" height="57" viewBox="0 0 43 57"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.69496 13.5884L6.65137 1.40346L16.91 1.67424L22.3626 14.4833L17.4062 26.6683L7.14758 26.3975L1.69496 13.5884ZM6.14147 0.205625L17.5322 0.506284L23.4195 14.3365L17.9161 27.8662L6.52543 27.5655L0.638108 13.7352L6.14147 0.205625ZM25.1693 15.7434L19.8417 28.2589L25.2832 41.042L35.9385 41.042L41.2662 28.5265L35.8246 15.7434L25.1693 15.7434ZM36.4412 14.5624L24.6666 14.5624L18.7793 28.3927L24.6666 42.2229L36.4412 42.2229L42.3286 28.3927L36.4412 14.5624ZM6.54872 30.3248L1.22107 42.8403L6.66263 55.6234L17.3179 55.6234L22.6456 43.1079L17.204 30.3248L6.54872 30.3248ZM17.8206 29.1438L6.04601 29.1438L0.158688 42.9741L6.04601 56.8044L17.8206 56.8044L23.708 42.9741L17.8206 29.1438Z"
                              fill="black"/>
                    </svg>

                </div>

                <div
                    className={'w-full text-[13px] text-opacity-50 bg-opacity-50 leading-4 text-white  h-full pb-[5px]  p-[6px] iceregular bg-[#131313]'}>
                    home page, this is the page the user sees when they first log in.
                </div>
            </div>
            <div onClick={() => {
                router.push("/about")
                setNav("about")
                handleClick()
            }} className={'flex flex-col cursor-pointer w-full   relative'}>
                <div
                    className={`${nav === "about" && "!bg-basered"} bg-[#333333] w-[2.13px] h-full  absolute left-0'`}/>

                <div
                    className={`w-full overflow-hidden  h-[60px] pb-[5px]   ${nav === "about" && "!bg-opacity-90  !bg-[#E84A4A]"} bg-opacity-70  bg-[#242425]   group relative cursor-pointer   `}>
                    <h6 className={'text-[24px]  !tracking-widest group-hover:text-white px-[5px]  uppercase text-white bigbold'}>
                        about
                    </h6>
                    <svg className={'absolute top-[-10px] right-[-10px]'} width="43" height="57" viewBox="0 0 43 57"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.69496 13.5884L6.65137 1.40346L16.91 1.67424L22.3626 14.4833L17.4062 26.6683L7.14758 26.3975L1.69496 13.5884ZM6.14147 0.205625L17.5322 0.506284L23.4195 14.3365L17.9161 27.8662L6.52543 27.5655L0.638108 13.7352L6.14147 0.205625ZM25.1693 15.7434L19.8417 28.2589L25.2832 41.042L35.9385 41.042L41.2662 28.5265L35.8246 15.7434L25.1693 15.7434ZM36.4412 14.5624L24.6666 14.5624L18.7793 28.3927L24.6666 42.2229L36.4412 42.2229L42.3286 28.3927L36.4412 14.5624ZM6.54872 30.3248L1.22107 42.8403L6.66263 55.6234L17.3179 55.6234L22.6456 43.1079L17.204 30.3248L6.54872 30.3248ZM17.8206 29.1438L6.04601 29.1438L0.158688 42.9741L6.04601 56.8044L17.8206 56.8044L23.708 42.9741L17.8206 29.1438Z"
                              fill="black"/>
                    </svg>

                </div>
                <div
                    className={'w-full text-[13px] text-opacity-50 bg-opacity-50 leading-4 text-white  h-full pb-[5px]  p-[6px] iceregular bg-[#131313]'}>
                    a page about me. who is emrelutfi
                </div>
            </div>
            <div onClick={() => {
                router.push("/projects")
                setNav("projects")
                handleClick()
            }} className={'flex flex-col cursor-pointer w-full   relative'}>
                <div
                    className={`${nav === "projects" && "!bg-basered"} bg-[#333333] w-[2.13px] h-full  absolute left-0'`}/>

                <div
                    className={`w-full overflow-hidden h-full max-h-[35px]   ${nav === "projects" && "!bg-opacity-90  !bg-[#E84A4A]"} bg-opacity-70  bg-[#242425]   group relative cursor-pointer   `}>
                    <h6 className={'text-[24px]  !tracking-widest group-hover:text-white px-[5px]  uppercase text-white bigbold'}>
                        PROJECTS
                    </h6>
                    <svg className={'absolute top-[-10px] right-[-10px]'} width="43" height="57" viewBox="0 0 43 57"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.69496 13.5884L6.65137 1.40346L16.91 1.67424L22.3626 14.4833L17.4062 26.6683L7.14758 26.3975L1.69496 13.5884ZM6.14147 0.205625L17.5322 0.506284L23.4195 14.3365L17.9161 27.8662L6.52543 27.5655L0.638108 13.7352L6.14147 0.205625ZM25.1693 15.7434L19.8417 28.2589L25.2832 41.042L35.9385 41.042L41.2662 28.5265L35.8246 15.7434L25.1693 15.7434ZM36.4412 14.5624L24.6666 14.5624L18.7793 28.3927L24.6666 42.2229L36.4412 42.2229L42.3286 28.3927L36.4412 14.5624ZM6.54872 30.3248L1.22107 42.8403L6.66263 55.6234L17.3179 55.6234L22.6456 43.1079L17.204 30.3248L6.54872 30.3248ZM17.8206 29.1438L6.04601 29.1438L0.158688 42.9741L6.04601 56.8044L17.8206 56.8044L23.708 42.9741L17.8206 29.1438Z"
                              fill="black"/>
                    </svg>

                </div>
                <div
                    className={'w-full text-[13px] text-opacity-50 bg-opacity-50 leading-[13px] text-white pb-[5px] h-full  p-[6px] iceregular bg-[#131313]'}>
                    examine my projects and maybe you can find my mistakes. Remember the project is important.
                </div>
            </div>
            <div onClick={() => {
                router.push("/music")
                setNav("music")
                handleClick()
            }} className={'flex flex-col cursor-pointer w-full   relative'}>
                <div
                    className={`${nav === "music" && "!bg-basered"} bg-[#333333] w-[2.13px] h-full  absolute left-0'`}/>

                <div
                    className={`w-full overflow-hidden h-full max-h-[35px]  ${nav === "music" && "!bg-opacity-90    !bg-[#E84A4A]"} bg-opacity-70 static z-10  bg-[#242425]   group relative cursor-pointer   `}>
                    <h6 className={'text-[24px]  !tracking-widest group-hover:text-white px-[5px]  uppercase text-white bigbold'}>
                        music
                    </h6>
                    <svg className={'absolute top-[-10px] right-[-10px]'} width="43" height="57" viewBox="0 0 43 57"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.69496 13.5884L6.65137 1.40346L16.91 1.67424L22.3626 14.4833L17.4062 26.6683L7.14758 26.3975L1.69496 13.5884ZM6.14147 0.205625L17.5322 0.506284L23.4195 14.3365L17.9161 27.8662L6.52543 27.5655L0.638108 13.7352L6.14147 0.205625ZM25.1693 15.7434L19.8417 28.2589L25.2832 41.042L35.9385 41.042L41.2662 28.5265L35.8246 15.7434L25.1693 15.7434ZM36.4412 14.5624L24.6666 14.5624L18.7793 28.3927L24.6666 42.2229L36.4412 42.2229L42.3286 28.3927L36.4412 14.5624ZM6.54872 30.3248L1.22107 42.8403L6.66263 55.6234L17.3179 55.6234L22.6456 43.1079L17.204 30.3248L6.54872 30.3248ZM17.8206 29.1438L6.04601 29.1438L0.158688 42.9741L6.04601 56.8044L17.8206 56.8044L23.708 42.9741L17.8206 29.1438Z"
                              fill="black"/>
                    </svg>

                </div>
                <div
                    className={'w-full text-[13px] text-opacity-50 bg-opacity-50 z-0 static leading-4 text-white  h-full pb-[5px]  p-[6px] iceregular bg-[#131313]'}>
                    Do you want to know about my taste in music?
                </div>
            </div>
            <div onClick={() => {
                router.push("/contact")
                setNav("contact")
                handleClick()
            }} className={'flex flex-col cursor-pointer w-full   relative'}>
                <div
                    className={`${nav === "contact" && "!bg-basered"} bg-[#333333] w-[2.13px] h-full  absolute left-0'`}/>

                <div
                    className={`w-full overflow-hidden h-full max-h-[35px]  ${nav === "contact" && "!bg-opacity-90  !bg-[#E84A4A]"} bg-opacity-70  bg-[#242425]   group relative cursor-pointer   `}>
                    <h6 className={'text-[24px]  !tracking-widest group-hover:text-white px-[5px]  uppercase text-white bigbold'}>
                        contact
                    </h6>
                    <svg className={'absolute top-[-10px] right-[-10px]'} width="43" height="57" viewBox="0 0 43 57"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M1.69496 13.5884L6.65137 1.40346L16.91 1.67424L22.3626 14.4833L17.4062 26.6683L7.14758 26.3975L1.69496 13.5884ZM6.14147 0.205625L17.5322 0.506284L23.4195 14.3365L17.9161 27.8662L6.52543 27.5655L0.638108 13.7352L6.14147 0.205625ZM25.1693 15.7434L19.8417 28.2589L25.2832 41.042L35.9385 41.042L41.2662 28.5265L35.8246 15.7434L25.1693 15.7434ZM36.4412 14.5624L24.6666 14.5624L18.7793 28.3927L24.6666 42.2229L36.4412 42.2229L42.3286 28.3927L36.4412 14.5624ZM6.54872 30.3248L1.22107 42.8403L6.66263 55.6234L17.3179 55.6234L22.6456 43.1079L17.204 30.3248L6.54872 30.3248ZM17.8206 29.1438L6.04601 29.1438L0.158688 42.9741L6.04601 56.8044L17.8206 56.8044L23.708 42.9741L17.8206 29.1438Z"
                              fill="black"/>
                    </svg>

                </div>
                <div
                    className={'w-full text-[13px] text-opacity-50 bg-opacity-50 leading-4 text-white  h-full pb-[5px]  p-[6px] iceregular bg-[#131313]'}>
                    Communicate with me, lets explore worlds that dont exist together.
                </div>
            </div>
        </div>
    );
};

export default SwitchMenu;
