import React from "react";
import {
  FlexibleSectionsFlexContentLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
  BlogConnection,
} from "@/gql/graphql";
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
  return (
    <div>{renderSections(sections, { atMistePosts, globalSections })}</div>
  );
};

export default HeroPage;
