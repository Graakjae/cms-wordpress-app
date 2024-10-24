import React from "react";

import TestSection from "../Sections/TestSection";
import {
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentInfiniteSliderSectionLayout,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import HeroSection from "../Sections/HeroSection";
import SliderSection from "../Sections/SliderSection";

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
  console.log("slider", sections);
  return (
    <div>
      <HeroSection section={heroSection} />
      <SliderSection section={sliderSection} />
    </div>
  );
};

export default HeroPage;
