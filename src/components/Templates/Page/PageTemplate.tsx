import { print } from "graphql/language/printer";
import {
  Blog,
  BlogConnection,
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  Page,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";
import ProductsPage from "@/components/Pages/Products";
import HeroPage from "@/components/Pages/HeroPage";
import BlogPage from "@/components/Pages/BlogPage";

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });
  console.log("page", page);
  const sections = page?.flexibleSections?.flexContent?.map(
    (section) => section
  ) as FlexibleSectionsFlexContentLayout[];

  const { blogs } = await fetchGraphQL<{ blogs: BlogConnection }>(
    print(PageQuery),
    {
      id: node.databaseId,
    }
  );

  const PageToRender = () => {
    switch (node.uri) {
      case "/":
        return <HeroPage sections={sections} />;
      case "/produkter/":
        return <ProductsPage sections={sections} />;
      case "/blog/":
        return <BlogPage sections={sections} blogs={blogs} />;

      default:
        return <p>Page not found</p>;
    }
  };

  return <PageToRender />;
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
