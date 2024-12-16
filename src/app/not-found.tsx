import type { Metadata } from "next";
import { print } from "graphql/language/printer";

import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import {
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  Page,
} from "@/gql/graphql";
import { PageQuery } from "@/components/Templates/Page/PageQuery";
import { SeoQuery } from "@/queries/general/SeoQuery";
import { renderSections } from "@/utils/renderSections";

const notFoundPageWordPressId = 824;

export async function generateMetadata(): Promise<Metadata> {
  const { contentNode } = await fetchGraphQL<{ contentNode: ContentNode }>(
    print(SeoQuery),
    { slug: notFoundPageWordPressId, idType: "DATABASE_ID" }
  );

  const metadata = setSeoData({ seo: contentNode.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
    },
  } as Metadata;
}

export default async function NotFound() {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: notFoundPageWordPressId,
  });

  const sections = page?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];

  return <>{renderSections(sections)}</>;
}
