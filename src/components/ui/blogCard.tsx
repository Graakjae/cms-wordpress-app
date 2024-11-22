import Image from "next/image";
import { LinkButton } from "./linkButton";
import { Blog } from "@/gql/graphql";
import Link from "next/link";
import { ButtonWithIcon } from "./buttonWithIcon";
import { Button } from "./button";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  const category = blog?.categories?.nodes[0]?.name || "Aftenstjerner";
  return (
    <Link href={`/blogpost/${blog.slug}`} passHref>
      <div className="w-[clamp(150px, 50%, 300px)] relative overflow-hidden">
        <div className="bg-Beige/75 absolute top-5 right-0 py-[8px] z-10">
          <span className="italic font-light text-[16px] md:text-[18px] px-[30px]">
            {category}
          </span>
        </div>
        <div className="w-[clamp(150px, 50%, 300px)]">
          <div className="relative w-full pt-[80%] overflow-hidden">
            <Image
              src={blog?.blogContent?.blogPostImage?.node?.sourceUrl || ""}
              alt={blog?.blogContent?.blogPostImage?.node?.altText || ""}
              width={513}
              height={400}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="">
            <p className="text-[18px] md:text-[22px] font-semibold mt-[14px] mb-[10px] lg:mb-[5px]">
              {blog?.blogContent?.titel || "Default Title"}
            </p>
            <p className="text-[15px] md:text-[18px] mb-[14px] line-clamp-2">
              {blog?.blogContent?.subtitle || "Default Subtitle"}
            </p>
            <Button
              variant={"link"}
              size="link"
              className={`group overflow-visible relative text-[${"black"}] text-[16px] md:text-[18px] font-semibold`}
            >
              Læs mere
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 15"
                fill="none"
                className="overflow-visible"
              >
                <path
                  className="transition-all duration-300 group-hover:translate-x-[32%] group-hover:transform-origin-left"
                  d="M11.9854 13.5355L18.0209 7.5L11.9854 1.46448"
                  stroke={"black"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="transition-all duration-300 group-hover:scale-x-[1.3] group-hover:transform-origin-left"
                  d="M17.6304 7.44983L0.999935 7.44983"
                  stroke={"black"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
