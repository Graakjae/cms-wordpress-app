import React from "react";
import ProductsTopSection from "../Sections/ProductsTopSection";
import {
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentProductsPageSection2Layout,
  FlexibleSectionsFlexContentProductsPageTopSectionLayout,
  FlexibleSectionsFlexContentProductsSectionLayout,
  ProductConnection,
} from "@/gql/graphql";
import Section2ProductsPage from "../Sections/ProductsPage/Section2";
import ProductSection from "../Sections/Products";

interface ProductsPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  products: ProductConnection;
}
const ProductsPage: React.FC<ProductsPageProps> = ({ sections, products }) => {
  console.log("sections222", sections);
  const productsTopSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentProductsPageTopSectionLayout"
  ) as FlexibleSectionsFlexContentProductsPageTopSectionLayout;

  const section2 = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentProductsPageSection2Layout"
  ) as FlexibleSectionsFlexContentProductsPageSection2Layout;

  const productsSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentProductsSectionLayout"
  ) as FlexibleSectionsFlexContentProductsSectionLayout;

  console.log("section23", section2);
  return (
    <div className="mt-[130px]">
      <ProductsTopSection section={productsTopSection} products={products} />
      <Section2ProductsPage section={section2} products={products} />
      <ProductSection section={productsSection} products={products} />
    </div>
  );
};

export default ProductsPage;
