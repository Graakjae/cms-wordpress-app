import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { print } from "graphql/language/printer";

import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentInfoQuery } from "@/queries/general/ContentInfoQuery";
import { ContentNode } from "@/gql/graphql";
import DisplayPage from "@/components/Templates/Page/DisplayPage";
import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import DisplayPost from "@/components/Templates/Post/DisplayPost";
import { SeoQuery } from "@/queries/general/SeoQuery";
import SingleProductPage from "@/components/Templates/Product/SingleProductPage";
import { PageQuery } from "@/components/Templates/Page/PageQuery";
import { PagesQuery } from "@/components/Templates/Page/PagesQuery";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = nextSlugToWpSlug(params.slug);
  const isPreview = slug.includes("preview");
  console.log("generateMetadata hej hej s");

  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SeoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    }
  );

  if (!contentNode) {
    return notFound();
  }

  const metadata = setSeoData({ seo: contentNode.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
    },
  } as Metadata;
}

export async function generateStaticParams() {
  console.log("generateStaticParams");

  const response = await fetchGraphQL<{
    pages: { nodes: Array<{ uri: string }> };
  }>(print(PagesQuery));

  console.log("fetchGraphQL response:", response);

  const pages = response?.pages?.nodes || [];

  const paths = pages.map((page) => ({
    params: { slug: page.uri.split("/").filter(Boolean) },
  }));

  console.log("Generated paths:", paths);

  return paths;
}

export default async function Page({ params }: Props) {
  const slug = nextSlugToWpSlug(params.slug);
  const isPreview = slug.includes("preview");

  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(ContentInfoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    }
  );

  if (!contentNode) return notFound();

  switch (contentNode.contentTypeName) {
    case "page":
      return <DisplayPage node={contentNode} />;
    case "blogpost":
    case "at-miste-post":
      return <DisplayPost node={contentNode} />;
    case "product":
      return <SingleProductPage node={contentNode} />;

    default:
      return <p>{contentNode.contentTypeName} not implemented</p>;
  }
}
