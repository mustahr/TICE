"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { v4 as uuidv4 } from "uuid";
import IconCloud from "../magicui/icon-cloud";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const FadeInList = () => {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const listItems = listRef.current?.children;
    if (listItems) {
      gsap.fromTo(
        listItems,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.3,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 2.2,
          },
        }
      );
    }
  }, []);
  const slugs = [
    "canva",
    "scratch",
    "adobe",
    "google",
    "skype",
    "facebook",
    "html",
    "css",
    "javascript",
    "nextjs",
  ];

  return (
    <div className="w-full flex items-start justify-between md:flex-row flex-col gap-4  md:mt-6 mt-2">
      <ul ref={listRef} className="w-full md:w-1/2 space-y-10 text-white">
        <li
          key={uuidv4()}
          className="group relative flex items-center justify-between  w-full text-left p-2 border-b hover:border-orange-600 hover:text-violet-600 transition-all"
        >
          <Link
            href="https://www.canva.com/templates/?query=presentation"
            target="_blank"
            className="w-full flex items-center justify-between"
          >
            <span>Presentations</span>
            <Image
              src="/RN-Pic/canva-presentation.png"
              width={400}
              height={100}
              alt="Canva"
              className="hidden md:block rounded border p-1 absolute top-1/2 -right-full opacity-0 animate-bounce group-hover:opacity-100 transition-all hover:animate-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12l4 4L19 7"
              />
            </svg>
          </Link>
        </li>
        <li
          key={uuidv4()}
          className="group relative flex items-center justify-between  w-full text-left p-2 border-b hover:border-orange-600 hover:text-violet-600 transition-all"
        >
          <Link
            href="https://www.canva.com/logos/templates/"
            target="_blank"
            className="w-full flex items-center justify-between"
          >
            <span>Logo</span>
            <Image
              src="/RN-Pic/canva-logo.png"
              width={400}
              height={100}
              alt="Canva"
              className="hidden md:block rounded border p-1 absolute top-1/2 -right-full opacity-0 animate-bounce group-hover:opacity-100 transition-all hover:animate-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12l4 4L19 7"
              />
            </svg>
          </Link>
        </li>
        <li
          key={uuidv4()}
          className="group relative flex items-center justify-between  w-full text-left p-2 border-b hover:border-orange-600 hover:text-violet-600 transition-all"
        >
          <Link
            href="https://www.canva.com/templates/?query=book"
            target="_blank"
            className="w-full flex items-center justify-between"
          >
            <span>Degital Books</span>
            <Image
              src="/RN-Pic/canva book.png"
              width={400}
              height={100}
              alt="Canva"
              className="hidden md:block rounded border p-1 absolute top-1/2 -right-full opacity-0 animate-bounce group-hover:opacity-100 transition-all hover:animate-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12l4 4L19 7"
              />
            </svg>
          </Link>
        </li>
        <li
          key={uuidv4()}
          className="group relative flex items-center justify-between  w-full text-left p-2 border-b hover:border-orange-600 hover:text-violet-600 transition-all"
        >
          <Link
            href="https://www.canva.com/resumes/templates/"
            target="_blank"
            className="w-full flex items-center justify-between"
          >
            <span>Resume</span>
            <Image
              src="/RN-Pic/canva-resume.png"
              width={400}
              height={100}
              alt="Canva"
              className="hidden md:block rounded border p-1 absolute top-1/2 -right-full opacity-0 animate-bounce group-hover:opacity-100 transition-all hover:animate-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12l4 4L19 7"
              />
            </svg>
          </Link>
        </li>
      </ul>
      <div className="">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};

export default FadeInList;
