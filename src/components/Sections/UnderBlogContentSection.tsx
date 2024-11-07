import {
  FlexibleSectionsFlexContentUnderBlogContentSectionLayout,
  GlobalFlexibleSectionsSectionsUnderBlogContentLayout,
} from "@/gql/graphql";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { LinkButton } from "../ui/linkButton";
interface UnderBlogContentSectionProps {
  section: GlobalFlexibleSectionsSectionsUnderBlogContentLayout;
}

const UnderBlogContentSection: React.FC<UnderBlogContentSectionProps> = ({
  section,
}) => {
  const formattedText = section.text
    ? section.text.replace(/<p>/g, "<p class='text-[18px] mb-[20px]'>")
    : "";
  return (
    <div className="bg-Beige relative">
      <div className="flex max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-1/2 h-[70vh]"></div>
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="absolute left-0 w-[45%] h-[70vh] object-cover object-top"
          width={960}
          height={913}
        />
        <div className="h-[70vh] w-[55%] flex items-center justify-end">
          <div className="w-[600px]">
            <h2 className="text-[45px] font-semibold mb-[15px]">
              {section?.title}
            </h2>
            <p dangerouslySetInnerHTML={{ __html: formattedText || "" }} />
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
