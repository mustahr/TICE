'use client'
import { useEffect, useState } from "react";

const CursorCircles = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none z-50">
      <div
        className="w-20 h-20 bg-red-500 rounded-full absolute"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
      <div
        className="w-10 h-10 bg-blue-500 rounded-full absolute"
        style={{
          transform: `translate(${cursorPosition.x * 0.5}px, ${
            cursorPosition.y * 0.5
          }px)`,
        }}
      />
    </div>
  );
};

export default CursorCircles;
