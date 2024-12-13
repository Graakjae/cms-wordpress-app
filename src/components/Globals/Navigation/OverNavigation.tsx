"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "@/public/arrow-right-black.svg";

export default function OverNavigation() {
  const links = [
    { href: "/", text: "Til minde for vores små aftenstjerner" },
    { href: "/", text: "Til forældre der har mistet et spædbarn" },
    { href: "/", text: "Gratis fragt på alle varer på aftenstjerner" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState("enter"); // Possible states: 'enter', 'exit'

  useEffect(() => {
    const interval = setInterval(() => {
      // Set to exit state, wait for animation to complete
      setAnimationState("exit");

      // Change index after a slight delay to allow exit animation to finish
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
        setAnimationState("enter"); // Set back to enter state for next text
      }, 500); // This delay should match the exit animation duration
    }, 4000); // Change text every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div className="bg-PrimaryBeige h-[40px] w-full flex justify-start pl-4 md:pl-[0px] md:justify-center items-center overflow-hidden">
      <Link
        className={`flex gap-[10px] text-[14px] transition-all duration-500 ${
          animationState === "exit" ? "animate-dropOut" : "animate-dropIn"
        }`}
        href={links[currentIndex].href}
      >
        {links[currentIndex].text}
        <Image
          src={arrowRight}
          alt="Arrow right"
          width={13}
          height={13}
          priority
        />
      </Link>
    </div>
  );
}
