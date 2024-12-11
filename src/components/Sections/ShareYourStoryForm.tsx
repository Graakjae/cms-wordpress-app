import { FlexibleSectionsFlexContentShareYourStoryFormLayout } from "@/gql/graphql";
import { formatContent } from "@/utils/formatContent";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ShareYourStoryFormProps {
  section?: FlexibleSectionsFlexContentShareYourStoryFormLayout;
}

const ShareYourStoryForm: React.FC<ShareYourStoryFormProps> = ({ section }) => {
  return (
    <div className="flex flex-col tablet:flex-row justify-between md:items-end max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-[70px] md:py-[115px]">
      <div className="max-w-[400px]">
        <p className="text-[24px] tablet:text-[35px] font-semibold mb-[15px]">
          {section?.title}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: formatContent(section?.text) || "",
          }}
        />
      </div>
      <div className="mb-[20px]">
        <div className="flex flex-col md:flex-row gap-4 mb-[20px] ">
          <Input type="text" placeholder="Navn*" />
          <Input type="email" placeholder="Email*" />
        </div>
        <div className="flex gap-4">
          <input type="radio" name="" id="" />
          <p className="text-[15px] text-gray-700">
            Jeg accepterer at mine data bliver videresendt og håndteret efter
            vores persondatapolitik
          </p>
        </div>
      </div>
      <Button className="mb-[20px]">{section?.buttonText1}</Button>
    </div>
  );
};

export default ShareYourStoryForm;
