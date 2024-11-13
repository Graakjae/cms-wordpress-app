import { print } from "graphql/language/printer";
import {
  ContentNode,
  FlexibleSectionsFlexContentLayout,
  MediaItem,
  Product,
  SimpleProduct,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ProductQuery } from "./ProductQuery";
import Image from "next/image";
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

  const sections = product?.flexibleSections?.flexContent?.map(
    (section) => section
  ) as FlexibleSectionsFlexContentLayout[];

  return (
    <div className="mt-[130px]">
      <SingleProductSection product={product} sections={sections} />
    </div>
  );
}
