"use client";
import { useState } from "react";
import {
  ArticleConnection,
  BlogConnection,
  FlexibleSectionsFlexContentBlogTopSectionLayout,
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
} from "@/gql/graphql";
import BlogTopSection from "../Sections/BlogTopSection";
import BlogCard from "../ui/blogCard";
import BlogPageAnimation from "../Animations/BlogPage";
import Image from "next/image";
import ArrowRight from "@/public/Icon-feather-arrow-up-right.svg";
import ReadMoreBlogsSection from "../Sections/ReadMoreBlogsSection";
import Divider from "../ui/divider";
import SliderSection from "../Sections/SliderSection";
import PaginationControls from "../ui/paginationControls";

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
  const blogTopSection = sections.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentBlogTopSectionLayout"
  ) as FlexibleSectionsFlexContentBlogTopSectionLayout;

  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.nodes.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.nodes.slice(startIndex, startIndex + blogsPerPage);

  const scrollToTop = () => {
    const topPostElement = document.getElementById("topPost");
    if (topPostElement) {
      const offsetPosition =
        topPostElement.getBoundingClientRect().top + window.scrollY - 135;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      scrollToTop();
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
      scrollToTop();
    }
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const articlesSection = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentArticlesSectionLayout"
  ) as FlexibleSectionsFlexContentMoreBlogsSectionLayout;

  const infiniteSliderSection =
    globalSections?.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  return (
    <div className="pt-[100px] lg:pt-[130px]">
      <div className="bg-Beige relative pb-[200px]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between">
            <BlogTopSection section={blogTopSection} />
            <BlogPageAnimation />
          </div>
          <div
            id="topPost"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[31px] relative"
          >
            {currentBlogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>

          <PaginationControls
            totalPages={totalPages}
            currentPage={currentPage}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            goToPage={goToPage}
          />
        </div>
      </div>
      <ReadMoreBlogsSection articles={articles} section={articlesSection} />
      <Divider />
      <SliderSection section={infiniteSliderSection} />
    </div>
  );
};

export default BlogPage;
