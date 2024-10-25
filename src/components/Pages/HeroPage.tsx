import React from "react";
import {
  FlexibleSectionsFlexContentHeroPageSection2Layout,
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentInfiniteSliderSectionLayout,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import HeroSection from "../Sections/HeroSection";
import SliderSection from "../Sections/SliderSection";
import Section2 from "../Sections/Section2";

interface HeroPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}
const HeroPage: React.FC<HeroPageProps> = ({ sections }) => {
  const heroSection = sections.find(
    (section) =>
      section.fieldGroupName === "FlexibleSectionsFlexContentHeroSectionLayout"
  ) as FlexibleSectionsFlexContentHeroSectionLayout;

  const sliderSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentInfiniteSliderSectionLayout"
  ) as FlexibleSectionsFlexContentInfiniteSliderSectionLayout;

  const section2 = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentHeroPageSection2Layout"
  ) as FlexibleSectionsFlexContentHeroPageSection2Layout;
  console.log("slider", sections);
  return (
    <div>
      <HeroSection section={heroSection} />
      <SliderSection section={sliderSection} />
      <div className="px-[5%]">
        <div className="border-b border-[#C6C6C6]"></div>
      </div>
      <Section2 section={section2} />
    </div>
  );
};

export default HeroPage;
