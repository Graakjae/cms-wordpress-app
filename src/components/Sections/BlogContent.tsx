import { Blog } from "@/gql/graphql";
import FacebookIcon from "../icons/Facebook";
import InstagramIcon from "../icons/Instagram";
import Link from "next/link";
import Image from "next/image";
import { formatContent } from "@/utils/formatContent";
import { TransitionLink } from "@/utils/TransitionLink";

interface BlogContentProps {
  blog: Blog;
  contentType: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ blog, contentType }) => {
  const blogContent = blog?.blogContent;
  const category = blog?.categories?.nodes[0]?.name;
  return (
    <div>
      <div
        className={`${
          contentType === "blogpost" ? "bg-SecondaryBeige" : "bg-PrimaryGreen"
        } absolute h-[450px] w-full z-[-1]`}
      ></div>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-[50px] lg:pt-[115px]">
        <div
          className={`${
            contentType === "blogpost" ? "text-black" : "text-white"
          } flex flex-col lg:flex-row gap-4 lg:gap-20 justify-between items-center`}
        >
          <div>
            <p className="text-[16px] lg:text-[18px] font-semibold">
              {category}
            </p>
            <h1 className="text-[30px] lg:text-[45px] font-semibold">
              {blogContent?.titel}
            </h1>
          </div>
          <p className="text-[16px] lg:text-[18px]">{blogContent?.subtitle}</p>
        </div>
        <Image
          src={blogContent?.blogPostImage?.node.sourceUrl || ""}
          alt={blogContent?.blogPostImage?.node.altText || ""}
          width={1400}
          height={580}
          className="w-full object-cover mt-[30px] lg:mt-[50px] h-[250px] lg:h-[580px]"
        />
        <div className="max-w-[1000px] mx-auto sm:px-6 lg:px-8 mt-[60px]">
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
            <div className=" lg:w-full pl-[25px] flex flex-col lg:flex-row justify-end items-center gap-2">
              <p className="text-[16px] text-center font-light">Del:</p>
              <div className="flex justify-end items-center gap-4">
                <TransitionLink href="https://www.facebook.com/Aftenstjerner">
                  <FacebookIcon />
                </TransitionLink>
                <TransitionLink href="https://www.instagram.com/aftenstjerner/">
                  <InstagramIcon />
                </TransitionLink>
              </div>
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
