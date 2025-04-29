"use client"
import Image from "next/image";

import TopBar from "@/app/components/TopBar";
import Container from "@/app/components/Container";
import righttop from "@/public/righttop.svg";
import leftbottom from "@/public/leftbottom.svg";
import React, {ReactNode, useRef, useState} from "react";
import LeftInfo from "@/app/components/LeftInfo";
import SwitchMenu from "@/app/components/SwitchMenu";

import ActiveQuest from "@/app/components/ActiveQuest";
import RainEffect from "@/app/components/RainEffect";
import OpenToHire from "@/app/components/pages/OpenToHire";
import {usePathname} from "next/navigation";
import SocialMedia from "@/app/components/pages/SocialMedia";

interface Asd{
    children: ReactNode;
}

const Main : React.FC<Asd> =({children}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [modal,setModal] = useState<boolean>(false)
    const [social,setSocial] = useState<boolean>(true)
    const pathname = usePathname()

    const handleUserInteraction = () => {
        if (audioRef.current && !isPlaying) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                const audio = audioRef.current;
                if (audio) {
                    audio.loop = true;
                    audio.volume = 0.3;
                }
            }).catch(err => {
                console.error("Ses çalma hatası:", err);
            });
        }
    };
    return (
        <div onClick={handleUserInteraction}
             className={'flex flex-col h-full overflow-hidden  py-[0px]  w-full z-10  min-h-screen bg-[#000003] relative '}>
            {modal && ( <OpenToHire  swModal={() => setModal(!modal)} />)}
            {social && ( <SocialMedia  setSocial={() => setSocial(!social)} />)}
            <audio ref={audioRef} preload="auto">
                <source src="/rainsound.mp3" type="audio/mpeg"/>
            </audio>
            <div className={'absolute top-0 -z-10 h-full  w-full h-full  min-h-screen'}>
                <RainEffect/>
            </div>
            <Container>
                <div className={'z-20'}>
                    <TopBar/>
                    <div className={'flex gap-[33px] w-full mt-[20px] text-white flex-col sm:flex-row'}>
                        <div className={'flex flex-col gap-7'}>
                            <LeftInfo  setSocial={() => {setSocial(!social)}} swModal={() => setModal(!modal)} />
                            {pathname === "/" && (
                                <div className="sm:block lg:hidden hidden">
                                    <ActiveQuest />
                                </div>
                            )}
                        </div>
                        <div className={'flex w-full   flex-col text-white'}>
                            <SwitchMenu/>
                            {children}
                        </div>
                        {pathname === "/" && (
                            <div className="sm:hidden lg:block block">
                                <ActiveQuest />
                            </div>
                        )}
                    </div>
                </div>

            </Container>
            <Image width={583} priority height={309} className={'top-0 right-0 absolute -z-10'} src={righttop}
                   alt={''}/>
            <Image width={583} priority height={309} className={'bottom-0 left-0 absolute -z-10'} src={leftbottom}
                   alt={''}/>


        </div>
    );
}


export default Main