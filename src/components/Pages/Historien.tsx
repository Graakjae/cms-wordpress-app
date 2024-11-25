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
  const historyTopSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentHistoryTopSectionLayout"
  ) as FlexibleSectionsFlexContentHistoryTopSectionLayout;

  const historySection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentMyHistorySectionLayout"
  ) as FlexibleSectionsFlexContentMyHistorySectionLayout;

  const bigPictureSection = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentBigPictureSectionLayout"
  ) as FlexibleSectionsFlexContentBigPictureSectionLayout;

  const starAnimation = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentStarAnimationLayout"
  ) as FlexibleSectionsFlexContentStarAnimationLayout;

  const moreBlogs = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentMoreBlogsSectionLayout"
  ) as FlexibleSectionsFlexContentMoreBlogsSectionLayout;

  const articlesSection = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentArticlesSectionLayout"
  ) as FlexibleSectionsFlexContentMoreBlogsSectionLayout;

  const infiniteSliderSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  return (
    <div className="mt-[100px] lg:mt-[130px]">
      {historyTopSection && <HistorienTopSection section={historyTopSection} />}
      {historySection && <MyHistorySection section={historySection} />}
      {bigPictureSection && <BigPictureSection section={bigPictureSection} />}
      {starAnimation && <StarAnimationSection section={starAnimation} />}
      {moreBlogs && (
        <ReadMoreBlogsSection
          color="PrimaryBeige"
          section={moreBlogs}
          blogs={blogs}
        />
      )}
      {articles && (
        <ReadMoreBlogsSection section={articlesSection} articles={articles} />
      )}
      <Divider />
      <SliderSection section={infiniteSliderSection} />
    </div>
  );
};

export default HistoryPage;
