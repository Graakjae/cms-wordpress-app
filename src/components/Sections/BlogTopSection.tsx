import { FlexibleSectionsFlexContentBlogTopSectionLayout } from "@/gql/graphql";
import React from "react";

interface BlogTopSectionProps {
  section: FlexibleSectionsFlexContentBlogTopSectionLayout;
}

const BlogTopSection: React.FC<BlogTopSectionProps> = ({ section }) => {
  return (
    <div>
      <h1 className="text-[45px] font-semibold">{section.title}</h1>
      <p className="font-semibold">{section.subtitle}</p>
      <p>{section.text}</p>
    </div>
  );
};

export default BlogTopSection;
