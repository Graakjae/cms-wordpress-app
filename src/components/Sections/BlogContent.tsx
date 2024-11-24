import { Blog } from "@/gql/graphql";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import Link from "next/link";
import Image from "next/image";
import { formatContent } from "@/utils/formatContent";

interface BlogContentProps {
  blog: Blog;
}

const BlogContent: React.FC<BlogContentProps> = ({ blog }) => {
  const blogContent = blog?.blogContent;
  const category = blog?.categories?.nodes[0]?.name;

  return (
    <div>
      <div className="bg-SecondaryBeige absolute h-[450px] w-full z-[-1]"></div>
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
            dangerouslySetInnerHTML={{
              __html: formatContent(blogContent?.postContent) || "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
