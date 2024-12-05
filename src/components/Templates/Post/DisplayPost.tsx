import { print } from "graphql/language/printer";
import {
  Blog,
  BlogConnection,
  ContentNode,
  GlobalSections,
} from "@/gql/graphql";
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
  const { atMistePost } = await fetchGraphQL<{ atMistePost: Blog }>(
    print(PostQuery),
    { id: node.databaseId }
  );
  const { blogs } = await fetchGraphQL<{ blogs: BlogConnection }>(
    print(PageQuery),
    { id: node.databaseId }
  );

  return (
    <div className="mt-[100px] lg:mt-[130px]">
      <BlogContent
        blog={node.contentTypeName === "blogpost" ? blog : atMistePost}
        contentType={node.contentTypeName}
      />
      <UnderBlogContentSection section={underBlogContentSection || ""} />
      <ReadMoreBlogsSection
        globalSection={readMoreBlogsSection || ""}
        blogs={blogs}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const blogResponse = await fetchGraphQL<{
    blogs: { nodes: Array<{ slug: string }> };
  }>(print(PostQuery));
  const atMisteResponse = await fetchGraphQL<{
    atMistePosts: { nodes: Array<{ slug: string }> };
  }>(print(PostQuery));

  const blogPaths = blogResponse.blogs.nodes.map((blog) => ({
    params: { slug: blog.slug, contentType: "blogpost" },
  }));

  const atMistePaths = atMisteResponse.atMistePosts.nodes.map((post) => ({
    params: { slug: post.slug, contentType: "atMistePost" },
  }));

  return {
    paths: [...blogPaths, ...atMistePaths],
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string; contentType: string };
}) {
  const isBlogpost = params.contentType === "blogpost";

  const response = await fetchGraphQL<{ blog: Blog }>(print(PostQuery), {
    id: params.slug,
  });
  const responseAtMiste = await fetchGraphQL<{ atMistePost: Blog }>(
    print(PostQuery),
    { id: params.slug }
  );

  console.log(
    "Fetched data for:",
    params.slug,
    isBlogpost ? response.blog : responseAtMiste.atMistePost
  );

  return {
    props: {
      blog: isBlogpost ? response.blog : responseAtMiste.atMistePost || null,
      contentType: params.contentType,
    },
  };
}
