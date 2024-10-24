"use client";
import { FlexibleSectionsFlexContentInfiniteSliderSectionLayout } from "@/gql/graphql";
import Image from "next/image";

import Slider from "react-infinite-logo-slider";

interface SliderSectionProps {
  section: FlexibleSectionsFlexContentInfiniteSliderSectionLayout;
}

const Component: React.FC<SliderSectionProps> = ({ section }) => {
  console.log("slidersection", section);
  const slides =
    section?.mentionedIn?.map((item, index) => (
      <Slider.Slide key={index}>
        <Image
          src={item?.logo?.node?.sourceUrl || ""}
          alt={item?.logo?.node?.altText || ""}
          width={250}
          height={250}
        />
      </Slider.Slide>
    )) || [];
  return (
    <div className="flex gap-5 overflow-hidden">
      <p className="text-[24px] font-semibold ">Nævnt i:</p>
      {slides.length > 0 && (
        <Slider
          width="250px"
          duration={40}
          pauseOnHover={true}
          blurBorders={false}
          blurBorderColor={"#fff"}
        >
          {slides}
        </Slider>
      )}
    </div>
  );
};

export default Component;
