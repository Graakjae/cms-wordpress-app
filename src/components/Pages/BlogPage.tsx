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
    <div className="mt-[130px] bg-Beige">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <BlogTopSection section={blogTopSection} />
        <div className="flex flex-wrap gap-[31px] ">
          {blogs?.nodes.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
