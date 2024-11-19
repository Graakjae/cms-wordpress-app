import React from "react";
import {
  FlexibleSectionsFlexContentHeroPageSection2Layout,
  FlexibleSectionsFlexContentHeroPageSection3Layout,
  FlexibleSectionsFlexContentInformationSectionLayout,
  FlexibleSectionsFlexContentHeroPageSection5Layout,
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentInfiniteSliderSectionLayout,
  FlexibleSectionsFlexContentLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
} from "@/gql/graphql";
import HeroSection from "../Sections/HeroPage/HeroSection";
import SliderSection from "../Sections/SliderSection";
import Section2 from "../Sections/HeroPage/Section2";
import Section3 from "../Sections/HeroPage/Section3";
import InformationSection from "../Sections/InformationSection";
import Section5 from "../Sections/HeroPage/Section5";
import Divider from "../ui/divider";

interface HeroPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  globalSections: GlobalSections;
}
const HeroPage: React.FC<HeroPageProps> = ({ sections, globalSections }) => {
  const heroSection = sections.find(
    (section) =>
      section.fieldGroupName === "FlexibleSectionsFlexContentHeroSectionLayout"
  ) as FlexibleSectionsFlexContentHeroSectionLayout;

  const infiniteSliderSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

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

  const informationSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentInformationSectionLayout"
  ) as FlexibleSectionsFlexContentInformationSectionLayout;

  const section5 = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentHeroPageSection5Layout"
  ) as FlexibleSectionsFlexContentHeroPageSection5Layout;
  return (
    <div className="">
      <HeroSection section={heroSection} />
      <SliderSection section={infiniteSliderSection} />
      <Divider />
      <Section2 section={section2} />
      <Section3 section={section3} />
      <InformationSection section={informationSection} />
      <Section5 section={section5} />
    </div>
  );
};

export default HeroPage;
