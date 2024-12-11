import React from "react";
import {
  FlexibleSectionsFlexContentLayout,
  BlogConnection,
  ArticleConnection,
  GlobalSections,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
} from "@/gql/graphql";
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
  globalSections,
}) => {
  return (
    <div className="mt-[100px] lg:mt-[130px]">
      {renderSections(sections, {
        blogs,
        globalSections,
      })}
    </div>
  );
};

export default HistoryPage;
