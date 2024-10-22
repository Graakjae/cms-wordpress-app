import React from "react";

import TestSection from "../Sections/TestSection";
import {
  FlexibleSectionsFlexContentHeroSectionLayout,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import HeroSection from "../Sections/HeroSection";

interface HeroPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}
const HeroPage: React.FC<HeroPageProps> = ({ sections }) => {
  const heroSections = sections.find(
    (section) =>
      section.fieldGroupName === "FlexibleSectionsFlexContentHeroSectionLayout"
  ) as FlexibleSectionsFlexContentHeroSectionLayout;

  return (
    <div>
      <HeroSection section={heroSections} />
    </div>
  );
};

export default HeroPage;
