"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FlexibleSectionsFlexContentProductsPageSection2Layout,
  ProductConnection,
  SimpleProduct,
} from "@/gql/graphql";
import ProductCard from "@/components/ui/productCard";

interface Section2ProductsPageProps {
  section: FlexibleSectionsFlexContentProductsPageSection2Layout;
  products: ProductConnection;
}

const Section2ProductsPage: React.FC<Section2ProductsPageProps> = ({
  section,
  products,
}) => {
  const product = products?.nodes?.find(
    (product) => product.id === "cHJvZHVjdDoxMTA3"
  ) as SimpleProduct;
  return (
    <div className="bg-PrimaryGreen relative">
      <div className="flex flex-col md:flex-row">
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="w-full md:w-1/2 h-[500px] md:h-[80vh] lg:h-[100vh] object-cover object-middle"
          width={960}
          height={913}
        />
        <div className="md:h-[80vh] lg:h-[100vh] w-full  md:w-1/2 flex items-center justify-center relative bg-PrimaryBeige">
          <div className="w-1/2 md:w-[90%] lg:w-[530px] py-[30px] md:py-0">
            <ProductCard product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2ProductsPage;
