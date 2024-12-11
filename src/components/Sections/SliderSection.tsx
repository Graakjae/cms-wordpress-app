"use client";
import {
  FlexibleSectionsFlexContentInfiniteSliderSectionLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
} from "@/gql/graphql";
import Image from "next/image";
import { useEffect } from "react";
import Divider from "../ui/divider";

interface SliderSectionProps {
  globalSections: GlobalSections;
  section: FlexibleSectionsFlexContentInfiniteSliderSectionLayout;
}

const SliderSection: React.FC<SliderSectionProps> = ({
  globalSections,
  section,
}) => {
  const infiniteSliderSection =
    globalSections?.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  function addAnimation() {
    const scrollers = document.querySelectorAll(".scroller");

    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", "true");

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    });
  }

  useEffect(() => {
    addAnimation();
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      {section?.divider === "top" && <Divider />}
      <div className="flex items-center justify-between gap-5 mb-[25px] mt-[35px]">
        <div className="">
          <p className="w-[80px] md:w-[200px] md:text-[24px]  font-semibold ">
            Nævnt i:
          </p>
        </div>
        <div className="scroller" data-speed="slow">
          <ul className="tag-list scroller__inner flex flex-wrap gap-[20px] md:gap-[140px]">
            {infiniteSliderSection?.mentionedIn?.map((item, i) => (
              <li className="tag flex justify-center items-center p-4" key={i}>
                <Image
                  className="w-full max-h-[40px] object-contain opacity-50 hover:opacity-90 cursor-pointer"
                  src={item?.logo?.node?.sourceUrl || ""}
                  alt={item?.logo?.node?.altText || ""}
                  width={200}
                  height={40}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {section?.divider === "bottom" && <Divider />}
    </div>
  );
};

export default SliderSection;
