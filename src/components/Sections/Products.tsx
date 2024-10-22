import { FlexibleSectionsFlexContentProductSectionLayout } from "@/gql/graphql";
import React from "react";
import { Button } from "../ui/button";
import { ButtonWithIcon } from "../ui/buttonWithIcon";

interface ProductSectionProps {
  section: FlexibleSectionsFlexContentProductSectionLayout;
}

const ProductSection: React.FC<ProductSectionProps> = ({ section }) => {
  console.log("section", section);
  return (
    <div>
      <h2 className="text-3xl font-bold underline">{section?.productHeader}</h2>
      <img
        className="w-[100px] rounded-lg"
        src={`${section?.productImage?.node?.sourceUrl || ""}`}
        alt={section?.productImage?.node?.altText || ""}
      />
      <Button variant={"default"}>Primary</Button>
      <ButtonWithIcon>Secondary knap</ButtonWithIcon>
    </div>
  );
};

export default ProductSection;
