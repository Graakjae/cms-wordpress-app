import {
  BlogConnection,
  GlobalFlexibleSectionsSectionsReadMoreBlogsLayout,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout,
  ArticleConnection,
  AtMistePostConnection,
  Blog,
  FlexibleSectionsFlexContentShareYourStoryFormLayout,
} from "@/gql/graphql";
import { LinkButton } from "../ui/linkButton";
import BlogCard from "../ui/blogCard";
import ArticleCard from "../ui/articleCard";
import { formatContent } from "@/utils/formatContent";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ShareYourStoryFormProps {
  section?: FlexibleSectionsFlexContentShareYourStoryFormLayout;
}

const ShareYourStoryForm: React.FC<ShareYourStoryFormProps> = ({ section }) => {
  console.log("sotrysection", section);
  return (
    <div className="flex flex-col tablet:flex-row">
      <div>
        <p className="text-[24px] tablet:text-[35px]">{section?.title}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: formatContent(section?.text) || "",
          }}
        />
      </div>
      <div>
        <div className="flex">
          <Input type="text" />
          <Input type="email" />
        </div>
        <input type="radio" name="" id="" />
      </div>
      <Button>{section?.buttonText1}</Button>
    </div>
  );
};

export default ShareYourStoryForm;
