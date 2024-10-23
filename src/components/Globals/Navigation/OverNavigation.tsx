"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function OverNavigation() {
  const links = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/contact", text: "Contact" },
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
    <div className="bg-[#E6DAC7] h-[40px] w-full flex justify-center items-center overflow-hidden">
      <Link
        className={`text-[14px] transition-all duration-500 ${
          animationState === "exit" ? "animate-dropOut" : "animate-dropIn"
        }`}
        href={links[currentIndex].href}
      >
        {links[currentIndex].text}
      </Link>
    </div>
  );
}
