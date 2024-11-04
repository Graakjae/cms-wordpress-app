import Image from "next/image";
import { LinkButton } from "./linkButton";
import { Blog } from "@/gql/graphql";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div
      key={blog.id}
      className="w-[clamp(150px, 50%, 300px)] relative overflow-hidden"
    >
      <div className="bg-Beige/75 absolute top-5 right-0 py-[8px] z-10">
        {blog?.categories?.nodes?.map((category) => (
          <span
            key={category?.id}
            className="italic font-light text-[18px] px-[30px] "
          >
            {category?.name}
          </span>
        ))}
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
          <p className="text-[22px] font-semibold mt-[14px]">
            {blog?.blogContent?.titel || "Default Title"}
          </p>
          <p className="text-[18px] mb-[14px] line-clamp-2">
            {blog?.blogContent?.subtitle || "Default Subtitle"}
          </p>
          <LinkButton color="black" link={`/blog/${blog.slug}`}>
            Læs mere
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
