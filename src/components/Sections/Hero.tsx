import { FlexibleSectionsFlexContentHeroSectionLayout } from "@/gql/graphql";

interface HeroSectionProps {
  hero: FlexibleSectionsFlexContentHeroSectionLayout;
}

const heroSection: React.FC<HeroSectionProps> = ({ hero }) => {
  return (
    <div>
      <h2>{hero?.heroHeader}</h2>
    </div>
  );
};

export default heroSection;
