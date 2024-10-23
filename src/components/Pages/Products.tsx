import React from "react";
import ProductsSection from "../Sections/Products";
import {
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentProductSectionLayout,
  FlexibleSectionsFlexContentTestSectionLayout,
} from "@/gql/graphql";
import TestSection from "../Sections/TestSection";

interface ProductsPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
}
const ProductsPage: React.FC<ProductsPageProps> = ({ sections }) => {
  const productsSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentProductSectionLayout"
  ) as FlexibleSectionsFlexContentProductSectionLayout;

  const testSection = sections.find(
    (section) =>
      section.fieldGroupName === "FlexibleSectionsFlexContentTestSectionLayout"
  ) as FlexibleSectionsFlexContentTestSectionLayout;

  return (
    <div>
      <ProductsSection section={productsSection} />
      <TestSection section={testSection} />
    </div>
  );
};

export default ProductsPage;
