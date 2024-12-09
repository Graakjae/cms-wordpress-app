import { FlexibleSectionsFlexContentHeroSectionLayout } from "@/gql/graphql";
import { Button } from "../../ui/button";
import Image from "next/image";
import StarBeige from "../../../public/star-beige.svg";
import Link from "next/link";
import { formatContent } from "@/utils/formatContent";

interface HeroSectionProps {
  section: FlexibleSectionsFlexContentHeroSectionLayout;
}

const HeroSection: React.FC<HeroSectionProps> = ({ section }) => {
  return (
    <div className="flex flex-col md:flex-row relative pb-[31px] md:pb-[37px] mt-[100px] lg:mt-[130px] w-full">
      <Image
        src={section?.image?.node?.sourceUrl || ""}
        alt={section?.image?.node?.altText || ""}
        className="w-full md:w-1/2 h-[50vh] md:h-[80vh] object-cover"
        width={960}
        height={790}
        priority
        quality={75}
        loading="eager"
      />
      <div className=" md:h-[80vh] w-full md:w-1/2 flex items-center bg-PrimaryBeige/60 pt-[40px] pb-[40px] md:pt-[0px] md:pb-[0px]">
        <div className="w-full md:w-[600px] p-4 md:pl-20">
          <h2 className="text-[30px] lg:text-[45px] font-medium">
            {section?.title}
          </h2>
          <h3 className="text-[16px] lg:text-[18px] font-medium mb-[20px] md:mb-[35px]">
            {section?.subtitle}
          </h3>
          <div
            dangerouslySetInnerHTML={{
              __html: formatContent(section?.text) || "",
            }}
          />
          <Link
            className="flex justify-center md:justify-start"
            href={`${section?.buttonText?.url}`}
          >
            <Button className="mt-[10px] md:mt-[30px]">
              {section?.buttonText?.title}
            </Button>
          </Link>
        </div>
      </div>
      <Image
        src={StarBeige}
        alt="Star beige"
        width={75}
        height={75}
        className="absolute bottom-0 left-0 right-0 mx-auto w-[62px] h-[62px] md:w-[75px] md:h-[75px] z-10"
      />
    </div>
  );
};

export default HeroSection;
