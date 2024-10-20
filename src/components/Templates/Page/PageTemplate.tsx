import { print } from "graphql/language/printer";
import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";
import HeroSection from "@/components/Sections/Hero";
import TestSection from "@/components/Sections/TestSection";
import ProductsSection from "@/components/Sections/Products";
interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  console.log("page data", page);

  return (
    <div>
      {page?.flexibleSections?.flexContent?.map((section, index) => {
        switch (section?.fieldGroupName) {
          case "FlexibleSectionsFlexContentHeroSectionLayout":
            return <HeroSection key={index} hero={section} />;
          case "FlexibleSectionsFlexContentTestSectionLayout":
            return <TestSection key={index} test={section} />;
          case "FlexibleSectionsFlexContentProductSectionLayout":
            return <ProductsSection key={index} productSection={section} />;
          default:
            return <p key={index}>Unknown section type</p>;
        }
      })}
    </div>
  );
}

export async function getStaticPaths() {
  // Fetch all pages or slugs
  const response = await fetchGraphQL<{ pages: Array<{ slug: string }> }>(
    print(PageQuery)
  );
  const pages = response?.pages; // Accessing `data` property safely

  // Create paths array
  const paths =
    pages?.map((page) => ({
      params: { slug: page.slug },
    })) || [];

  return {
    paths,
    fallback: false, // fallback can be true or false depending on your strategy
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // Fetch the page data dynamically using the slug
  const response = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: params.slug, // assuming you're fetching by slug
  });

  const page = response?.page; // Accessing `data` safely

  return {
    props: {
      page,
    },
  };
}
