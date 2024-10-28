import React from "react";
import {
  FlexibleSectionsFlexContentHeroPageSection2Layout,
  FlexibleSectionsFlexContentHeroPageSection3Layout,
  FlexibleSectionsFlexContentHeroPageSection4Layout,
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentInfiniteSliderSectionLayout,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import HeroSection from "../Sections/HeroSection";
import SliderSection from "../Sections/SliderSection";
import Section2 from "../Sections/Section2";
import Section3 from "../Sections/Section3";
import Section4 from "../Sections/Section4";

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

  const section3 = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentHeroPageSection3Layout"
  ) as FlexibleSectionsFlexContentHeroPageSection3Layout;

  const section4 = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentHeroPageSection4Layout"
  ) as FlexibleSectionsFlexContentHeroPageSection4Layout;
  return (
    <div className="">
      <HeroSection section={heroSection} />
      <SliderSection section={sliderSection} />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="border-b border-[#C6C6C6]"></div>
      </div>
      <Section2 section={section2} />
      <Section3 section={section3} />
      <Section4 section={section4} />
    </div>
  );
};

export default HeroPage;
