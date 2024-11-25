import React from "react";
import ProductsTopSection from "../Sections/ProductsTopSection";
import {
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentProductsPageSection2Layout,
  FlexibleSectionsFlexContentProductsPageTopSectionLayout,
  FlexibleSectionsFlexContentProductsSectionLayout,
  FlexibleSectionsFlexContentStarAnimationLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
  ProductConnection,
} from "@/gql/graphql";
import Section2ProductsPage from "../Sections/ProductsPage/Section2";
import ProductSection from "../Sections/Products";
import StarAnimationSection from "../Sections/StarAnimationSection";
import Divider from "../ui/divider";
import SliderSection from "../Sections/SliderSection";

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

  const starAnimation = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentStarAnimationLayout"
  ) as FlexibleSectionsFlexContentStarAnimationLayout;

  const infiniteSliderSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  return (
    <div className="mt-[100px] lg:mt-[130px]">
      <ProductsTopSection section={productsTopSection} products={products} />
      <Section2ProductsPage section={section2} products={products} />
      <ProductSection section={productsSection} products={products} />
      <StarAnimationSection section={starAnimation} />
      <Divider />
      <SliderSection section={infiniteSliderSection} />
    </div>
  );
};

export default ProductsPage;
