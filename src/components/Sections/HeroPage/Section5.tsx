"use client";

import { useState, useEffect } from "react";
import { FlexibleSectionsFlexContentHeroPageSection5Layout } from "@/gql/graphql";
import Image from "next/image";

interface Section5Props {
  section: FlexibleSectionsFlexContentHeroPageSection5Layout;
}

const Section5: React.FC<Section5Props> = ({ section }) => {
  const testimonials = section?.testimonials || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Switch every 5 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-PrimaryGreen relative">
      <div className="flex">
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="w-1/2 h-[100vh] object-cover object-middle"
          width={960}
          height={913}
        />
        <div className="h-[100vh] w-1/2 flex items-center justify-center relative">
          <div className="w-[530px]">
            <div className=" text-white">
              {testimonials.length > 0 && (
                <div key={currentIndex}>
                  <p className="text-[35px] text-center">
                    {testimonials[currentIndex]?.testimonialText}
                  </p>
                  <p className="text-[18px] font-extralight mt-[40px] text-center">
                    - {testimonials[currentIndex]?.testimonialBy}
                  </p>
                </div>
              )}
            </div>
            <div className="absolute bottom-[50px] right-0 left-0 mx-auto flex justify-center mt-4">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full mx-2 cursor-pointer bg-white ${
                    index === currentIndex ? "opacity-100" : "opacity-25"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
