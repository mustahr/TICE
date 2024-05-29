"use client";
import Image from "next/image";
import "../../../public/css/definition.css"; // Make sure to create a CSS file for the styles
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./header";

gsap.registerPlugin(ScrollTrigger);

export default function Definition() {
  useEffect(() => {
    gsap.to("#img1", {
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      translateZ: 400,
      x: -600, // Different value for each image
    });

    gsap.to("#img2", {
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      translateZ: 570,
      x: 500, // Different value for each image
    });

    gsap.to("#img3", {
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "center center",
        end: "bottom top",
        scrub: true,
      },
      translateZ: 3070,
      x: 1000, // Different value for each image
    });

    gsap.to("#img4", {
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      translateZ: 370,
      x: 400, // Different value for each image
    });

    gsap.to("#img5", {
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      translateZ: 370,
      x: 500, // Different value for each image
    });

    gsap.to("#img6", {
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      translateZ: 370,
      x: 600, // Different value for each image
    });

    gsap.to("#img7", {
      scrollTrigger: {
        trigger: "#ImgWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      translateZ: 370,
      x: 700, // Different value for each image
    });
  }, []);
  return (
    <>
      <div id="wrapper">
        <Header text="RN : les ressources numerique" />
      </div>
      <div id="ImgWrapper">
        <Image
          width={1000}
          height={1000}
          id="img1"
          src="https://icodeayush.github.io/TheWeekndGSAPScrollEffect/img/asset%207.jpeg"
          alt="image"
        />
        <Image
          width={1000}
          height={1000}
          id="img2"
          src="https://icodeayush.github.io/TheWeekndGSAPScrollEffect/img/asset%202.jpeg"
          alt="image"
        />
        <Image
          width={1000}
          height={1000}
          id="img3"
          src="https://icodeayush.github.io/TheWeekndGSAPScrollEffect/img/asset%206.jpeg"
          alt="image"
        />
       {/*  <Image
          width={1000}
          height={1000}
          id="img4"
          src="https://icodeayush.github.io/TheWeekndGSAPScrollEffect/img/asset%205.jpeg"
          alt="image"
        />
        <Image
          width={1000}
          height={1000}
          id="img5"
          src="https://icodeayush.github.io/TheWeekndGSAPScrollEffect/img/asset%203.jpeg"
          alt="image"
        />
        <Image
          width={1000}
          height={1000}
          id="img6"
          src="https://icodeayush.github.io/TheWeekndGSAPScrollEffect/img/asset%204.jpeg"
          alt="image"
        />
        <Image
          width={1000}
          height={1000}
          id="img7"
          src="https://icodeayush.github.io/TheWeekndGSAPScrollEffect/img/asset%201.jpeg"
          alt="image"
        /> */}
      </div>
    </>
  );
}
