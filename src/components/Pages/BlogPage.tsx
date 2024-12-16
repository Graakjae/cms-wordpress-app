import {
  ArticleConnection,
  BlogConnection,
  FlexibleSectionsFlexContentLayout,
  GlobalSections,
} from "@/gql/graphql";
import { renderSections } from "@/utils/renderSections";

interface BlogPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
  articles: ArticleConnection;
  globalSections: GlobalSections;
}

const BlogPage: React.FC<BlogPageProps> = ({
  sections,
  blogs,
  articles,
  globalSections,
}) => {
  return (
    <div className="pt-[100px] lg:pt-[130px]">
      {renderSections(sections, { articles, globalSections, blogs })}
    </div>
  );
};

export default BlogPage;
