"use client";
import { GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout } from "@/gql/graphql";
import Image from "next/image";
import { useEffect } from "react";

interface SliderSectionProps {
  section: GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;
}

const SliderSection: React.FC<SliderSectionProps> = ({ section }) => {
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
    <div className="flex items-center justify-between gap-5 mb-[65px] mt-[35px] max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
      <div className="h-[40px]">
        <p className="w-[200px] text-[24px] font-semibold ">Nævnt i:</p>
      </div>
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner flex flex-wrap gap-[140px]">
          {section?.mentionedIn?.map((item, i) => (
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
  );
};

export default SliderSection;
