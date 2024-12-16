import React from "react";
import {
  FlexibleSectionsFlexContentLayout,
  GlobalSections,
  ProductConnection,
} from "@/gql/graphql";
import { renderSections } from "@/utils/renderSections";

interface ProductsPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  products: ProductConnection;
  globalSections: GlobalSections;
}
const ProductsPage: React.FC<ProductsPageProps> = ({
  sections,
  products,
  globalSections,
}) => {
  return (
    <div className="mt-[100px] lg:mt-[130px]">
      {renderSections(sections, { products, globalSections })}
    </div>
  );
};

export default ProductsPage;
