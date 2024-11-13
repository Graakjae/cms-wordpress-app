import { FlexibleSectionsFlexContentHeroSectionLayout } from "@/gql/graphql";
import { Button } from "../../ui/button";
import Image from "next/image";
import StarBeige from "../../../public/star-beige.svg";
import Link from "next/link";
interface HeroSectionProps {
  section: FlexibleSectionsFlexContentHeroSectionLayout;
}

const HeroSection: React.FC<HeroSectionProps> = ({ section }) => {
  return (
    <div className="flex relative pb-[37px] mt-[130px] w-full">
      <Image
        src={section?.image?.node?.sourceUrl || ""}
        alt={section?.image?.node?.altText || ""}
        className="w-1/2 h-[80vh] object-cover"
        width={960}
        height={790}
      />
      <div className="h-[80vh] w-1/2 flex items-center bg-Beige">
        <div className="w-[600px] pl-20">
          <h2 className="text-[45px] font-medium">{section?.title}</h2>
          <h3 className="text-[18px] font-medium mb-[35px]">
            {section?.subtitle}
          </h3>
          <p className="text-[18px] font-light">{section?.text1}</p>
          <p className="text-[18px] mt-[20px]">{section?.text2}</p>
          <Link href="/vare/barnets-bog">
            <Button className="mt-[50px]">{section?.buttonText}</Button>
          </Link>
        </div>
      </div>
      <Image
        src={StarBeige}
        alt="Star beige"
        width={75}
        height={75}
        className="absolute bottom-0 left-0 right-0 mx-auto"
      />
    </div>
  );
};

export default HeroSection;
