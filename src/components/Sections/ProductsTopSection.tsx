import {
  FlexibleSectionsFlexContentProductsPageTopSectionLayout,
  Product,
  ProductConnection,
  SimpleProduct,
} from "@/gql/graphql";
import React from "react";
import { ButtonWithIcon } from "../ui/buttonWithIcon";
import Image from "next/image";
import { formatContent } from "@/utils/formatContent";
import ProductCard from "../ui/productCard";
import Link from "next/link";
import { TransitionLink } from "@/utils/TransitionLink";

interface ProductTopSectionProps {
  section: FlexibleSectionsFlexContentProductsPageTopSectionLayout;
  products: ProductConnection;
}

const ProductTopSection: React.FC<ProductTopSectionProps> = ({
  section,
  products,
}) => {
  const barnetsBog = products?.nodes?.find(
    (product) => product.id === "cHJvZHVjdDoxMDc5"
  ) as SimpleProduct;
  const mindeAeske = products?.nodes?.find(
    (product) => product.id === "cHJvZHVjdDoxMDg1"
  ) as SimpleProduct;

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col lg:flex-row gap-20 py-[70px] lg:py-[150px]">
      <div className="w-full lg:w-[30%] flex flex-col lg:flex-row  items-center">
        <div>
          <h1 className="text-[25px] xl:text-[35px] font-semibold">
            {section?.title}
          </h1>
          <p className="font-semibold mt-[5px] mb-[26px]">
            {section?.subtitle}
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: formatContent(section?.text) || "",
            }}
          />
          <TransitionLink
            href={`${section?.buttonText?.url}`}
            className="mt-[10px]"
          >
            <ButtonWithIcon>{section?.buttonText?.title}</ButtonWithIcon>
          </TransitionLink>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-[31px] relative w-full lg:w-[70%]">
        <ProductCard product={barnetsBog} />
        <ProductCard product={mindeAeske} />
      </div>
    </div>
  );
};

export default ProductTopSection;
