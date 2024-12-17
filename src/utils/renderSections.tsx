import React from "react";
import { FlexibleSectionsFlexContentLayout } from "@/gql/graphql";
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
import HistorienTopSection from "@/components/Sections/HistorienTopSection";
import MyHistorySection from "@/components/Sections/MyHistorySection";
import BigPictureSection from "@/components/Sections/BigPictureSection";
import ContactSection from "@/components/Sections/ContactSection";
import ThankYouPageSection from "@/components/Sections/ThankYouPageSection";
import UnderProductSection from "@/components/Sections/UnderProductSection";
import MoreAboutTheProductSection from "@/components/Sections/MoreAboutTheProductSection";
import CTASection from "@/components/Sections/CTASection";
import NotFoundSection from "@/components/Sections/NotFoundSection";
import ArticlesSection from "@/components/Sections/ArticlesSection";

const sectionComponents: { [key: string]: React.FC<any> } = {
  FlexibleSectionsFlexContentHeroSectionLayout: HeroSection,
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
  FlexibleSectionsFlexContentArticlesSectionLayout: ArticlesSection,
  FlexibleSectionsFlexContentHistoryTopSectionLayout: HistorienTopSection,
  FlexibleSectionsFlexContentMyHistorySectionLayout: MyHistorySection,
  FlexibleSectionsFlexContentBigPictureSectionLayout: BigPictureSection,
  FlexibleSectionsFlexContentContactTopSectionLayout: ContactSection,
  FlexibleSectionsFlexContentThankYouPageSectionLayout: ThankYouPageSection,
  FlexibleSectionsFlexContentUnderProductSectionLayout: UnderProductSection,
  FlexibleSectionsFlexContentMoreAboutTheProductSectionLayout:
    MoreAboutTheProductSection,
  FlexibleSectionsFlexContentCtaSectionLayout: CTASection,
  FlexibleSectionsFlexContentInfiniteSliderSectionLayout: SliderSection,
  FlexibleSectionsFlexContentNotFoundPageLayout: NotFoundSection,
};

export const renderSections = (
  sections: Array<FlexibleSectionsFlexContentLayout>,
  additionalProps: { [key: string]: any } = {}
) => {
  if (!sections) return null;
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
