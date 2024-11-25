import {
  FlexibleSectionsFlexContentUnderBlogContentSectionLayout,
  GlobalFlexibleSectionsSectionsUnderBlogContentLayout,
} from "@/gql/graphql";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LinkButton } from "../ui/linkButton";
import { formatContent } from "@/utils/formatContent";
interface UnderBlogContentSectionProps {
  section: GlobalFlexibleSectionsSectionsUnderBlogContentLayout;
}

const UnderBlogContentSection: React.FC<UnderBlogContentSectionProps> = ({
  section,
}) => {
  return (
    <div className="bg-PrimaryBeige relative">
      <div className="flex flex-col lg:flex-row max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full lg:w-1/2 h-[400px]  lg:h-[70vh]"></div>
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute left-0 w-full lg:w-[45%] h-[400px] lg:h-[70vh] object-cover object-top"
          width={960}
          height={913}
        />
        <div className="py-[30px] lg:py-0 lg:h-[70vh] w-full lg:w-[55%] flex items-center lg:justify-end">
          <div className="w-[600px]">
            <h2 className="text-[24px] lg:text-[45px] font-semibold mb-[15px]">
              {section?.title}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text) || "",
              }}
            />
            <LinkButton link={section?.link?.url || ""}>
              {section?.link?.title}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnderBlogContentSection;
