import { FlexibleSectionsFlexContentBlogTopSectionLayout } from "@/gql/graphql";
import React from "react";
import AtMiste from "../Animations/AtMiste";

interface BlogTopSectionProps {
  section: FlexibleSectionsFlexContentBlogTopSectionLayout;
}

const BlogTopSection: React.FC<BlogTopSectionProps> = ({ section }) => {
  return (
    <div className="w-full md:w-1/2 mt-[50px] md:mt-[115px] mb-[70px] md:mb-[150px] z-20 relative">
      <h1 className="text-[30px] lg:text-[45px] font-semibold">
        {section.title}
      </h1>
      <p className="font-semibold mb-[26px]">{section.subtitle}</p>
      <p className="text-[18px]">{section.text}</p>
    </div>
  );
};

export default BlogTopSection;
