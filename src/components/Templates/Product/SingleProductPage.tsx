import { print } from "graphql/language/printer";
import {
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  SimpleProduct,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ProductQuery } from "./ProductQuery";
import SingleProductSection from "@/components/Sections/SingleProductSection";

interface PageProps {
  node: ContentNode;
}

export default async function SingleProductPage({ node }: PageProps) {
  const { product } = await fetchGraphQL<{ product: SimpleProduct }>(
    print(ProductQuery),
    {
      id: node.databaseId,
    }
  );

  const sections = product?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];

  return (
    <div className="mt-[130px]">
      <SingleProductSection product={product} sections={sections} />
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetchGraphQL<{
    products: { nodes: Array<{ slug: string }> };
  }>(print(ProductQuery));

  const paths = response.products.nodes.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const response = await fetchGraphQL<{ product: SimpleProduct }>(
    print(ProductQuery),
    {
      id: params.slug,
    }
  );

  return {
    props: {
      product: response?.product || null,
    },
  };
}
