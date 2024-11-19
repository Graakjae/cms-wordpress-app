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
    <div className="flex justify-between relative py-[150px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="w-[35%]">
        <p className="text-[18px] font-medium mb-[30px]">{section?.title}</p>
        <p
          dangerouslySetInnerHTML={{
            __html: formatContent(section?.text) || "",
          }}
          className="text-[18px] mt-[15px] mb-[20px]"
        />
        <LinkButton color="PrimaryGreen" link={`${section?.buttonText?.url}`}>
          {section?.buttonText?.title}
        </LinkButton>
      </div>

      <div className="w-[55%] flex items-center">
        <p className="text-[2rem] italic">{section?.rightBigText}</p>
      </div>
    </div>
  );
};

export default InformationSection;
