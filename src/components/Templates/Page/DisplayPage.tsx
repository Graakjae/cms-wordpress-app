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
import Kassen from "@/components/Pages/Kassen";
import ThankYouPage from "@/components/Pages/ThankYou";
import FAQPage from "@/components/Pages/FAQ";

interface TemplateProps {
  node: ContentNode;
}

export default async function DisplayPage({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: node.databaseId,
  });

  const { globalSections } = await fetchGraphQL<{
    globalSections: GlobalSections;
  }>(print(GlobalQuery));

  const sections = page?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];
  // let blogs: BlogConnection;
  // let products: ProductConnection;
  // let articles: ArticleConnection;
  let atMistePosts: BlogConnection;

  // if (node.uri === "/blog/" || "/historien/") {
  //   ({ blogs } = await fetchGraphQL<{ blogs: BlogConnection }>(
  //     print(PageQuery),
  //     {
  //       id: node.databaseId,
  //     }
  //   ));
  // }

  if (node.uri === "/" || "/at-miste/") {
    ({ atMistePosts } = await fetchGraphQL<{
      atMistePosts: BlogConnection;
    }>(print(PageQuery), {
      id: node.databaseId,
    }));
  }

  // if (node.uri === "/blog/" || "/historien/" || "/at-miste/") {
  //   ({ articles } = await fetchGraphQL<{ articles: ArticleConnection }>(
  //     print(PageQuery),
  //     {
  //       id: node.databaseId,
  //     }
  //   ));
  // }

  // if (node.uri === "/produkter/") {
  //   ({ products } = await fetchGraphQL<{ products: ProductConnection }>(
  //     print(PageQuery),
  //     {
  //       id: node.databaseId,
  //     }
  //   ));
  // }

  const PageToRender = () => {
    switch (node.uri) {
      case "/":
        return (
          <HeroPage
            sections={sections}
            globalSections={globalSections}
            atMistePosts={atMistePosts}
          />
        );
      // case "/produkter/":
      //   return (
      //     <ProductsPage
      //       sections={sections}
      //       products={products}
      //       globalSections={globalSections}
      //     />
      //   );
      // case "/blog/":
      //   return (
      //     <BlogPage
      //       sections={sections}
      //       blogs={blogs}
      //       articles={articles}
      //       globalSections={globalSections}
      //     />
      //   );
      // case "/at-miste/":
      //   return <AtMistePage sections={sections} blogs={atMistePosts} />;
      // case "/kurv/":
      //   return <Kurv />;
      // case "/kassen/":
      //   return <Kassen />;
      // case "/kontakt/":
      //   return <ContactPage sections={sections} />;
      // case "/historien/":
      //   return (
      //     <HistoryPage
      //       sections={sections}
      //       blogs={blogs}
      //       articles={articles}
      //       globalSections={globalSections}
      //     />
      //   );
      // case "/thank-you/":
      //   return <ThankYouPage sections={sections} />;
      // case "faq":
      //   return <FAQPage sections={sections} />;
      default:
        return <p>Page not found</p>;
    }
  };

  return <PageToRender />;
}

export async function getStaticPaths() {
  console.log("getStaticPaths called");

  const response = await fetchGraphQL<{ pages: Array<{ uri: string }> }>(
    print(PageQuery)
  );

  console.log("fetchGraphQL response:", response);

  const pages = response?.pages || [];

  const paths = pages.map((page) => ({
    params: { slug: page.uri.split("/").filter(Boolean) },
  }));

  console.log("Generated paths:", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: { slug: string[] };
}) {
  console.log("getStaticProps called with params:", params);

  const slug = `/${params.slug.join("/")}/`;
  const response = await fetchGraphQL<{ page: Page }>(print(PageQuery), {
    id: slug,
  });

  console.log("fetchGraphQL response for getStaticProps:", response);

  return {
    props: {
      node: response?.page || null,
    },
  };
}
