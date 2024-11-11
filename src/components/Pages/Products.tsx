import React from "react";
import ProductsSection from "../Sections/Products";
import {
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentProductSectionLayout,
  FlexibleSectionsFlexContentProductsPageTopSectionLayout,
  ProductConnection,
} from "@/gql/graphql";

interface ProductsPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  products: ProductConnection;
}
const ProductsPage: React.FC<ProductsPageProps> = ({ sections, products }) => {
  const productsSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentProductsPageTopSectionLayout"
  ) as FlexibleSectionsFlexContentProductsPageTopSectionLayout;

  return (
    <div className="mt-[130px]">
      <ProductsSection section={productsSection} products={products} />
    </div>
  );
};

export default ProductsPage;
