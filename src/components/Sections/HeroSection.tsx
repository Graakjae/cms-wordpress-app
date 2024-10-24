import { FlexibleSectionsFlexContentHeroSectionLayout } from "@/gql/graphql";
import { Button } from "../ui/button";
import Image from "next/image";

interface HeroSectionProps {
  section: FlexibleSectionsFlexContentHeroSectionLayout;
}

const HeroSection: React.FC<HeroSectionProps> = ({ section }) => {
  return (
    <div className="flex justify-between">
      <img
        src={section?.image?.node?.sourceUrl || ""}
        alt={section?.image?.node?.altText || ""}
        className="w-1/2"
      />
      <div>
        <h2 className="text-[45px] font-semibold">{section?.title}</h2>
        <h3 className="text-[18px] font-semibold">{section?.subtitle}</h3>
        <p className="text-[18px]">{section?.text1}</p>
        <p className="text-[18px]">{section?.text2}</p>
        <Button>{section?.buttonText}</Button>
      </div>
    </div>
  );
};

export default HeroSection;
