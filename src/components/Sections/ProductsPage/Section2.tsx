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
      <div className="flex">
        <Image
          src={section?.image?.node?.sourceUrl || ""}
          alt={section?.image?.node?.altText || ""}
          className="w-1/2 h-[100vh] object-cover object-middle"
          width={960}
          height={913}
        />
        <div className="h-[100vh] w-1/2 flex items-center justify-center relative bg-Beige">
          <div className="w-[530px]">
            <ProductCard product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2ProductsPage;
