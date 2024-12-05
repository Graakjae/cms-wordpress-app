import React from "react";
import {
  FlexibleSectionsFlexContentHeroPageSection2Layout,
  FlexibleSectionsFlexContentHeroPageSection3Layout,
  FlexibleSectionsFlexContentInformationSectionLayout,
  FlexibleSectionsFlexContentHeroPageSection5Layout,
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout,
  BlogConnection,
} from "@/gql/graphql";
import HeroSection from "../Sections/HeroPage/HeroSection";
import SliderSection from "../Sections/SliderSection";
import Section2 from "../Sections/HeroPage/Section2";
import Section3 from "../Sections/HeroPage/Section3";
import InformationSection from "../Sections/InformationSection";
import Section5 from "../Sections/HeroPage/Section5";
import Divider from "../ui/divider";
import ReadMoreBlogsSection from "../Sections/ReadMoreBlogsSection";
import { renderSections } from "@/utils/renderSections";

interface HeroPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  globalSections: GlobalSections;
  atMistePosts: BlogConnection;
}
const HeroPage: React.FC<HeroPageProps> = ({
  sections,
  globalSections,
  atMistePosts,
}) => {
  console.log("sections", sections);
  // const heroSection = sections.find(
  //   (section) =>
  //     section.fieldGroupName === "FlexibleSectionsFlexContentHeroSectionLayout"
  // ) as FlexibleSectionsFlexContentHeroSectionLayout;

  const infiniteSliderSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  // const section2 = sections.find(
  //   (section) =>
  //     section.fieldGroupName ===
  //     "FlexibleSectionsFlexContentHeroPageSection2Layout"
  // ) as FlexibleSectionsFlexContentHeroPageSection2Layout;

  // const section3 = sections.find(
  //   (section) =>
  //     section.fieldGroupName ===
  //     "FlexibleSectionsFlexContentHeroPageSection3Layout"
  // ) as FlexibleSectionsFlexContentHeroPageSection3Layout;

  // const informationSection = sections.find(
  //   (section) =>
  //     section.fieldGroupName ===
  //     "FlexibleSectionsFlexContentInformationSectionLayout"
  // ) as FlexibleSectionsFlexContentInformationSectionLayout;

  // const section5 = sections.find(
  //   (section) =>
  //     section.fieldGroupName ===
  //     "FlexibleSectionsFlexContentHeroPageSection5Layout"
  // ) as FlexibleSectionsFlexContentHeroPageSection5Layout;

  // const readBlogs = sections?.find(
  //   (section) =>
  //     section.fieldGroupName ===
  //     "FlexibleSectionsFlexContentMoreBlogsSectionLayout"
  // ) as FlexibleSectionsFlexContentMoreBlogsSectionLayout;

  return (
    <div className="">
      {renderSections(sections, { atMistePosts })}
      <Divider />
      <SliderSection section={infiniteSliderSection} />
    </div>
  );
};

export default HeroPage;
