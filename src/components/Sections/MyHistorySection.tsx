import { FlexibleSectionsFlexContentMyHistorySectionLayout } from "@/gql/graphql";
import { LinkButton } from "../ui/linkButton";
import { formatContent } from "@/utils/formatContent";
interface MyHistorySectionProps {
  section: FlexibleSectionsFlexContentMyHistorySectionLayout;
}

const MyHistorySection: React.FC<MyHistorySectionProps> = ({ section }) => {
  return (
    <div className="flex justify-between relative py-[150px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <div>
        <p className="text-[35px] font-semibold mb-[5px]">{section?.title}</p>
        <p className="text-[18px] font-medium mb-[15px]">{section?.subtitle}</p>
        <div className="flex justify-between gap-20">
          <div className="w-1/2">
            <p
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text1) || "",
              }}
              className="text-[18px] "
            />
          </div>
          <div className="w-1/2">
            <p
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text2) || "",
              }}
              className="text-[18px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyHistorySection;
