import Image from "next/image";
import { LinkButton } from "./linkButton";
import { Article } from "@/gql/graphql";
import Link from "next/link";
import { ButtonWithIcon } from "./buttonWithIcon";
import { Button } from "./button";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={article.articleContent?.linkToArticle?.url || ""}>
      <div className="w-[clamp(150px, 50%, 300px)] relative overflow-hidden">
        <div className="w-[clamp(150px, 50%, 300px)]">
          <div className="relative w-full pt-[80%] overflow-hidden">
            <Image
              src={article?.articleContent?.image?.node?.sourceUrl || ""}
              alt={article?.articleContent?.image?.node?.altText || ""}
              width={513}
              height={400}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="">
            <Image
              src={article?.articleContent?.logo?.node?.sourceUrl || ""}
              alt={article?.articleContent?.logo?.node?.altText || ""}
              width={200}
              height={34}
            />
            <p className="text-[18px] mb-[14px] line-clamp-2">
              {article?.articleContent?.shortText || "Default Subtitle"}
            </p>
            <Button
              variant={"link"}
              size="link"
              className={`group overflow-visible relative text-[${"black"}]`}
            >
              Læs artikel
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

export default ArticleCard;
