import React from "react";
import {
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentHistoryTopSectionLayout,
  FlexibleSectionsFlexContentMyHistorySectionLayout,
  FlexibleSectionsFlexContentBigPictureSectionLayout,
  FlexibleSectionsFlexContentStarAnimationLayout,
  BlogConnection,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout,
  ArticleConnection,
  GlobalSections,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
} from "@/gql/graphql";
import HistorienTopSection from "../Sections/HistorienTopSection";
import MyHistorySection from "../Sections/MyHistorySection";
import BigPictureSection from "../Sections/BigPictureSection";
import StarAnimationSection from "../Sections/StarAnimationSection";
import ReadMoreBlogsSection from "../Sections/ReadMoreBlogsSection";
import SliderSection from "../Sections/SliderSection";
import Divider from "../ui/divider";
import { renderSections } from "@/utils/renderSections";

interface HistoryPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
  articles: ArticleConnection;
  globalSections: GlobalSections;
}
const HistoryPage: React.FC<HistoryPageProps> = ({
  sections,
  blogs,
  articles,
  globalSections,
}) => {
  const infiniteSliderSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  return (
    <div className="mt-[100px] lg:mt-[130px]">
      {renderSections(sections, { blogs, articles })}
      <Divider />
      <SliderSection section={infiniteSliderSection} />
    </div>
  );
};

export default HistoryPage;
