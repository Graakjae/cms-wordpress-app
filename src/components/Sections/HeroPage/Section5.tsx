"use client";

import { useState, useEffect } from "react";
import { FlexibleSectionsFlexContentHeroPageSection5Layout } from "@/gql/graphql";
import Image from "next/image";
import QuoteIcon from "@/components/icons/QuoteIcon";

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
      <div className="flex flex-col lg:flex-row">
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="w-full lg:w-1/2 h-[350px] lg:h-[100vh] object-cover object-middle"
          width={960}
          height={913}
        />
        <div className="pt-[80px] lg:pt-0 lg:h-[100vh] lg:w-1/2 flex items-center justify-center relative">
          <div className="h-[460px] lg:w-[530px] lg:px-[30px]">
            <div className=" text-white">
              {testimonials.length > 0 && (
                <div key={currentIndex} className="">
                  <div className="max-w-[300px] lg:max-w-[530px] relative py-[40px]">
                    <div className="absolute top-0 left-0">
                      <QuoteIcon />
                    </div>
                    <p className="text-[20px] lg:text-[35px] text-center">
                      {testimonials[currentIndex]?.testimonialText}
                    </p>
                    <div className="absolute bottom-0 right-0">
                      <QuoteIcon />
                    </div>
                  </div>
                  <p className="text-[16px] lg:text-[18px] font-extralight text-center">
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
