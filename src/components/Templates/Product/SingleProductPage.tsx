import { print } from "graphql/language/printer";
import {
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  ProductConnection,
  SimpleProduct,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ProductQuery } from "./ProductQuery";
import SingleProductSection from "@/components/Sections/SingleProductSection";
import { PageQuery } from "../Page/PageQuery";
import { renderSections } from "@/utils/renderSections";
import SimilarProductsSection from "@/components/Sections/SimilarProducts";

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

  const sections = product?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];

  return (
    <div className="mt-[100px] lg:mt-[130px]">
      <SingleProductSection product={product} sections={sections} />
      {renderSections(sections, { products })}
      <SimilarProductsSection products={products} product={product} />
    </div>
  );
}
