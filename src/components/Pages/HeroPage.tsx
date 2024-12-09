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
  const infiniteSliderSection =
    globalSections?.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  return (
    <div>
      {renderSections(sections, { atMistePosts })}
      {/* <Divider />
      {infiniteSliderSection && (
        <SliderSection section={infiniteSliderSection} />
      )} */}
    </div>
  );
};

export default HeroPage;
