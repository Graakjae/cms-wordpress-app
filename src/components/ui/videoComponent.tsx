"use client";

import { useRef, useEffect } from "react";

export default function VideoComponent({ videoSrc }: { videoSrc?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current
            .play()
            .catch((error) => console.error("Error attempting to play", error));
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-[620px] flex items-center justify-center bg-black">
      <video
        ref={videoRef}
        className="w-full h-full object-cover object-center"
        loop
        muted
        playsInline
        preload="auto"
        src={videoSrc}
        aria-label="Infinite looping video"
      />
    </div>
  );
}
