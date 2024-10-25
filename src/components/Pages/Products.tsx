import React from "react";
import ProductsSection from "../Sections/Products";
import {
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentProductSectionLayout,
} from "@/gql/graphql";

interface ProductsPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}
const ProductsPage: React.FC<ProductsPageProps> = ({ sections }) => {
  const productsSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentProductSectionLayout"
  ) as FlexibleSectionsFlexContentProductSectionLayout;

  return (
    <div>
      <ProductsSection section={productsSection} />
    </div>
  );
};

export default ProductsPage;
