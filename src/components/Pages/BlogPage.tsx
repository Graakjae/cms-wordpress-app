import {
  Blog,
  ContentNode,
  FlexibleSectionsFlexContentLayout,
} from "@/gql/graphql";
import { PageQuery } from "../Templates/Page/PageQuery";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { print } from "graphql";
import Image from "next/image";
import { LinkButton } from "../ui/linkButton";

interface BlogPageProps {
  sections: Array<FlexibleSectionsFlexContentLayout>;
  blogs: any;
}

const BlogPage: React.FC<BlogPageProps> = ({ sections, blogs }) => {
  return (
    <div className="mt-[130px] bg-Beige">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-[45px] font-semibold">Aftenstjerners blog</h1>
        <p className="font-semibold">Min fortælling og seneste nyt</p>
        <p>
          Jeg hedder Stine, og jeg står bag Aftenstjerner og den nye Barnets Bog
          til dig, der har mistet et spædbarn. Jeg har valgt at dele min egen
          historie, som er hele årsagen til at bogen er blevet til. Her har du
          mulighed for at læse min historie og seneste nyt om Aftenstjerner.
        </p>
        <div className="flex flex-wrap gap-[31px] ">
          {blogs?.nodes.map((blog) => (
            <div key={blog.id} className="mb-8 max-w-[513px]">
              <Image
                src={blog.blogContent.blogPostImage.node.sourceUrl}
                alt={blog.blogContent.blogPostImage.node.altText}
                width={513}
                height={400}
                className="w-[513px] h-[400px] object-cover"
              />
              <p className="text-[22px] font-semibold mt-[14px]">
                {blog.blogContent.titel}
              </p>
              <p className="text-[18px] mb-[14px]">
                {blog.blogContent.subtitle}
              </p>
              <LinkButton link={`/blog/${blog.slug}`}>Læs mere</LinkButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
