import { FlexibleSectionsFlexContentMyHistorySectionLayout } from "@/gql/graphql";
import { LinkButton } from "../ui/linkButton";
import { formatContent } from "@/utils/formatContent";
interface MyHistorySectionProps {
  section: FlexibleSectionsFlexContentMyHistorySectionLayout;
}

const MyHistorySection: React.FC<MyHistorySectionProps> = ({ section }) => {
  return (
    <div className="flex justify-between relative py-[70px] lg:py-[150px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <div>
        <p className="text-[24px] lg:text-[35px] font-semibold mb-[5px]">
          {section?.title}
        </p>
        <p className="font-medium mb-[15px]">{section?.subtitle}</p>
        <div className="flex flex-col tablet:flex-row justify-between tablet:gap-20">
          <div className="w-full tablet:w-1/2">
            <div
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text1) || "",
              }}
            />
          </div>
          <div className="w-full tablet:w-1/2">
            <div
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text2) || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHistorySection;
