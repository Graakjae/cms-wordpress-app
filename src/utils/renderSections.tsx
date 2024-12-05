import React from "react";
import {
  FlexibleSectionsFlexContentHeroPageSection2Layout,
  FlexibleSectionsFlexContentHeroPageSection3Layout,
  FlexibleSectionsFlexContentInformationSectionLayout,
  FlexibleSectionsFlexContentHeroPageSection5Layout,
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout,
  BlogConnection,
  FlexibleSectionsFlexContentProductsSectionLayout,
  FlexibleSectionsFlexContentProductsPageSection2Layout,
  FlexibleSectionsFlexContentProductsPageTopSectionLayout,
  FlexibleSectionsFlexContentStarAnimationLayout,
} from "@/gql/graphql";
import HeroSection from "../components/Sections/HeroPage/HeroSection";
import SliderSection from "../components/Sections/SliderSection";
import Section2 from "../components/Sections/HeroPage/Section2";
import Section3 from "../components/Sections/HeroPage/Section3";
import InformationSection from "../components/Sections/InformationSection";
import Section5 from "../components/Sections/HeroPage/Section5";
import ReadMoreBlogsSection from "../components/Sections/ReadMoreBlogsSection";
import Section2ProductsPage from "../components/Sections/ProductsPage/Section2";
import ProductSection from "../components/Sections/Products";
import StarAnimationSection from "../components/Sections/StarAnimationSection";
import ProductsTopSection from "../components/Sections/ProductsTopSection";
import BlogTopSection from "@/components/Sections/BlogTopSection";
import ShareYourStoryForm from "@/components/Sections/ShareYourStoryForm";

const sectionComponents: { [key: string]: React.FC<any> } = {
  FlexibleSectionsFlexContentHeroSectionLayout: HeroSection,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout: SliderSection,
  FlexibleSectionsFlexContentHeroPageSection2Layout: Section2,
  FlexibleSectionsFlexContentHeroPageSection3Layout: Section3,
  FlexibleSectionsFlexContentInformationSectionLayout: InformationSection,
  FlexibleSectionsFlexContentHeroPageSection5Layout: Section5,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout: ReadMoreBlogsSection,
  FlexibleSectionsFlexContentStarAnimationLayout: StarAnimationSection,
  FlexibleSectionsFlexContentProductsPageTopSectionLayout: ProductsTopSection,
  FlexibleSectionsFlexContentProductsPageSection2Layout: Section2ProductsPage,
  FlexibleSectionsFlexContentProductsSectionLayout: ProductSection,
  FlexibleSectionsFlexContentBlogTopSectionLayout: BlogTopSection,
  FlexibleSectionsFlexContentShareYourStoryFormLayout: ShareYourStoryForm,
};

export const renderSections = (
  sections: Array<FlexibleSectionsFlexContentLayout>,
  additionalProps: { [key: string]: any } = {}
) => {
  return sections.map((section, index) => {
    const fieldGroupName = section?.fieldGroupName;
    const SectionComponent = fieldGroupName
      ? sectionComponents[fieldGroupName]
      : null;
    if (!SectionComponent) return null;

    return (
      <SectionComponent key={index} section={section} {...additionalProps} />
    );
  });
};