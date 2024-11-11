import {
  BlogConnection,
  BlogContent,
  ContentNode,
  FlexibleSectionsFlexContentBlogTopSectionLayout,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import { PageQuery } from "../Templates/Page/PageQuery";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { print } from "graphql";
import Image from "next/image";
import { LinkButton } from "../ui/linkButton";
import BlogTopSection from "../Sections/BlogTopSection";
import BlogCard from "../ui/blogCard";
import AtMisteAnimation from "../Animations/AtMiste";

interface AtMistePageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
}

const AtMistePage: React.FC<AtMistePageProps> = ({ sections, blogs }) => {
  const blogTopSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentBlogTopSectionLayout"
  ) as FlexibleSectionsFlexContentBlogTopSectionLayout;

  return (
    <div className="pt-[130px] bg-PrimaryGreen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between">
          <BlogTopSection section={blogTopSection} />
          <AtMisteAnimation />
        </div>
        <div className="grid grid-cols-3 gap-[31px] relative">
          {blogs?.nodes.map((blog) => (
            <BlogCard blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AtMistePage;
