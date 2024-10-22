import { FlexibleSectionsFlexContentHeroSectionLayout } from "@/gql/graphql";

interface HeroSectionProps {
  section: FlexibleSectionsFlexContentHeroSectionLayout;
}

const HeroSection: React.FC<HeroSectionProps> = ({ section }) => {
  return (
    <div>
      <h2>{section?.heroHeader}</h2>
    </div>
  );
};

export default HeroSection;
