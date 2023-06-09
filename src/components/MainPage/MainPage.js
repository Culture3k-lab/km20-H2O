import React from 'react';
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function MainPage() {
    useEffect(() => {
        gsap.to(".image-main-slider", {
        transform: "scale(0.5)",
        transformOrigin: "bottom",
        duration: 3,
        scrollTrigger: {
            trigger: ".mainPage",
            start: "top",
            end: "bottom ",
            scrub: 4,
            },
        });

        }, []);

return (
    <div className='mainPage'>
        <Image className='image image-main-slider' src="/main.jpg" width="680" height="800" />
    </div>
)
}

export default MainPage