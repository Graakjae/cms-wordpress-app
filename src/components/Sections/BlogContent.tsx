import { Blog } from "@/gql/graphql";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import Link from "next/link";
import Image from "next/image";

interface BlogContentProps {
  blog: Blog;
}

const BlogContent: React.FC<BlogContentProps> = ({ blog }) => {
  const blogContent = blog?.blogContent;
  const category = blog?.categories?.nodes[0]?.name;

  const formattedContent = blogContent?.postContent
    // Remove <p> tags wrapping <img> tags
    ?.replace(/<p>(\s*<img [^>]+>\s*)<\/p>/g, "$1")
    // Ensure every <img> tag has the py-[50px] class, merging with existing classes if present
    ?.replace(
      /<img([^>]*class=['"])([^'"]*)(['"][^>]*>)/g,
      "<img$1$2 my-[50px]$3"
    )
    ?.replace(/<img(?![^>]*class=)([^>]*)>/g, "<img class='my-[50px]' $1>")
    .replace(/<p>/g, "<p class='text-[18px] mb-[20px]'>")
    .replace(/<h2>/g, "<h2 class='text-2xl font-bold'>")
    .replace(/<h3>/g, "<h3 class='text-[35px] font-semibold mt-[50px]'>")
    .replace(/<h4>/g, "<h4 class='text-[24px] font-semibold'>")
    .replace(/<h5>/g, "<h5 class='text-base font-bold'>")
    .replace(/<h6>/g, "<h6 class='text-sm font-bold'>")
    .replace(/<strong>/g, "<strong class='font-bold'>")
    .replace(/<em>/g, "<em class='italic'>")
    .replace(/<ul>/g, "<ul class='list-disc pl-4'>")
    .replace(/<ol>/g, "<ol class='list-decimal pl-4'>")
    .replace(/<a /g, "<a class='text-blue-500 underline' ")
    .replace(
      /<blockquote>/g,
      "<blockquote class='border-l-4 border-gray-500 pl-4'>"
    );
  return (
    <div>
      <div className="bg-Beige absolute h-[450px] w-full z-[-1]"></div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 pt-[115px]">
        <div className="flex gap-20 justify-between items-center">
          <div>
            <p className="text-[18px] font-semibold">{category}</p>
            <h1 className="text-[45px] font-semibold">{blogContent?.titel}</h1>
          </div>
          <p className="text-[18px]">{blogContent?.subtitle}</p>
        </div>
        <Image
          src={blogContent?.blogPostImage?.node.sourceUrl || ""}
          alt={blogContent?.blogPostImage?.node.altText || ""}
          width={1400}
          height={580}
          className="w-full object-cover mt-[50px] h-[580px]"
        />
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 md:px-8 mt-[60px]">
          <div className="flex justify-between">
            <div className="flex justify-between w-full">
              <div>
                <p className="text-[16px] font-light">Skrevet af</p>
                <p className="text-[16px] mt-[10px]">{blogContent?.author}</p>
              </div>
              <div>
                <p className="text-[16px] font-light">Udgivet</p>
                <p className="text-[16px] mt-[10px]">{category}</p>
              </div>
            </div>
            <div className="w-full flex justify-end items-center gap-4">
              <p className="text-[16px] font-light">Del:</p>
              <Link
                href="https://www.facebook.com/Aftenstjerner"
                target="_blank"
              >
                <FacebookIcon />
              </Link>
              <Link
                href="https://www.instagram.com/aftenstjerner/"
                target="_blank"
              >
                <InstagramIcon />
              </Link>
            </div>
          </div>
          <div className="border-b border-[#C6C6C6] my-[45px]"></div>
          <p className="italic text-[20px] mb-[50px]">
            {blogContent?.subtitle}
          </p>
          <div
            className="mb-[100px]"
            dangerouslySetInnerHTML={{ __html: formattedContent || "" }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
