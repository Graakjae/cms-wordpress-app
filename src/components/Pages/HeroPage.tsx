import React from "react";
import {
  FlexibleSectionsFlexContentHeroPageSection2Layout,
  FlexibleSectionsFlexContentHeroPageSection3Layout,
  FlexibleSectionsFlexContentHeroPageSection4Layout,
  FlexibleSectionsFlexContentHeroPageSection5Layout,
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentInfiniteSliderSectionLayout,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import HeroSection from "../Sections/HeroPage/HeroSection";
import SliderSection from "../Sections/SliderSection";
import Section2 from "../Sections/HeroPage/Section2";
import Section3 from "../Sections/HeroPage/Section3";
import Section4 from "../Sections/HeroPage/Section4";
import Section5 from "../Sections/HeroPage/Section5";

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

  const section5 = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentHeroPageSection5Layout"
  ) as FlexibleSectionsFlexContentHeroPageSection5Layout;
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
      <Section5 section={section5} />
    </div>
  );
};

export default HeroPage;
