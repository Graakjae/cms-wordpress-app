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
    <div className="flex relative  w-full bg-PrimaryGreen">
      <Image
        src={section?.image?.node?.sourceUrl || ""}
        alt={section?.image?.node?.altText || ""}
        className="w-[45%] h-[80vh] object-cover"
        width={960}
        height={790}
      />
      <div className="h-[80vh] w-[55%] flex items-center">
        <div className="max-w-[700px] pl-20">
          <h1 className="text-[45px] font-medium mb-[15px] text-white">
            {section?.title}
          </h1>
          <p
            dangerouslySetInnerHTML={{
              __html: formatContent(section?.text) || "",
            }}
            className="text-white"
          />
          <div className="mt-[40px]">
            <LinkButton link={`${section?.buttonText?.url}`} color="Beige">
              {section?.buttonText?.title}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistorienTopSection;
