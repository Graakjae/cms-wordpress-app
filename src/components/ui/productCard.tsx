"use client";
import Image from "next/image";
import {
  FlexibleSectionsFlexContentProductImageHoverLayout,
  MediaItem,
  SimpleProduct,
} from "@/gql/graphql";
import Link from "next/link";
import { useState } from "react";
import { TransitionLink } from "@/utils/TransitionLink";

interface ProductCardProps {
  product: SimpleProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const firstImage: MediaItem | undefined = product?.galleryImages?.nodes[0];
  const secondImage: MediaItem | undefined = product?.galleryImages?.nodes[1];

  const firstImageUrl = firstImage?.sourceUrl || "";
  const secondImageUrl = secondImage?.sourceUrl || "";
  const firstImageAlt = firstImage?.altText || "";
  const secondImageAlt = secondImage?.altText || "";

  // Find the section with fieldGroupName "FlexibleSectionsFlexContentProductImageHoverLayout"
  const hoverSection = product?.flexibleSections?.flexContent?.find(
    (section) =>
      section?.fieldGroupName ===
      "FlexibleSectionsFlexContentProductImageHoverLayout"
  ) as FlexibleSectionsFlexContentProductImageHoverLayout;

  return (
    <TransitionLink
      href={`/vare/${product?.slug}`}
      key={product?.id}
      className="w-[clamp(350px, 50%, 500px)] relative overflow-hidden"
    >
      <div className="w-[clamp(350px, 50%, 500px)]">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full pt-[120%] overflow-hidden"
        >
          <Image
            src={isHovered && secondImage ? secondImageUrl : firstImageUrl}
            alt={isHovered && secondImage ? secondImageAlt : firstImageAlt}
            width={510}
            height={610}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {isHovered && hoverSection && (
            <div className="hidden md:block absolute bottom-0 w-full bg-PrimaryBeige bg-opacity-75">
              <p className="text-center my-[30px] italic">
                {hoverSection?.hoverText || ""}
              </p>
            </div>
          )}
        </div>
        <p className="text-center text-[18px] lg:text-[22px] mt-[15px] mb-[5px]">
          {product?.name}
        </p>
        <div className="text-center text-[15px] lg:text-[18px] mt-[5px]">
          {product?.regularPrice && product?.regularPrice !== product?.price ? (
            <>
              <span className="line-through mr-2 opacity-60">
                {product?.regularPrice}
              </span>
              <span>{product?.price}</span>
            </>
          ) : (
            <span>{product?.price}</span>
          )}
        </div>
      </div>
    </TransitionLink>
  );
};

export default ProductCard;
