"use client"
import React, { useEffect, useState } from 'react';

import linkedinsvg from '@/public/linkedin.svg'
import instagramsvg from '@/public/instagramsvg.svg'
import spotifysvg from '@/public/spotifysvg.svg'
import behancesvg from '@/public/behancesvg.svg'
import twitterxsvg from '@/public/twitterx.svg'
import githubsvg from '@/public/githubsvg.svg'
import mediumsvg from '@/public/mediumsvg.svg'
import websitesvg from '@/public/websitesvg.svg'
import Image from "next/image";
import {useRouter} from "next/navigation";
interface Modal {
    setSocial: () => void;
}



const SocialMedia: React.FC<Modal> = ({ setSocial }) => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null); // Hata mesajı state'i

    const router = useRouter()

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={setSocial}
        >
            <div
                className=" flex flex-col w-[820px]  text-white p-6   rounded shadow-lg relative"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={'w-full border-y-[1px] border-[#333333]  p-[11px] flex bg-[#E84A4A] bg-opacity-[20%] justify-between items-center'}>
                    <h6 className={'iceregular text-white uppercase text-[14px] '}>
                        file xplorer
                    </h6>
                    <svg className={'cursor-pointer w-[20px] h-[20px]'} onClick={setSocial} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" fill="#E84A4A"/>
                    </svg>

                </div>
                <div className={'w-full border-b-[1px] border-[#333333] p-[11px] flex bg-black  justify-between items-center'}>
                    <h6 className={'iceregular text-[#7A7A7A] uppercase text-[14px] '}>
                        location: Social Media Links
                    </h6>


                </div>
                <div className={'w-full h-full justify-between items-center flex flex-row bg-black'}>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'flex flex-row cursor-pointer items-center gap-2'}>
                            <Image
                                width={87} height={87} priority
                                src={linkedinsvg} alt={"linkedin svg"}/>
                            <h6 className={'iceregular text-[36px] text-white'}>
                                Linkedin
                            </h6>
                        </div>
                        <div className={'flex flex-row cursor-pointer items-center gap-2'}>
                            <Image
                                width={87} height={87} priority
                                src={instagramsvg} alt={"linkedin svg"}/>
                            <h6 className={'iceregular text-[36px] text-white'}>
                                Instagram
                            </h6>
                        </div>
                        <div className={'flex flex-row cursor-pointer items-center gap-2'}>
                            <Image
                                width={87} height={87} priority
                                src={spotifysvg} alt={"linkedin svg"}/>
                            <h6 className={'iceregular text-[36px] text-white'}>
                               Spotify
                            </h6>
                        </div>
                        <div className={'flex flex-row cursor-pointer items-center gap-2'}>
                            <Image
                                width={87} height={87} priority
                                src={behancesvg} alt={"linkedin svg"}/>
                            <h6 className={'iceregular text-[36px] text-white'}>
                               Behance
                            </h6>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <a href={"https://www.linkedin.com/in/emrelutfi/"} target={"_blank"} className={'flex flex-row-reverse cursor-pointer items-center gap-2'}>
                            <Image
                                width={87} height={87} priority
                                src={linkedinsvg} alt={"linkedin svg"}/>
                            <h6 className={'iceregular text-[36px] text-white'}>
                                Linkedin
                            </h6>
                        </a>
                        <div className={'flex flex-row-reverse cursor-pointer items-center gap-2'}>
                            <Image
                                width={87} height={87} priority
                                src={instagramsvg} alt={"linkedin svg"}/>
                            <h6 className={'iceregular text-[36px] text-white'}>
                                Instagram
                            </h6>
                        </div>
                        <div className={'flex flex-row-reverse cursor-pointer items-center gap-2'}>
                            <Image
                                width={87} height={87} priority
                                src={spotifysvg} alt={"linkedin svg"}/>
                            <h6 className={'iceregular text-[36px] text-white'}>
                                Spotify
                            </h6>
                        </div>
                        <div className={'flex flex-row-reverse cursor-pointer items-center gap-2'}>
                            <Image
                                width={87} height={87} priority
                                src={behancesvg} alt={"linkedin svg"}/>
                            <h6 className={'iceregular text-[36px] text-white'}>
                                Behance
                            </h6>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default SocialMedia;
