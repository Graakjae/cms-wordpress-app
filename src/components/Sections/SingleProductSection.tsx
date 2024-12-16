"use client";
import {
  FlexibleSectionsFlexContentAccordionLayout,
  FlexibleSectionsFlexContentLayout,
  MediaItem,
  SimpleProduct,
} from "@/gql/graphql";
import { formatContent } from "@/utils/formatContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Accordion } from "../ui/accordion";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { useCart } from "../Globals/Cart/useCart";
import PlusIcon from "../icons/Plus";
import MinusIcon from "../icons/Minus";
import SmallGoldStarIcon from "../icons/SmallGoldStar";
import { TransitionLink } from "@/utils/TransitionLink";
import { useToast } from "@/hooks/use-toast";

interface SingleProductSectionProps {
  product: SimpleProduct;
  sections: Array<FlexibleSectionsFlexContentLayout>;
}

const SingleProductSection: React.FC<SingleProductSectionProps> = ({
  product,
  sections,
}) => {
  const [selectedImage, setSelectedImage] = useState<MediaItem | null>(
    product?.galleryImages?.nodes[0] || null
  );

  const [quantity, setQuantity] = useState(1);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleImageClick = (image: MediaItem) => {
    setSelectedImage(image);
  };

  const { toast } = useToast();

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(
      product?.id,
      product?.productId.toString(),
      product?.name || "",
      product?.price || "",
      quantity,
      product?.galleryImages?.nodes[0]?.sourceUrl || ""
    );
    toast({
      title: "Produkt tilføjet til kurv",
      description: `${quantity} x ${product?.name}`,
    });
  };

  const specificationsAccordion = sections?.find(
    (section) =>
      section.fieldGroupName === "FlexibleSectionsFlexContentAccordionLayout"
  ) as FlexibleSectionsFlexContentAccordionLayout;

  return (
    <div className=" pt-[30px] md:pt-[60px] pb-[150px] flex flex-col tablet:flex-row justify-between gap-[40px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="flex flex-col-reverse xsm:flex-row tablet:flex-col-reverse xl:flex-row xsm:gap-x-[25px] w-full tablet:w-[50%] max-h-full xsm:max-h-[600px] tablet:max-h-full  xl:max-h-[800px]">
        <div className="flex flex-row xsm:flex-col tablet:flex-row xl:flex-col gap-[25px] overflow-y-auto tablet:overflow-x-auto tablet:overflow-clip xl:overflow-y-auto max-h-[160px] xsm:max-h-full  xl:max-h-full">
          {product?.galleryImages?.nodes.map((image: MediaItem) => (
            <Image
              key={image?.sourceUrl}
              src={image?.sourceUrl || ""}
              alt={image?.altText || ""}
              width={135}
              height={160}
              className="cursor-pointer object-cover w-[80px] h-[95px] tablet:w-[135px] tablet:h-[160px] xl:w-[135px] xl:h-[160px]"
              onClick={() => handleImageClick(image)}
            />
          ))}
        </div>
        <div className="mb-[25px] h-full xsm:h-[600px] tablet:h-full w-full">
          {selectedImage && (
            <Image
              src={selectedImage.sourceUrl || ""}
              alt={selectedImage.altText || ""}
              width={640}
              height={800}
              className="object-cover h-full w-full"
            />
          )}
        </div>
      </div>
      <div className="max-h-[800px] overflow-y-auto relative w-full tablet:w-[50%] flex justify-center">
        <div className="tablet:max-w-[480px] relative">
          <h1 className="font-semibold text-[30px] md:text-[45px]">
            {product?.name}
          </h1>
          <p className="font-semibold mb-[35px]">Aftenstjerner</p>
          <div
            className="mb-[40px]"
            dangerouslySetInnerHTML={{
              __html: formatContent(product?.description) || "",
            }}
          />
          <p className="text-[16px] mb-[5px]">
            <b>Forfatter:</b> Stine Rathcke Vestergård
          </p>
          <p className="text-[16px] mb-[50px]">
            <b>Designer:</b> Cathrine Buus Pedersen
          </p>
          <div className="flex justify-between items-end mb-[20px]">
            <p className="text-[35px] h-[44px]">{product.price}</p>
            {product?.id === "cHJvZHVjdDoxMDc5" && (
              <TransitionLink
                href="/vare/barnets-bog-smaa-skoenhedsfejl"
                className="text-[16px] underline-offset-0"
              >
                Køb produkt som 2. sortering
              </TransitionLink>
            )}
          </div>
          <div className="flex justify-between gap-[15px]">
            <div className="w-[30%] h-[60px] flex justify-around items-center mb-[20px] border-[0.5px] border-[#797979]">
              <div
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                className={`${
                  quantity === 1
                    ? "text-[#797979]/50"
                    : "text-[#797979] cursor-pointer hover:text-black"
                }  p-2  text-[20px]`}
              >
                <MinusIcon />
              </div>
              <p>{quantity}</p>
              <div
                onClick={() => setQuantity(quantity + 1)}
                className="text-[#797979] hover:text-black p-2 cursor-pointer text-[20px]"
              >
                <PlusIcon />
              </div>
            </div>
            <Button className="w-[70%]" size="lg" onClick={handleAddToCart}>
              Læg i kurv
            </Button>
          </div>
          <p className="text-[16px] mb-[40px] tablet:mb-[77px] italic">
            *Du får <span className="underline">gratis fragt</span> på alle
            varer på aftenstjerner.dk
          </p>
          <Accordion
            type="single"
            collapsible
            className={` ${
              isAccordionOpen ? "" : "border-b-[0.5px]"
            } border-t-[0.5px] border-[#707070] py-[20px] relative`}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger
                onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                className=" flex justify-between items-center w-full "
              >
                <p className="text-[18px]">Specifikationer</p>
                <div className="pr-[20px]">
                  {isAccordionOpen ? <MinusIcon /> : <PlusIcon />}
                </div>
              </AccordionTrigger>
              <AccordionContent className="mt-[20px] absolute max-h-[150px]  border-b-[0.5px] border-[#707070]">
                {specificationsAccordion?.specifications?.map((spec, index) => (
                  <div
                    key={index}
                    className="mb-[20px] flex items-start gap-[10px]"
                  >
                    <SmallGoldStarIcon />
                    <p className="w-full text-[16px]">
                      {spec?.specificationText}
                    </p>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SingleProductSection;
