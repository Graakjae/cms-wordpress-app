import {
  BlogConnection,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout,
  ArticleConnection,
  AtMistePostConnection,
  Blog,
  FlexibleSectionsFlexContentArticlesSectionLayout,
} from "@/gql/graphql";
import { LinkButton } from "../ui/linkButton";
import BlogCard from "../ui/blogCard";
import ArticleCard from "../ui/articleCard";

interface ArticlesSectionProps {
  section?: FlexibleSectionsFlexContentArticlesSectionLayout;
  blogs?: BlogConnection;
  color?: string;
  articles?: ArticleConnection;
  atMistePosts?: BlogConnection;
  contentType?: string;
}

const ArticlesSection: React.FC<ArticlesSectionProps> = ({ articles }) => {
  return (
    <div className={`relative py-[70px] lg:py-[150px]  `}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="w-full flex justify-between items-center mb-[25px]">
          <h2 className="text-[24px] lg:text-[35px] font-semibold">
            Læs mere om min historie
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] lg:gap-[31px] relative">
          {articles &&
            articles?.nodes
              .slice(0, 3)
              .map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesSection;
