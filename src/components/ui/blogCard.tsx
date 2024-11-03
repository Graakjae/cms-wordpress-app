import Image from "next/image";
import { LinkButton } from "./linkButton";
import { Blog } from "@/gql/graphql";

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <div key={blog.id} className="mb-8 max-w-[513px] relative">
      <div className="bg-Beige/75 absolute top-5 right-0 py-[8px]">
        {blog?.categories?.nodes?.map((category) => (
          <span
            key={category?.id}
            className="italic font-light text-[18px] px-[30px] "
          >
            {category?.name}
          </span>
        ))}
      </div>
      <Image
        src={blog?.blogContent?.blogPostImage?.node?.sourceUrl || ""}
        alt={blog?.blogContent?.blogPostImage?.node?.altText || ""}
        width={513}
        height={400}
        className="w-[513px] h-[400px] object-cover"
      />
      <p className="text-[22px] font-semibold mt-[14px]">
        {blog?.blogContent?.titel || "Default Title"}
      </p>
      <p className="text-[18px] mb-[14px]">
        {blog?.blogContent?.subtitle || "Default Subtitle"}
      </p>
      <LinkButton color="black" link={`/blog/${blog.slug}`}>
        Læs mere
      </LinkButton>
    </div>
  );
};

export default BlogCard;
