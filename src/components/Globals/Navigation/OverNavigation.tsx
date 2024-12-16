"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "/public/arrow-right-black.svg";
import { TransitionLink } from "@/utils/TransitionLink";

export default function OverNavigation() {
  const links = [
    { href: "/", text: "Til minde for vores små aftenstjerner" },
    { href: "/", text: "Til forældre der har mistet et spædbarn" },
    { href: "/", text: "Gratis fragt på alle varer på aftenstjerner" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationState, setAnimationState] = useState("enter");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationState("exit");
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length);
        setAnimationState("enter");
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-PrimaryBeige h-[40px] w-full flex justify-start pl-4 md:pl-[0px] md:justify-center items-center overflow-hidden">
      <TransitionLink
        className={`flex gap-[10px] text-[14px] transition-all duration-500 ${
          animationState === "exit" ? "animate-dropOut" : "animate-dropIn"
        }`}
        href={links[currentIndex].href}
      >
        {links[currentIndex].text}
        <Image
          src="/arrow-right-black.svg"
          alt="Arrow right"
          width={13}
          height={13}
          priority
        />
      </TransitionLink>
    </div>
  );
}
