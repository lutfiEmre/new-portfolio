"use client"
import Image from "next/image";

import TopBar from "@/app/components/TopBar";
import Container from "@/app/components/Container";
import './css/extra.css'
import righttop from "@/public/righttop.svg";
import leftbottom from "@/public/leftbottom.svg";
import React, { useRef, useState} from "react";
import LeftInfo from "@/app/components/LeftInfo";
import SwitchMenu from "@/app/components/SwitchMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "@/app/components/pages/HomePage";
import ActiveQuest from "@/app/components/ActiveQuest";
import RainEffect from "@/app/components/RainEffect";
import OpenToHire from "@/app/components/pages/OpenToHire";


export default function Home() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [modal,setModal] = useState(false)


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
      <BrowserRouter>
          <div onClick={handleUserInteraction}
               className={'flex flex-col h-full overflow-hidden  py-[20px]  w-full z-10  min-h-screen bg-[#000003] relative '}>
              {modal && ( <OpenToHire  swModal={() => setModal(!modal)} />)}
              <audio ref={audioRef} preload="auto">
                  <source src="/rainsound.mp3" type="audio/mpeg"/>
              </audio>
              <div className={'absolute top-0 -z-10 h-full  w-full h-full  min-h-screen'}>
                  <RainEffect/>
              </div>
              <Container>
                  <div className={'z-20'}>
                      <TopBar/>
                      <div className={'flex gap-[33px] w-full mt-[50px] text-white flex-col sm:flex-row'}>
                          <div className={'flex flex-col gap-7'}>
                              <LeftInfo  swModal={() => setModal(!modal)} />
                              <div className={'sm:block lg:hidden hidden'}>
                                  <Routes>
                                      <Route path="/" element={<ActiveQuest/>}/>
                                  </Routes>
                              </div>
                          </div>
                          <div className={'flex w-full   flex-col text-white'}>
                              <SwitchMenu/>
                              <Routes>
                                  <Route path="/" element={<HomePage/>}/>
                              </Routes>
                          </div>
                          <div className={'sm:hidden lg:block block'}>
                              <Routes>
                                  <Route path="/" element={<ActiveQuest/>}/>
                              </Routes>
                          </div>
                      </div>
                  </div>

              </Container>
              <Image width={583} priority height={309} className={'top-0 right-0 absolute -z-10'} src={righttop}
                     alt={''}/>
              <Image width={583} priority height={309} className={'bottom-0 left-0 absolute -z-10'} src={leftbottom}
                     alt={''}/>


          </div>
      </BrowserRouter>
  );
}
