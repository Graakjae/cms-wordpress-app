// Pages.tsx
import { print } from "graphql/language/printer";
import {
  ArticleConnection,
  BlogConnection,
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  GlobalSections,
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
import { GlobalQuery } from "./GlobalQuery";
import ContactPage from "@/components/Pages/Kontakt";
import HistoryPage from "@/components/Pages/Historien";

interface TemplateProps {
  node: ContentNode;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  const { globalSections } = await fetchGraphQL<{
    globalSections: GlobalSections;
  }>(print(GlobalQuery));

  const sections = page?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];
  let blogs: BlogConnection;
  let products: ProductConnection;
  let articles: ArticleConnection;

  if (node.uri === "/blog/" || "/historien/" || "/at-miste/") {
    ({ blogs } = await fetchGraphQL<{ blogs: BlogConnection }>(
      print(PageQuery),
      {
        id: node.databaseId,
      }
    ));
  }

  if (node.uri === "/blog/" || "/historien/" || "/at-miste/") {
    ({ articles } = await fetchGraphQL<{ articles: ArticleConnection }>(
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
        return <HeroPage sections={sections} globalSections={globalSections} />;
      case "/produkter/":
        return <ProductsPage sections={sections} products={products} />;
      case "/blog/":
        return <BlogPage sections={sections} blogs={blogs} />;
      case "/at-miste/":
        return <AtMistePage sections={sections} blogs={blogs} />;
      case "/kurv/":
        return <Kurv />;
      case "/kontakt/":
        return <ContactPage sections={sections} />;
      case "/historien/":
        return (
          <HistoryPage
            sections={sections}
            blogs={blogs}
            articles={articles}
            globalSections={globalSections}
          />
        );
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
