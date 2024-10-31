import { FlexibleSectionsFlexContentProductSectionLayout } from "@/gql/graphql";
import React from "react";
import { ButtonWithIcon } from "../ui/buttonWithIcon";
import Image from "next/image";

interface ProductSectionProps {
  section: FlexibleSectionsFlexContentProductSectionLayout;
}

const ProductSection: React.FC<ProductSectionProps> = ({ section }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold underline">{section?.productHeader}</h2>
      <img
        className="w-[200px] rounded-lg"
        src={`${section?.productImage?.node?.sourceUrl || ""}`}
        alt={section?.productImage?.node?.altText || ""}
      />
      <Image
        src={section?.productImage?.node?.sourceUrl || ""}
        alt={section?.productImage?.node?.altText || ""}
        className="w-1/2 h-[80vh] object-cover"
        width={960}
        height={790}
      />
      <ButtonWithIcon>Hej</ButtonWithIcon>
    </div>
  );
};

export default ProductSection;
