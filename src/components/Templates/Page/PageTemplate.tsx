// Pages.tsx
import { print } from "graphql/language/printer";
import {
  BlogConnection,
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  Page,
  ProductConnection,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";
import ProductsPage from "@/components/Pages/Products";
import HeroPage from "@/components/Pages/HeroPage";
import BlogPage from "@/components/Pages/BlogPage";
import AtMistePage from "@/components/Pages/AtMistePage";
import Kurv from "@/components/Pages/Kurv";

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  const sections = page?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];
  let blogs: BlogConnection;
  let products: ProductConnection;

  if (node.uri === "/blog/") {
    ({ blogs } = await fetchGraphQL<{ blogs: BlogConnection }>(
      print(PageQuery),
      {
        id: node.databaseId,
      }
    ));
  }

  if (node.uri === "/produkter/") {
    ({ products } = await fetchGraphQL<{ products: ProductConnection }>(
      print(PageQuery),
      {
        id: node.databaseId,
      }
    ));
  }

  const PageToRender = () => {
    switch (node.uri) {
      case "/":
        return <HeroPage sections={sections} />;
      case "/produkter/":
        return <ProductsPage sections={sections} products={products} />;
      case "/blog/":
        return <BlogPage sections={sections} blogs={blogs} />;
      case "/at-miste/":
        return <AtMistePage sections={sections} blogs={blogs} />;
      case "/kurv/":
        return <Kurv />;
      case "/kontakt/":
        return <>CONTACT PAGE</>;
      case "/historien/":
        return <>HISTORY</>;
      default:
        return <p>Page not found</p>;
    }
  };

  return <PageToRender />;
}

export async function getStaticPaths() {
  const response = await fetchGraphQL<{ pages: Array<{ slug: string }> }>(
    print(PageQuery)
  );
  const pages = response?.pages || [];

  const paths = pages.map((page) => ({
    params: { slug: page.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const response = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: params.slug,
  });

  return {
    props: {
      page: response?.page || null,
    },
  };
}
