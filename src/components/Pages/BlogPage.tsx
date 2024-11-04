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
import BlogPageAnimation from "../Animations/BlogPage";

interface BlogPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
}

const BlogPage: React.FC<BlogPageProps> = ({ sections, blogs }) => {
  const blogTopSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentBlogTopSectionLayout"
  ) as FlexibleSectionsFlexContentBlogTopSectionLayout;
  return (
    <div className="pt-[130px] bg-Beige">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between">
          <BlogTopSection section={blogTopSection} />
          <BlogPageAnimation />
        </div>
        <div className="grid grid-cols-3 gap-[31px] relative">
          {blogs?.nodes.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
