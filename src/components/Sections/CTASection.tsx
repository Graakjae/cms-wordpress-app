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
  console.log("cta", section);
  return (
    <div className="bg-PrimaryGreen relative">
      <div className="flex max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute left-0 w-1/2 h-[80vh] object-cover object-top"
          width={960}
          height={913}
        />
        <div className="w-1/2 h-[80hv]"></div>
        <div className="h-[80vh] w-1/2 flex items-center justify-center text-white">
          <div className="max-w-[500px] h-[80vh] flex flex-col justify-center">
            <h3 className="text-[35px] font-medium leading-tight max-w-[530px]">
              {section?.title}
            </h3>
            <p className="text-[18px] mt-[5px] mb-[35px] font-semibold">
              {section?.subtitle}
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text) || "",
              }}
              className="mb-[40px] text-[16px]"
            />
            <Link href={section?.linkButtonText?.url || ""}>
              <Button variant={"lightGreen"}>
                {section?.linkButtonText?.title}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
