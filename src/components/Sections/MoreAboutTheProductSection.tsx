import { FlexibleSectionsFlexContentMoreAboutTheProductSectionLayout } from "@/gql/graphql";
import { formatContent } from "@/utils/formatContent";
interface MoreAboutTheProductSectionProps {
  section: FlexibleSectionsFlexContentMoreAboutTheProductSectionLayout;
}

const MoreAboutTheProductSection: React.FC<MoreAboutTheProductSectionProps> = ({
  section,
}) => {
  return (
    <div className="bg-PrimaryBeige">
      <div className="py-[50px] lg:py-0 tablet:h-[600px] flex flex-col justify-center max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-[30px] tablet:mb-[70px]">
          <h3 className="text-[35px] font-semibold leading-tight">
            {section?.title}
          </h3>
        </div>
        <div className="flex flex-col tablet:flex-row justify-between gap-0 tablet:gap-20">
          <div className="">
            <p className="font-semibold mb-[5px] tablet:mb-[15px]">
              {section.subsection1Title}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.subsection1Text) || "",
              }}
              className="text-[16px]"
            />
          </div>
          <div className="">
            <p className="font-semibold mb-[15px]">
              {section.subsection2Title}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.subsection2Text) || "",
              }}
              className="text-[16px]"
            />
          </div>
          <div className="">
            <p className="font-semibold mb-[15px]">
              {section.subsection3Title}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.subsection3Text) || "",
              }}
              className="text-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreAboutTheProductSection;
