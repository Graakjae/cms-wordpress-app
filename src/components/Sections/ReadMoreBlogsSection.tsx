import {
  BlogConnection,
  GlobalFlexibleSectionsSectionsReadMoreBlogsLayout,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout,
  ArticleConnection,
  AtMistePostConnection,
  Blog,
} from "@/gql/graphql";
import { LinkButton } from "../ui/linkButton";
import BlogCard from "../ui/blogCard";
import ArticleCard from "../ui/articleCard";

interface ReadMoreBlogsSectionProps {
  section?: FlexibleSectionsFlexContentMoreBlogsSectionLayout;
  globalSection?: GlobalFlexibleSectionsSectionsReadMoreBlogsLayout;
  blogs?: BlogConnection;
  color?: string;
  articles?: ArticleConnection;
  atMistePosts?: BlogConnection;
  contentType?: string;
}

const ReadMoreBlogsSection: React.FC<ReadMoreBlogsSectionProps> = ({
  section,
  globalSection,
  blogs,
  articles,
  color,
  atMistePosts,
  contentType,
}) => {
  return (
    <div
      className={`relative py-[70px] lg:py-[150px] ${
        color ? `bg-${color}` : ""
      } ${contentType === "at-miste-post" && "bg-PrimaryGreen text-white"}`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full flex justify-between items-center mb-[25px]">
          <h2 className="text-[24px] lg:text-[35px] font-semibold">
            {globalSection ? globalSection?.title : section?.title}
          </h2>
          <LinkButton
            color="black"
            link={
              globalSection
                ? globalSection?.link?.url || ""
                : section?.link?.url || ""
            }
          >
            {globalSection ? globalSection?.link?.title : section?.link?.title}
          </LinkButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[31px] relative">
          {blogs &&
            blogs?.nodes
              .slice(0, 3)
              .map((blog) => (
                <BlogCard key={blog.id} blog={blog} slug="/blogpost/" />
              ))}

          {articles &&
            articles?.nodes
              .slice(0, 3)
              .map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}

          {atMistePosts &&
            atMistePosts?.nodes
              .slice(0, 3)
              .map((atMistePost) => (
                <BlogCard
                  key={atMistePost.id}
                  blog={atMistePost}
                  slug="/at-miste-post/"
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ReadMoreBlogsSection;
