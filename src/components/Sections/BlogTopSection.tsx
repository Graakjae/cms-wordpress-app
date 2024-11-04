import { FlexibleSectionsFlexContentBlogTopSectionLayout } from "@/gql/graphql";
import React from "react";
import AtMiste from "../Animations/AtMiste";

interface BlogTopSectionProps {
  section: FlexibleSectionsFlexContentBlogTopSectionLayout;
}

const BlogTopSection: React.FC<BlogTopSectionProps> = ({ section }) => {
  return (
    <div className="w-1/2 mt-[115px]">
      <h1 className="text-[45px] font-semibold">{section.title}</h1>
      <p className="font-semibold mb-[26px]">{section.subtitle}</p>
      <p className="mb-[150px]">{section.text}</p>
    </div>
  );
};

export default BlogTopSection;
