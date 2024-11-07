import {
  BlogConnection,
  GlobalFlexibleSectionsSectionsReadMoreBlogsLayout,
} from "@/gql/graphql";
import { LinkButton } from "../ui/linkButton";
import BlogCard from "../ui/blogCard";
interface ReadMoreBlogsSectionProps {
  section: GlobalFlexibleSectionsSectionsReadMoreBlogsLayout;
  blogs: BlogConnection;
}

const ReadMoreBlogsSection: React.FC<ReadMoreBlogsSectionProps> = ({
  section,
  blogs,
}) => {
  return (
    <div className="relative py-[150px]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full flex justify-between">
          <h2 className="text-[35px] font-semibold mb-[15px]">
            {section?.title}
          </h2>
          <LinkButton link={section?.link?.url || ""}>
            {section?.link?.title}
          </LinkButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[31px] relative">
          {blogs?.nodes.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreBlogsSection;
