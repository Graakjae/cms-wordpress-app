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
  const excludedProductIds = [
    "cHJvZHVjdDoxMDc5",
    "cHJvZHVjdDoxMDg1",
    "cHJvZHVjdDoxMTA3",
  ];

  // Filter out the products with the specified IDs
  const filteredProducts = products.nodes.filter(
    (product: Product) => !excludedProductIds.includes(product.id)
  );

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 gap-20 py-[70px] lg:py-[150px]">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[30px] relative w-full">
        {filteredProducts.reverse().map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        <div className="hidden md:block w-[clamp(350px, 50%, 500px)] relative overflow-hidden ">
          <div className="w-[clamp(350px, 50%, 500px)]">
            <div className="relative w-full pt-[120%] overflow-hidden bg-PrimaryBeige z-10">
              <div className="absolute inset-0 w-full h-full object-cover px-[30px] py-[30px] lg:px-[20px] lg:py-[20px] xl:px-[35px] xl:py-[35px]">
                <ConnectingStars className="absolute bottom-2 right-1 w-[300px] h-[150px] lg:w-[361px] lg:h-[190px] z-20" />
                <p className="text-[30px] lg:text-[25px] xl:text-[35px] font-semibold mb-[5px]">
                  {section?.title}
                </p>

                <div
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
      <div className="md:hidden mt-[30px] w-full bg-PrimaryBeige relative px-[30px] py-[30px]">
        <ConnectingStars className="absolute bottom-2 right-1 w-[300px] h-[150px] lg:w-[361px] lg:h-[190px] z-20" />
        <p className="text-[30px] lg:text-[22px] xl:text-[35px] font-semibold mb-[5px]">
          {section?.title}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: formatContent(section?.text) || "",
          }}
          className="mb-[30px] relative z-30"
        />
      </div>
    </div>
  );
};

export default ProductSection;
