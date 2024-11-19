import { FlexibleSectionsFlexContentHeroPageSection3Layout } from "@/gql/graphql";
import Image from "next/image";
import StarBeige from "../../../public/star-beige.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
interface Section3Props {
  section: FlexibleSectionsFlexContentHeroPageSection3Layout;
}

const Section3: React.FC<Section3Props> = ({ section }) => {
  return (
    <div className="bg-Beige relative">
      <div className="flex max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="h-[80vh] w-1/2 flex items-center">
          <div className="max-w-[530px]">
            <h2 className="text-[35px] font-medium leading-tight">
              {section?.title}
            </h2>
            <h3 className="text-[18px] mt-[5px] mb-[35px] font-medium">
              {section?.subtitle}
            </h3>
            <p className="text-[18px]">{section?.text}</p>
            <p className="text-[18px] mt-[20px]">{section?.text2}</p>
            <Link href={`${section?.buttonText?.url}`}>
              <Button className="mt-[50px]">
                {section?.buttonText?.title}
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 h-[80vh]"></div>
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute right-0 w-1/2 h-[80vh] object-cover object-top"
          width={960}
          height={913}
        />

        <Image
          src={StarBeige}
          alt="Star beige"
          width={75}
          height={75}
          className="absolute bottom-0 top-0 left-0 right-0 m-auto"
        />
      </div>
    </div>
  );
};

export default Section3;
