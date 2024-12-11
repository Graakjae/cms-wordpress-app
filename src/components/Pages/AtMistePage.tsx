"use client";
import { useState } from "react";
import {
  BlogConnection,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import BlogCard from "../ui/blogCard";
import PaginationControls from "../ui/paginationControls";
import AtMisteAnimation from "../Animations/AtMiste";
import { renderSections } from "@/utils/renderSections";

interface AtMisteProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
}

const AtMistePage: React.FC<AtMisteProps> = ({ sections, blogs }) => {
  return (
    <div className="pt-[100px] lg:pt-[130px]">
      {renderSections(sections, { blogs })}
    </div>
  );
};

export default AtMistePage;
