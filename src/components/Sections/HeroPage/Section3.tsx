import { FlexibleSectionsFlexContentHeroPageSection3Layout } from "@/gql/graphql";
import Image from "next/image";
import StarBeige from "../../../public/star-beige.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatContent } from "@/utils/formatContent";
interface Section3Props {
  section: FlexibleSectionsFlexContentHeroPageSection3Layout;
}

const Section3: React.FC<Section3Props> = ({ section }) => {
  return (
    <div className="bg-PrimaryBeige relative">
      <div className="md:flex max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="md:h-[80vh] py-[60px] md:py-0 w-full md:w-1/2 flex items-center">
          <div className="max-w-[530px]">
            <h2 className="text-[24px] md:text-[35px] font-medium leading-tight">
              {section?.title}
            </h2>
            <h3 className="text-[16px] md:text-[18px] mt-[5px] mb-[35px] font-medium">
              {section?.subtitle}
            </h3>
            <div
              className="mt-[20px]"
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text) || "",
              }}
            />

            <Link href={`${section?.buttonText?.url}`}>
              <Button className="mt-[50px]">
                {section?.buttonText?.title}
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[380px] md:h-[80vh] relative">
          <Image
            src={StarBeige}
            alt="Star beige"
            width={62}
            height={62}
            className="absolute top-[-31px] left-0 right-0 m-auto z-10 md:hidden"
          />
        </div>
        <Image
          src={StarBeige}
          alt="Star beige"
          width={75}
          height={75}
          className="absolute hidden md:block top-0 bottom-0 left-0 right-0 m-auto z-10"
        />
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute right-0  bottom-0 md:top-0 w-full md:w-1/2 h-[380px] md:h-[80vh] object-cover object-top"
          width={960}
          height={913}
        />
        <div></div>
      </div>
    </div>
  );
};

export default Section3;
