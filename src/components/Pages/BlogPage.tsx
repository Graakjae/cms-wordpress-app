"use client";
import { useState } from "react";
import {
  ArticleConnection,
  BlogConnection,
  FlexibleSectionsFlexContentBlogTopSectionLayout,
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentMoreBlogsSectionLayout,
} from "@/gql/graphql";
import BlogTopSection from "../Sections/BlogTopSection";
import BlogCard from "../ui/blogCard";
import BlogPageAnimation from "../Animations/BlogPage";
import Image from "next/image";
import ArrowRight from "@/public/Icon-feather-arrow-up-right.svg";
import ReadMoreBlogsSection from "../Sections/ReadMoreBlogsSection";

interface BlogPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: BlogConnection;
  articles: ArticleConnection;
}

const BlogPage: React.FC<BlogPageProps> = ({ sections, blogs, articles }) => {
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

  return (
    <div className="pt-[130px]">
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

          {/* Pagination Controls */}
          <div className="absolute mx-auto right-0 left-0 bottom-[0px] flex items-center justify-center mt-6 space-x-4 pb-[150px]">
            <Image
              onClick={goToPreviousPage}
              src={ArrowRight}
              alt="Arrow Right"
              width={15}
              height={15}
              className={`transform rotate-180 ${
                currentPage === 1 ? "opacity-25" : "cursor-pointer"
              }`}
            />
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => goToPage(index + 1)}
                  className={`px-3 py-1 ${
                    currentPage === index + 1
                      ? "bg-PrimaryGold text-white rounded-full w-[32px] h-[32px]"
                      : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <Image
              onClick={goToNextPage}
              src={ArrowRight}
              alt="Arrow Right"
              width={15}
              height={15}
              className={`${
                currentPage === totalPages ? "opacity-25" : "cursor-pointer"
              }`}
            />
          </div>
        </div>
      </div>
      <ReadMoreBlogsSection articles={articles} section={articlesSection} />
    </div>
  );
};

export default BlogPage;
