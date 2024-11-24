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
import PaginationControls from "../ui/paginationControls";
import AtMisteAnimation from "../Animations/AtMiste";

interface AtMisteProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
  articles: ArticleConnection;
  globalSections: GlobalSections;
}

const AtMistePage: React.FC<AtMisteProps> = ({
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
      <div className="bg-PrimaryGreen relative pb-[200px] text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between">
            <BlogTopSection section={blogTopSection} />
            <AtMisteAnimation />
          </div>
          <div
            id="topPost"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[31px] relative stroke-white"
          >
            {currentBlogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>

          <PaginationControls
            className="stroke-white bg-PrimaryBeige text-PrimaryGreen"
            totalPages={totalPages}
            currentPage={currentPage}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
            goToPage={goToPage}
          />
        </div>
      </div>
      Section
    </div>
  );
};

export default AtMistePage;
