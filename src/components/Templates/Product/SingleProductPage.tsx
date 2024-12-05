import { print } from "graphql/language/printer";
import {
  ContentNode,
  FlexibleSectionsFlexContentBigPictureSectionLayout,
  FlexibleSectionsFlexContentCtaSectionLayout,
  FlexibleSectionsFlexContentInformationSectionLayout,
  FlexibleSectionsFlexContentLayout,
  FlexibleSectionsFlexContentMoreAboutTheProductSectionLayout,
  FlexibleSectionsFlexContentStarAnimationLayout,
  FlexibleSectionsFlexContentUnderProductSectionLayout,
  GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout,
  GlobalSections,
  ProductConnection,
  SimpleProduct,
} from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { ProductQuery } from "./ProductQuery";
import SingleProductSection from "@/components/Sections/SingleProductSection";
import InformationSection from "@/components/Sections/InformationSection";
import UnderProductSection from "@/components/Sections/UnderProductSection";
import BigPictureSection from "@/components/Sections/BigPictureSection";
import StarAnimationSection from "@/components/Sections/StarAnimationSection";
import MoreAboutTheProductSection from "@/components/Sections/MoreAboutTheProductSection";
import CTASection from "@/components/Sections/CTASection";
import SimilarProductsSection from "@/components/Sections/SimilarProducts";
import { PageQuery } from "../Page/PageQuery";
import { GlobalQuery } from "../Page/GlobalQuery";
import SliderSection from "@/components/Sections/SliderSection";
import Divider from "@/components/ui/divider";

interface PageProps {
  node: ContentNode;
}

export default async function SingleProductPage({ node }: PageProps) {
  const { product } = await fetchGraphQL<{ product: SimpleProduct }>(
    print(ProductQuery),
    {
      id: node.databaseId,
    }
  );

  const { products } = await fetchGraphQL<{ products: ProductConnection }>(
    print(PageQuery),
    {
      id: node.databaseId,
    }
  );

  const { globalSections } = await fetchGraphQL<{
    globalSections: GlobalSections;
  }>(print(GlobalQuery));

  const infiniteSliderSection =
    globalSections.globalFlexibleSections?.sections?.find(
      (section) =>
        section?.fieldGroupName ===
        "GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout"
    ) as GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout;

  const sections = product?.flexibleSections
    ?.flexContent as FlexibleSectionsFlexContentLayout[];

  const informationSection = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentInformationSectionLayout"
  ) as FlexibleSectionsFlexContentInformationSectionLayout;

  const underProductSection = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentUnderProductSectionLayout"
  ) as FlexibleSectionsFlexContentUnderProductSectionLayout;

  const bigPictureSection = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentBigPictureSectionLayout"
  ) as FlexibleSectionsFlexContentBigPictureSectionLayout;

  const starAnimation = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentStarAnimationLayout"
  ) as FlexibleSectionsFlexContentStarAnimationLayout;

  const moreAboutTheProductSection = sections?.find(
    (section) =>
      section.fieldGroupName ===
      "FlexibleSectionsFlexContentMoreAboutTheProductSectionLayout"
  ) as FlexibleSectionsFlexContentMoreAboutTheProductSectionLayout;

  const ctaSection = sections?.find(
    (section) =>
      section.fieldGroupName === "FlexibleSectionsFlexContentCtaSectionLayout"
  ) as FlexibleSectionsFlexContentCtaSectionLayout;

  return (
    <div className="mt-[100px] lg:mt-[130px]">
      <SingleProductSection product={product} sections={sections} />
      {underProductSection && (
        <UnderProductSection section={underProductSection} />
      )}
      {informationSection && (
        <InformationSection section={informationSection} />
      )}
      {bigPictureSection && <BigPictureSection section={bigPictureSection} />}
      {starAnimation && <StarAnimationSection section={starAnimation} />}
      {moreAboutTheProductSection && (
        <MoreAboutTheProductSection section={moreAboutTheProductSection} />
      )}
      {ctaSection && <CTASection section={ctaSection} />}
      <SimilarProductsSection product={product} products={products} />
      <Divider />
      <SliderSection section={infiniteSliderSection} />
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetchGraphQL<{
    products: { nodes: Array<{ slug: string }> };
  }>(print(ProductQuery));

  const paths = response.products.nodes.map((product) => ({
    params: { slug: product.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const response = await fetchGraphQL<{ product: SimpleProduct }>(
    print(ProductQuery),
    {
      id: params.slug,
    }
  );

  return {
    props: {
      product: response?.product || null,
    },
  };
}
