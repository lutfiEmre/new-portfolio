"use client"
import React, {useRef} from 'react';
import infobg from '@/public/infobg.svg'
import emrelutfi from '@/public/emrelutfi.svg'
import Image from "next/image";
import openbg from '@/public/openbg.svg'

interface Modal{
    swModal: () => void;
    setSocial: () => void;
}
const LeftInfo : React.FC<Modal> = ({swModal,setSocial}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const audioRefH = useRef<HTMLAudioElement>(null);

    const handleCef = () => {
        if (audioRefH.current) {
            audioRefH.current.play();
        }
    };
    const handleClick = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    return (
        <div className={'flex flex-col pt-[15px] w-full sm:max-w-[300px]'}>
            <audio ref={audioRef} src="/comp.mp3" preload="auto"></audio>
            <audio ref={audioRefH} src="/hover.mp3" preload="auto"></audio>

            <div className={'flex w-[270px] justify-center  group cursor-pointer  items-center h-[220px]'}>
                <Image className={'w-[220px] p-[5px] overflow-hidden h-[205px] object-cover absolute'} width={220}
                       height={205} src={emrelutfi} alt={'info bg'}/>

                <Image
                    className={'group-hover:border-white  group-hover:border-opacity-[50%] w-[300px] h-[242px] cursor-pointer group-hover:border-[2px]'}
                    width={269} height={242} src={infobg} alt={'info bg'}/>
            </div>
            <div className={'flex flex-col w-full gap-[12px]'}>
                <div className={'mt-[30px] w-full flex justify-between items-start'}>
                    <div className={'flex flex-col'}>
                        <h6 className={'text-white uppercase iceregular text-[20px]'}>
                            NAME
                        </h6>
                        <h6
                            className={'text-basered  hover:text-white cursor-pointer   iceregular text-[24px]'}>
                            EmreLutfi
                        </h6>
                    </div>
                    <div className={'flex flex-col justify-end items-end gap-3'}>
                        <div className={'flex justify-end items-end flex-row gap-2'}>
                            <h6 onMouseEnter={handleCef}
                                className={'text-whitefont-regular  hover:text-white cursor-pointer text-[19px]'}>
                                Turkey
                            </h6>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z"
                                    stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path
                                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                    stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>


                        </div>
                        <div className={'w-[8px] mr-2 rounded-full bg-[#10B981] h-[8px] glow-effect'}/>

                    </div>
                </div>
                <div className={'flex flex-col w-full'}>
                    <h6 className={'text-white uppercase iceregular text-[20px]'}>
                        occupation
                    </h6>
                    <h6
                        className={'text-basered  hover:text-white cursor-pointer   iceregular text-[24px]'}>
                        Front-end Developer
                    </h6>
                </div>
                <div className={'flex flex-col'}>
                    <h6 className={'text-white uppercase iceregular text-[20px]'}>
                        corporation
                    </h6>
                    <h6

                        className={'text-basered hover:text-white cursor-pointer   iceregular text-[24px]'}>
                        EmreLutfi.com
                    </h6>
                </div>
                <div className={'flex flex-col '}>
                    <h6 className={'text-white uppercase iceregular text-[20px]'}>
                        availability
                    </h6>
                    <div  onClick={() => {
                        handleClick()
                        swModal()
                    }}
                         className={'w-full group relative cursor-pointer  h-[31px] '}>
                        <h6 className={'text-[24px] group-hover:text-white px-[5px] absolute uppercase text-black bigbold'}>
                            open for hire
                        </h6>
                        <Image className={'sm:w-fit w-full object-cover sm:h-fit h-[35px]'} width={269} height={242}
                               src={openbg} alt={'info bg'}/>
                    </div>
                </div>
                <div className={'flex flex-col cursor-pointer'}>
                    <h6 className={'text-white uppercase iceregular text-[20px]'}>
                        social
                    </h6>
                    <div
                         onClick={
                             () => {
                                 handleClick()
                                 setSocial()
                             }
                    }
                        className={'w-full relative cursor-pointer  hover:bg-basered group py-[0px] px-[5px] border-basered border-[1.39px] flex justify-between items-center  h-fit '}>
                        <h6 className={'text-[24px] group-hover:text-white  uppercase text-basered bigbold'}>
                            open connection
                        </h6>
                        <svg className={'fill-[#E84A4A] group-hover:fill-white'} width="20" height="29"
                             viewBox="0 0 20 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.0606 14.6087L19.0826 20.6307L11.24 28.4733H8.46676V19.2025L2.41565 25.2536L0.453613 23.293L8.46676 15.2812V13.9362L0.453613 5.92166L2.41565 3.96101L8.46676 10.0121V0.741333H11.24L19.0826 8.58532L13.0606 14.6087ZM11.24 16.708V24.552L15.1613 20.6307L11.24 16.708ZM11.24 12.5066L15.1613 8.58532L11.24 4.66402V12.508V12.5066Z"
                                fill=""/>
                        </svg>

                    </div>
                </div>
                <div className={'flex flex-col sm:flex-row mt-4 gap-4'}>
                    <div

                        onClick={handleClick}
                        className={'w-full relative cursor-pointer py-[4px] hover:bg-basered group px-[15px] border-basered border-[1.39px] flex justify-center items-center  h-fit '}>
                        <h6 className={'text-[18px] uppercase group-hover:text-white text-basered bigbold'}>
                            See My Resume
                        </h6>


                    </div>
                    <div

                        onClick={handleClick}
                        className={'w-full relative hover:bg-basered group cursor-pointer py-[4px] px-[15px] border-basered border-[1.39px] flex justify-center items-center  h-fit '}>
                        <h6 className={'text-[18px] uppercase group-hover:text-white text-basered bigbold'}>
                            Get in Touch
                        </h6>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftInfo;
