import { print } from "graphql/language/printer";
import {
  Blog,
  BlogConnection,
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  GlobalSections,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PostQuery } from "./PostQuery";
import BlogContent from "@/components/Sections/BlogContent";
import { GlobalQuery } from "../Page/GlobalQuery";
import UnderBlogContentSection from "@/components/Sections/UnderBlogContentSection";
import ReadMoreBlogsSection from "@/components/Sections/ReadMoreBlogsSection";
import { PageQuery } from "../Page/PageQuery";
import { renderSections } from "@/utils/renderSections";

interface TemplateProps {
  node: ContentNode;
}

export default async function DisplayPost({ node }: TemplateProps) {
  const { globalSections } = await fetchGraphQL<{
    globalSections: GlobalSections;
  }>(print(GlobalQuery));

  const underBlogContentSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsUnderBlogContentLayout"
    );

  const readMoreBlogsSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsReadMoreBlogsLayout"
    );

  const { blog } = await fetchGraphQL<{ blog: Blog }>(print(PostQuery), {
    id: node.databaseId,
  });

  const sections = blog?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];

  const { atMistePost } = await fetchGraphQL<{ atMistePost: Blog }>(
    print(PostQuery),
    { id: node.databaseId }
  );
  const { blogs } = await fetchGraphQL<{ blogs: BlogConnection }>(
    print(PageQuery),
    { id: node.databaseId }
  );

  const { atMistePosts } = await fetchGraphQL<{ atMistePosts: BlogConnection }>(
    print(PageQuery),
    { id: node.databaseId }
  );

  return (
    <div className="mt-[100px] lg:mt-[130px]">
      <BlogContent
        blog={node.contentTypeName === "blogpost" ? blog : atMistePost}
        contentType={node.contentTypeName}
      />
      <div
        className={`${node.contentTypeName === "at-miste-post" && "hidden"}`}
      >
        <UnderBlogContentSection section={underBlogContentSection || ""} />
      </div>
      <ReadMoreBlogsSection
        globalSection={readMoreBlogsSection || ""}
        blogs={node.contentTypeName === "blogpost" ? blogs : undefined}
        atMistePosts={
          node.contentTypeName === "at-miste-post" ? atMistePosts : undefined
        }
        contentType={node.contentTypeName}
      />
      {renderSections(sections)}
    </div>
  );
}
