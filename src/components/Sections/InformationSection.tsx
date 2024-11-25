import { FlexibleSectionsFlexContentInformationSectionLayout } from "@/gql/graphql";
import Image from "next/image";
import { ButtonWithIcon } from "../ui/buttonWithIcon";
import VideoComponent from "../ui/videoComponent";
import { LinkButton } from "../ui/linkButton";
import { formatContent } from "@/utils/formatContent";
interface InformationSectionProps {
  section: FlexibleSectionsFlexContentInformationSectionLayout;
}

const InformationSection: React.FC<InformationSectionProps> = ({ section }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between relative py-[70px] lg:py-[150px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="w-full lg:w-[35%] mb-[50px] lg:mb-0">
        <p className="text-[16px] lg:text-[18px] font-medium mb-[30px]">
          {section?.title}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: formatContent(section?.text) || "",
          }}
        />
        <LinkButton link={`${section?.buttonText?.url}`}>
          {section?.buttonText?.title}
        </LinkButton>
      </div>

      <div className="w-full lg:w-[55%] flex items-center">
        <p className="text-[24px] lg:text-[35px] italic">
          {section?.rightBigText}
        </p>
      </div>
    </div>
  );
};

export default InformationSection;
