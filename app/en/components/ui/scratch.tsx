"use client";
import Image from "next/image";
import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SparklesText from "../magicui/sparkles-text";
import { Header } from "./header";
import DetailList from "./DetailList";
import ScratchTricks from "./scratchTricks";
import ResourceCards from "./ResourceCards";
import ScratchProject from "./ImageCard";

gsap.registerPlugin(ScrollTrigger);

export default function Scratch() {
  useEffect(() => {
    gsap.to("#Scratchtext1", {
      scrollTrigger: {
        trigger: "#ScratchWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      x: -600,
    });

    gsap.to("#Scratchtext2", {
      scrollTrigger: {
        trigger: "#ScratchWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      x: 600,
    });

    gsap.to("#Scratchtext3", {
      scrollTrigger: {
        trigger: "#ScratchWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      y: -300,
    });

    gsap.to("#Scratchtext4", {
      scrollTrigger: {
        trigger: "#ScratchWrapper",
        start: "top bottom",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      y: 300,
    });

    gsap.to("#Scratchimg", {
      scrollTrigger: {
        trigger: "#ScratchWrapper",
        start: "top center",
        end: "bottom top",
        scrub: 2.2,
      },
      translateZ: 400,
      y: -300,
    });
  }, []);

  return (
    <div className="min-h-screen md:p-10 p-1 w-full" id="ScratchWrapper">
      <div
        className="min-h-screen flex flex-col items-center justify-center text-center p-1 md:p-4"
        id="scratch"
      >
        <div className="relative w-full max-w-3xl">
          {/* <h1 className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-9xl font-bold leading-none tracking-tighter text-transparent transform skew-y-12 scale-y-100">
            CANVA
          </h1> */}
          <SparklesText
            text="SCRATCH"
            colors={{ first: "#FFEA00", second: "#FFA500" }} // Yellow to Orange gradien
            className="text-6xl md:text-9xl font-bold leading-none tracking-tighter pointer-events-none whitespace-pre-wrap z-10 transform skew-y-12 scale-y-100"
          />
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 flex space-x-4 animate-bounce">
            <span
              id="Scratchtext1"
              className="bg-white text-sm text-black px-2 py-1 rounded -translate-x-4 translate-y-5 rotate-6"
            >
              fast
            </span>
            <span
              id="Scratchtext2"
              className="bg-white text-sm text-black px-2 py-1 rounded -translate-x-4 -translate-y-10 -rotate-45"
            >
              Easy
            </span>
            <span
              id="Scratchtext3"
              className="bg-white text-sm text-black px-2 py-1 rounded translate-x-4 -translate-y-10 rotate-45"
            >
              Degital
            </span>
            <span
              id="Scratchtext4"
              className="bg-white text-sm text-black px-2 py-1 rounded translate-x-6 translate-y-10 -rotate-45"
            >
              Free
            </span>
          </div>
        </div>
        <div className="mt-16 relative" id="Scratchimg">
          <Image
            src="/RN-Pic/scratch.png" // Replace with the actual path to your image
            alt="Marketing Image"
            width={800}
            height={450}
            className="rounded-lg border-2 border-yellow-300 p-1"
          />
        </div>
        <h1 className="flex items-center justify-center w-full text-xl md:text-4xl font-bold text-white">
          What is{" "}
          <div className="md:mx-4 mx-1 pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#ffe51e] bg-clip-text text-center font-bold leading-none tracking-tighter text-transparent transform skew-y-12 scale-y-100">
            SCRATCH
          </div>{" "}
          and how to use it
        </h1>
        <p className="my-2 md:my-5 text-[10px] md:text-xl">
          Scratch est un langage de programmation visuel et une communauté en
          ligne développés par le Lifelong Kindergarten Group au MIT Media Lab.
          Il est principalement conçu pour les enfants et les débutants afin de
          les aider à apprendre les bases de la programmation et de la pensée
          computationnelle de manière interactive et engageante. Les
          utilisateurs créent des programmes en assemblant des blocs de code
          dans une interface de glisser-déposer, ce qui le rend accessible et
          facile à utiliser sans avoir besoin d&apos;écrire du code manuellement.
        </p>
      </div>
      <Header
        text="Comment utiliser Scratch en éducation"
        className="text-4xl font-bold mb-8"
      />
      <DetailList />
      <Header
        text="Conseils pour utiliser Scratch en éducation"
        className="text-4xl font-bold my-8 mt-20"
      />
      <ScratchTricks />
      <Header
        text="Ressources utiles"
        className="text-4xl font-bold my-8 mt-20"
      />
      <ResourceCards />
      <Header
        text="Exemples de projets"
        className="text-4xl font-bold my-8 mt-20"
      />
      <ScratchProject />
      <p className="mt-10 md:mt-5 text-[10px] md:text-xl md:my-5">
        En intégrant Scratch dans le programme éducatif, les enseignants peuvent
        offrir une manière amusante et engageante pour les élèves d&apos;apprendre
        les compétences essentielles en programmation et de développer la pensée
        critique et la créativité.
      </p>
    </div>
  );
}
