"use client";
import Image from "next/image";
import FadeInList from "./FadeInList";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparklesText from "../magicui/sparkles-text";
import Marquee from "../magicui/marquee";
import CanvaTricks from "./canvaTricks";
import { Header } from "./header";

gsap.registerPlugin(ScrollTrigger);

export default function Canva() {
  useEffect(() => {
    gsap.to("#text1", {
      scrollTrigger: {
        trigger: "#TextWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      x: -600,
    });

    gsap.to("#text2", {
      scrollTrigger: {
        trigger: "#TextWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      x: 600,
    });

    gsap.to("#text3", {
      scrollTrigger: {
        trigger: "#TextWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      y: -300,
    });

    gsap.to("#text4", {
      scrollTrigger: {
        trigger: "#TextWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      y: 300,
    });

    gsap.to("#img", {
      scrollTrigger: {
        trigger: "#TextWrapper",
        start: "top center",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      y: -300,
    });
  }, []);

  return (
    <div className="min-h-screen md:p-10 p-1 w-full" id="TextWrapper">
      <div
        className="min-h-screen flex flex-col items-center justify-center text-center p-1 md:p-4"
        id="canva"
      >
        <div className="relative w-full max-w-3xl">
          {/* <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-9xl font-bold leading-none tracking-tighter text-transparent transform skew-y-12 scale-y-100">
            CANVA
          </h1> */}
          <SparklesText
            text="CANVA"
            className="text-6xl md:text-9xl font-bold leading-none tracking-tighter pointer-events-none whitespace-pre-wrap z-10 transform skew-y-12 scale-y-100"
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 flex space-x-4 animate-bounce">
            <span
              id="text1"
              className="bg-white text-sm text-black px-2 py-1 rounded -translate-x-4 translate-y-5 rotate-6"
            >
              fast
            </span>
            <span
              id="text2"
              className="bg-white text-sm text-black px-2 py-1 rounded -translate-x-4 -translate-y-10 -rotate-45"
            >
              Easy
            </span>
            <span
              id="text3"
              className="bg-white text-sm text-black px-2 py-1 rounded translate-x-4 -translate-y-10 rotate-45"
            >
              Degital
            </span>
            <span
              id="text4"
              className="bg-white text-sm text-black px-2 py-1 rounded translate-x-6 translate-y-10 -rotate-45"
            >
              Free
            </span>
          </div>
        </div>
        <div className="mt-16 relative" id="img">
          <Image
            src="/RN-Pic/canva.png" // Replace with the actual path to your image
            alt="Marketing Image"
            width={800}
            height={450}
            className="rounded-lg border-2 border-pink-400 p-1"
          />
        </div>
        <h1 className="flex items-center justify-center w-full text-xl md:text-4xl font-bold text-white">
          What is{" "}
          <div className="md:mx-4 mx-1 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent transform skew-y-12 scale-y-100">
            CANVA
          </div>{" "}
          and how to use it
        </h1>
        <p className="my-2 md:my-5 text-[10px] md:text-xl">
          Canva is an online graphic design tool that allows users to create a
          wide variety of visual content, including presentations, posters,
          infographics, social media graphics, and more. It is user-friendly and
          provides a range of templates, images, icons, and fonts, making it
          accessible for both beginners and experienced designers.
        </p>
      </div>
      <FadeInList />
      <Header
        text="Canva Tips and Tricks"
        className="text-4xl font-bold mb-8"
      />
      <CanvaTricks />
    </div>
  );
}
