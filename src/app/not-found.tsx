import type { Metadata } from "next";
import { print } from "graphql/language/printer";

import { setSeoData } from "@/utils/seoData";

import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ContentNode, Page } from "@/gql/graphql";
import { PageQuery } from "@/components/Templates/Page/PageQuery";
import { SeoQuery } from "@/queries/general/SeoQuery";
import Link from "next/link";
import { LinkButton } from "@/components/ui/linkButton";

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

  return (
    <div className=" h-[90vh] flex flex-col justify-center items-center">
      <h1 className="text-[30px] md:text-[45px] text-center">
        Hov! Den side findes ikke.
      </h1>
      <p className="text-[20px] text-center mb-[30px]">
        Siden du prøver at finde, findes ikke længere eller er blevet flyttet
        til en ny webadresse.
      </p>
      <div className="text-PrimaryGreen">
        <LinkButton link="/"> Gå til forsiden</LinkButton>
      </div>
    </div>
  );
}
