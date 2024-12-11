import { print } from "graphql/language/printer";
import {
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
  ProductConnection,
  SimpleProduct,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ProductQuery } from "./ProductQuery";
import SingleProductSection from "@/components/Sections/SingleProductSection";
import { PageQuery } from "../Page/PageQuery";
import { GlobalQuery } from "../Page/GlobalQuery";
import SliderSection from "@/components/Sections/SliderSection";
import Divider from "@/components/ui/divider";
import { renderSections } from "@/utils/renderSections";

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

  const { products } = await fetchGraphQL<{ products: ProductConnection }>(
    print(PageQuery),
    {
      id: node.databaseId,
    }
  );

  const { globalSections } = await fetchGraphQL<{
    globalSections: GlobalSections;
  }>(print(GlobalQuery));

  const infiniteSliderSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  const sections = product?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];

  return (
    <div className="mt-[100px] lg:mt-[130px]">
      <SingleProductSection product={product} sections={sections} />
      {renderSections(sections, { products })}
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
