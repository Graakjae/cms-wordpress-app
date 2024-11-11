import {
  FlexibleSectionsFlexContentProductsPageTopSectionLayout,
  Product,
  ProductConnection,
} from "@/gql/graphql";
import React from "react";
import { ButtonWithIcon } from "../ui/buttonWithIcon";
import Image from "next/image";
import { formatContent } from "@/utils/formatContent";
import ProductCard from "../ui/productCard";

interface ProductSectionProps {
  section: FlexibleSectionsFlexContentProductsPageTopSectionLayout;
  products: ProductConnection;
}

const ProductSection: React.FC<ProductSectionProps> = ({
  section,
  products,
}) => {
  console.log("products", products);
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex gap-20 py-[150px]">
      <div className="w-[30%] flex items-center">
        <div>
          <h1 className="text-[35px] font-semibold">{section?.title}</h1>
          <p className="font-semibold mt-[5px] mb-[26px]">
            {section?.subtitle}
          </p>
          <p
            dangerouslySetInnerHTML={{
              __html: formatContent(section?.text) || "",
            }}
            className="mb-[30px]"
          />
          <ButtonWithIcon>{section?.buttonText}</ButtonWithIcon>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[31px] relative w-[70%]">
        {products.nodes.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
