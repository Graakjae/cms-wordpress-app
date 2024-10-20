import React from "react";
import { FlexibleSectionsFlexContentProductSectionLayout } from "@/gql/graphql";

interface ProductsSectionProps {
  productSection: FlexibleSectionsFlexContentProductSectionLayout;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({
  productSection,
}) => {
  return (
    <div>
      <h2>{productSection.productHeader}</h2>
      <img
        src={`${productSection?.productImage?.node?.sourceUrl || ""}`}
        alt={productSection?.productImage?.node?.altText || ""}
      />
    </div>
  );
};

export default ProductsSection;
