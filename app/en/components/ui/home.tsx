"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import "../../../public/css/AnimatedTextCube.css"; // Make sure to create a CSS file for the styles
import { HomeSectionPic } from "./home-pic";
import { ScrollDown } from "./scroll-down";

export default function Home() {
  useEffect(() => {
    gsap.set("#text-cube", {
      x: 600,
      y: 120,
    });

    const tl = gsap.timeline({ delay: 1, repeat: -1 });

    tl.to("#slit-one-back", 1, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "sine.out",
    })
      .to("#text-cube", 1, {
        x: 0,
        ease: "back.out",
      })
      .to(
        "#slit-one-back",
        1,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "sine.out",
        },
        "-=0.2"
      )
      .to("#text-cube", 5, {
        y: -150,
      })
      .to(
        "#text-cube",
        1,
        {
          rotationX: -90,
          rotationY: -35,
          rotationZ: 15,
          ease: "back.out(1)",
        },
        "<"
      )
      .to(
        "#text-cube",
        1,
        {
          rotationX: -180,
          rotationY: 35,
          rotationZ: -15,
          ease: "back.out(1)",
        },
        "-=3.5"
      )
      .to(
        "#text-cube",
        1,
        {
          rotationX: -270,
          rotationY: 0,
          rotationZ: 0,
          ease: "back.out(1)",
        },
        "-=2"
      )
      .to("#slit-two-back", 1, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        ease: "sine.out",
      })
      .to(
        "#text-cube",
        1,
        {
          x: -700,
          y: -150,
          ease: "back.in",
        },
        "-=1"
      )
      .to("#slit-two-back", 1, {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        ease: "sine.out",
      });
  }, []);

  return (
    <div className="relative w-full flex flex-row items-center justify-center h-screen" id="home">
      <div className="container h-[80vh]">
        <div className="text-cube text-4xl md:text-6xl" id="text-cube">
          <div className="text-cube-word text-violet-500">CANVA</div>
          <div className="text-cube-word text-yellow-300">SCRATCH</div>
          <div className="text-cube-word text-white">NUMERIC RESOURCES</div>
          <div className="text-cube-word text-white md:text-5xl">AND HOW TO<br/> USE THEM</div>
        </div>
      </div>
      <div className="items-center justify-center w-3/4 hidden md:flex">
        <HomeSectionPic />
      </div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <ScrollDown />
      </div>
    </div>
  );
}
