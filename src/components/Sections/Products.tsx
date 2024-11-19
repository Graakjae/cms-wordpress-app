import {
  FlexibleSectionsFlexContentProductsSectionLayout,
  Product,
  ProductConnection,
} from "@/gql/graphql";
import React from "react";
import { formatContent } from "@/utils/formatContent";
import ProductCard from "../ui/productCard";
import ConnectingStars from "../icons/ConnectingStars";

interface ProductSectionProps {
  section: FlexibleSectionsFlexContentProductsSectionLayout;
  products: ProductConnection;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  section,
  products,
}) => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex gap-20 py-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] relative w-full">
        {products.nodes.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <div className="w-full flex items-center bg-Beige h-max-[80%]">
          <div className="mx-[35px] my-[50px]">
            <p className="text-[35px] font-semibold mb-[5px]">
              {section?.title}
            </p>
            <p className="font-semibold mt-[5px] mb-[26px]">
              {section?.subtitle}
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: formatContent(section?.text) || "",
              }}
              className="mb-[30px]"
            />
            <ConnectingStars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
