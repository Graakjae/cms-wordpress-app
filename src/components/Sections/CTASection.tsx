import { FlexibleSectionsFlexContentCtaSectionLayout } from "@/gql/graphql";
import Image from "next/image";
import StarBeige from "../../public/star-beige.svg";
import { formatContent } from "@/utils/formatContent";
import { Button } from "../ui/button";
import Link from "next/link";
interface CTASectionProps {
  section: FlexibleSectionsFlexContentCtaSectionLayout;
}

const CTASection: React.FC<CTASectionProps> = ({ section }) => {
  return (
    <div className="bg-PrimaryGreen relative">
      <div className="flex flex-col tablet:flex-row max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute left-0 w-full tablet:w-1/2  h-[400px] tablet:h-[80vh] object-cover object-center"
          width={960}
          height={913}
        />
        <div className="w-full tablet:w-1/2 h-[400px] tablet:h-[80vh] relative"></div>
        <div className="py-[50px] tablet:pl-[10px] xl:pl-[0px] tablet:py-0 tablet:h-[80vh] w-full tablet:w-1/2 flex items-center justify-center text-white">
          <div className="text-start xsm:text-center tablet:text-start max-w-[500px] tablet:h-[80vh] flex flex-col justify-center">
            <h3 className="text-[35px] font-medium leading-tight max-w-[530px]">
              {section?.title}
            </h3>
            <p className="text-[18px] mt-[5px] mb-[35px] font-semibold">
              {section?.subtitle}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text) || "",
              }}
              className="mb-[40px] text-[16px]"
            />
            <Link href={`${section?.buttonText?.url}`}>
              <Button variant={"lightGreen"}>
                {section?.buttonText?.title}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
