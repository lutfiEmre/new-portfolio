"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RainEffect = () => {
    const rainRef = useRef<HTMLDivElement>(null);
    const lightningRef = useRef<HTMLDivElement>(null);
    const puddleRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        if (typeof window === 'undefined') return;
        const { innerWidth, innerHeight } = window;
        const dropCount = 500;


        const drops = Array.from({ length: dropCount }, () => {
            const drop : HTMLElement = document.createElement("div");
            drop.className = "rain-drop";
            const depth = Math.random() > 0.7 ? "front" : "back";
            drop.setAttribute("data-depth", depth);
            rainRef.current?.appendChild(drop);
            return drop;
        });


        const animateDrop = (drop: HTMLElement) => {
            const startX : number = Math.random() * innerWidth;
            const endY : number = innerHeight - 100;
            const startY : number = -Math.random() * innerHeight - 50;
            const angle : number = Math.random() < 0.5 ? -10 : -20;
            const duration : number = Math.random() * 1.5 + 0.8;

            drop.style.left = `${startX}px`;
            drop.style.transform = `rotateZ(${angle}deg)`;

            gsap.fromTo(
                drop,
                { y: startY },
                {
                    y: endY,
                    duration: duration,
                    ease: "none",
                    onComplete: () => {

                        createRipple(startX);

                        animateDrop(drop);
                    }
                }
            );
        };

        const createRipple = (xPos: number) => {
            if (!puddleRef.current) return;
            const ripple : HTMLElement = document.createElement("div");
            ripple.className = "ripple";
            ripple.style.left = `${xPos}px`;
            puddleRef.current.appendChild(ripple);


            setTimeout(() => {
                ripple.remove();
            }, 500);
        };


        drops.forEach((drop) => animateDrop(drop as HTMLElement));


        const thunderSound = new Audio("/thunder.mp3");
        thunderSound.volume = 0.5;

        const lightningInterval = setInterval(() => {
            if (lightningRef.current) {
                lightningRef.current.classList.add("flash");

                setTimeout(() => {
                    thunderSound.play().catch(() => {});
                }, 200);
                setTimeout(() => {
                    lightningRef.current?.classList.remove("flash");
                }, 400);
            }
        }, 15000 + Math.random() * 5000);


        return () => {
            clearInterval(lightningInterval);
        };
    }, []);

    return (
        <div className="rain-scene py-[20px]  w-full h-full">
            <div ref={lightningRef} className="lightning-overlay"></div>
            <div ref={rainRef} className="rain-container w-full h-full "></div>
            <div ref={puddleRef} className="puddle"></div>
        </div>
    );
};

export default RainEffect;
