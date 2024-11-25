import { FlexibleSectionsFlexContentHistoryTopSectionLayout } from "@/gql/graphql";
import { Button } from "../ui/button";
import Image from "next/image";
import StarBeige from "../../../public/star-beige.svg";
import Link from "next/link";
import { LinkButton } from "../ui/linkButton";
import { formatContent } from "@/utils/formatContent";
interface HistorienTopSectionProps {
  section: FlexibleSectionsFlexContentHistoryTopSectionLayout;
}

const HistorienTopSection: React.FC<HistorienTopSectionProps> = ({
  section,
}) => {
  return (
    <div className="flex relative w-full bg-PrimaryGreen">
      <div className="pb-[30px] lg:py-0 tablet:h-[80vh] w-full flex flex-col tablet:flex-row items-center justify-start  max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute left-0 w-full tablet:w-[45%] h-[400px] tablet:h-[80vh] object-cover object-top"
          width={960}
          height={790}
        />
        <div className="w-full tablet:w-[45%] h-[400px] tablet:h-[80vh]"></div>
        <div className="tablet:h-[80vh] w-full tablet:w-[55%] flex items-center mt-[40px]">
          <div className="max-w-[700px] tablet:pl-20">
            <h1 className="text-[30px] md:text-[45px] font-medium mb-[15px] text-white">
              {section?.title}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text) || "",
              }}
              className="text-white"
            />
            <div className="mt-[40px] text-PrimaryBeige">
              <LinkButton link={`${section?.buttonText?.url}`}>
                {section?.buttonText?.title}
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorienTopSection;
