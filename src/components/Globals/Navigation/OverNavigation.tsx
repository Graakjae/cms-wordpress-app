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
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // Track if the first cycle is done

  useEffect(() => {
    if (!hasStarted) {
      // Delay to fix the first animation cycle
      setTimeout(() => {
        setHasStarted(true);
      }, 500); // Slight delay before starting the first animation
      return;
    }

    const interval = setInterval(() => {
      setIsAnimating(false); // Start drop-out animation
      setTimeout(() => {
        setIsAnimating(true); // Start drop-in animation
        setCurrentIndex((prevIndex) => (prevIndex + 1) % links.length); // Change text after drop-out
      }, 500); // This delay should match the drop-out timing (500ms in the animation)
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [hasStarted, links.length]);

  return (
    <div className="bg-[#E6DAC7] h-[40px] w-full flex justify-center items-center overflow-hidden">
      <Link
        className={`text-[14px] ${
          isAnimating ? "animate-dropInOut" : "animate-dropOut"
        }`}
        href={links[currentIndex].href}
      >
        {links[currentIndex].text}
      </Link>
    </div>
  );
}
