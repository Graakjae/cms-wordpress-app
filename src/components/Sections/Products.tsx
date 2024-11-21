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
        {products.nodes.reverse().map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <div className="w-[clamp(350px, 50%, 500px)] relative overflow-hidden ">
          <div className="w-[clamp(350px, 50%, 500px)]">
            <div className="relative w-full pt-[120%] overflow-hidden bg-BackgroundBeige z-10">
              <div className="absolute inset-0 w-full h-full object-cover px-[35px] py-[35px]">
                <ConnectingStars className="absolute bottom-2 right-1 w-[300px] h-[150px] lg:w-[361px] lg:h-[190px] z-20" />
                <p className="text-[25px] font-semibold mb-[5px]">
                  {section?.title}
                </p>
                {/* <p className="font-semibold mt-[5px] mb-[26px]">
                  {section?.subtitle}
                </p> */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: formatContent(section?.text) || "",
                  }}
                  className="mb-[30px] relative z-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
