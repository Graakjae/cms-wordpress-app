"use client";
import {
  ArticleConnection,
  BlogConnection,
  FlexibleSectionsFlexContentBlogTopSectionLayout,
  GlobalSections,
} from "@/gql/graphql";
import React, { useState } from "react";
import AtMiste from "../Animations/AtMiste";
import BlogPageAnimation from "../Animations/BlogPage";
import BlogCard from "../ui/blogCard";
import PaginationControls from "../ui/paginationControls";
import AtMisteAnimation from "../Animations/AtMiste";

interface BlogTopSectionProps {
  section: FlexibleSectionsFlexContentBlogTopSectionLayout;
  blogs: BlogConnection;
}

const BlogTopSection: React.FC<BlogTopSectionProps> = ({ section, blogs }) => {
  const blogsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs?.nodes?.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs?.nodes?.slice(
    startIndex,
    startIndex + blogsPerPage
  );

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
  return (
    <div
      className={`${
        section?.blogsOrAtMiste === "Blogs"
          ? "bg-SecondaryBeige"
          : "bg-PrimaryGreen text-white"
      } relative pb-[200px]`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex justify-between">
          <div className="w-full md:w-1/2 mt-[50px] md:mt-[115px] mb-[70px] md:mb-[150px] z-20 relative">
            <h1 className="text-[30px] lg:text-[45px] font-semibold">
              {section.title}
            </h1>
            <p className="font-semibold mb-[26px]">{section.subtitle}</p>
            <p className="text-[18px]">{section.text}</p>
          </div>
          {section?.blogsOrAtMiste === "Blogs" && <BlogPageAnimation />}
          {section?.blogsOrAtMiste === "At Miste" && <AtMisteAnimation />}
        </div>
        <div
          id="topPost"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[31px] relative"
        >
          {currentBlogs?.map((blog) => (
            <BlogCard blog={blog} key={blog.id} slug={"/blogpost/"} />
          ))}
        </div>

        <PaginationControls
          className="bg-PrimaryGold text-white stroke-white"
          totalPages={totalPages}
          currentPage={currentPage}
          goToNextPage={goToNextPage}
          goToPreviousPage={goToPreviousPage}
          goToPage={goToPage}
        />
      </div>
    </div>
  );
};

export default BlogTopSection;
