"use client"
import Image from "next/image";
import Main from "@/app/components/Main";
import TopBar from "@/app/components/TopBar";
import Container from "@/app/components/Container";
import './css/extra.css'
import righttop from "@/public/righttop.svg";
import leftbottom from "@/public/leftbottom.svg";
import React from "react";
import LeftInfo from "@/app/components/LeftInfo";
import SwitchMenu from "@/app/components/SwitchMenu";
import {BrowserRouter, Route, Routes} from "react-router-dom";

export default function Home() {
  return (
      <BrowserRouter>
          <div className={'flex flex-col py-[20px]  w-full z-10  min-h-screen bg-[#000003] relative '}>
              <Container>
                  <div className={'z-20'}>
                      <TopBar/>
                      <div className={'flex gap-[73px] mt-[50px] text-white flex-row'}>
                          <LeftInfo/>
                          <div className={'flex flex-col text-white'}>
                              <SwitchMenu/>
                              <Routes>
                                  <Route path="/" element={<div>
                                      asd
                                  </div>}/>
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
