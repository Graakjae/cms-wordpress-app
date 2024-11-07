import { print } from "graphql/language/printer";
import { Blog, BlogConnection, ContentNode, GlobalBro } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";

import { PostQuery } from "./PostQuery";
import BlogContent from "@/components/Sections/BlogContent";
import { GlobalQuery } from "../Page/GlobalQuery";
import UnderBlogContentSection from "@/components/Sections/UnderBlogContentSection";
import ReadMoreBlogsSection from "@/components/Sections/ReadMoreBlogsSection";
import { PageQuery } from "../Page/PageQuery";

interface TemplateProps {
  node: ContentNode;
}

export default async function PostTemplate({ node }: TemplateProps) {
  const { globalBro } = await fetchGraphQL<{
    globalBro: GlobalBro;
  }>(print(GlobalQuery));

  const underBlogContentSection =
    globalBro.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsUnderBlogContentLayout"
    );

  const readMoreBlogsSection = globalBro.globalFlexibleSections?.sections?.find(
    (section) =>
      section?.fieldGroupName ===
      "GlobalFlexibleSectionsSectionsReadMoreBlogsLayout"
  );

  const { blog } = await fetchGraphQL<{ blog: Blog }>(print(PostQuery), {
    id: node.databaseId,
  });

  const { atMistePost } = await fetchGraphQL<{ atMistePost: Blog }>(
    print(PostQuery),
    {
      id: node.databaseId,
    }
  );

  const { blogs } = await fetchGraphQL<{ blogs: BlogConnection }>(
    print(PageQuery),
    {
      id: node.databaseId,
    }
  );

  return (
    <div className="mt-[130px]">
      <BlogContent
        blog={node.contentTypeName === "blogpost" ? blog : atMistePost}
      />
      <UnderBlogContentSection section={underBlogContentSection || ""} />
      <ReadMoreBlogsSection
        section={readMoreBlogsSection || ""}
        blogs={blogs}
      />
    </div>
  );
}
