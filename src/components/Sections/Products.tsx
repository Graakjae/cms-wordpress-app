import { FlexibleSectionsFlexContentProductSectionLayout } from "@/gql/graphql";
import React from "react";

interface ProductSectionProps {
  section: FlexibleSectionsFlexContentProductSectionLayout;
}

const ProductSection: React.FC<ProductSectionProps> = ({ section }) => {
  console.log("section", section);
  return (
    <div>
      <h2 className="produkt-header">{section?.productHeader}</h2>
      <img
        src={`${section?.productImage?.node?.sourceUrl || ""}`}
        alt={section?.productImage?.node?.altText || ""}
      />
    </div>
  );
};

export default ProductSection;
