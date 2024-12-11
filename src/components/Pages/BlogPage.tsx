"use client";
import { useState } from "react";
import {
  ArticleConnection,
  BlogConnection,
  FlexibleSectionsFlexContentLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
} from "@/gql/graphql";
import BlogCard from "../ui/blogCard";
import BlogPageAnimation from "../Animations/BlogPage";
import Divider from "../ui/divider";
import SliderSection from "../Sections/SliderSection";
import PaginationControls from "../ui/paginationControls";
import { renderSections } from "@/utils/renderSections";

interface BlogPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
  articles: ArticleConnection;
  globalSections: GlobalSections;
}

const BlogPage: React.FC<BlogPageProps> = ({
  sections,
  blogs,
  articles,
  globalSections,
}) => {
  return (
    <div className="pt-[100px] lg:pt-[130px]">
      {renderSections(sections, { articles, globalSections, blogs })}
    </div>
  );
};

export default BlogPage;
