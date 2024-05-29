"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface HeaderProps {
  text: string;
  className?: string;
}

export const Header = ({ text, className }: HeaderProps) => {
  const blurInRef = useRef(null);

  useEffect(() => {
    const element = blurInRef.current;
    gsap.fromTo(
      element,
      { opacity: 1, filter: "blur(10px)" }, // Initial state
      {
        opacity: 1,
        filter: "blur(0px)", // Final state
        scrollTrigger: {
          trigger: element,
          start: "top 50%", // Adjust as needed
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <div ref={blurInRef} className={className}>
      {text}
    </div>
  );
};
