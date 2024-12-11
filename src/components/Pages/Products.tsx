import React from "react";
import {
  FlexibleSectionsFlexContentLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
  ProductConnection,
} from "@/gql/graphql";
import Divider from "../ui/divider";
import SliderSection from "../Sections/SliderSection";
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
