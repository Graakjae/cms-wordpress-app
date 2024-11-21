import gql from "graphql-tag";

export const PageQuery = gql`
  query PageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      flexibleSections {
        flexContent {
          ... on FlexibleSectionsFlexContentHeroSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            title
            subtitle
            buttonText {
              title
              url
            }
            text1
            text2
            image {
              node {
                sourceUrl
                altText
              }
            }
          }

          ... on FlexibleSectionsFlexContentInfiniteSliderSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            mentionedIn {
              fieldGroupName
              logo {
                node {
                  altText
                  sourceUrl
                }
              }
            }
          }
          ... on FlexibleSectionsFlexContentHeroPageSection2Layout {
            acfeFlexibleLayoutTitle
            buttonText {
              title
              url
            }
            fieldGroupName
            leftImage {
              node {
                altText
                sourceUrl
              }
            }
            testimonialText
            text
            title
            video {
              url
            }
          }
          ... on FlexibleSectionsFlexContentHeroPageSection3Layout {
            acfeFlexibleLayoutTitle
            buttonText {
              title
              url
            }
            subtitle
            text
            text2
            title
            fieldGroupName
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on FlexibleSectionsFlexContentInformationSectionLayout {
            acfeFlexibleLayoutTitle
            buttonText {
              title
              url
            }
            fieldGroupName
            rightBigText
            text
            title
          }
          ... on FlexibleSectionsFlexContentHeroPageSection5Layout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            testimonials {
              fieldGroupName
              testimonialText
              testimonialBy
            }
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on FlexibleSectionsFlexContentProductsPageTopSectionLayout {
            acfeFlexibleLayoutTitle
            buttonText {
              title
              url
            }
            fieldGroupName
            subtitle
            text
            title
          }
          ... on FlexibleSectionsFlexContentProductsPageSection2Layout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on FlexibleSectionsFlexContentProductsSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            subtitle
            text
            title
          }
          ... on FlexibleSectionsFlexContentContactTopSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            mail
            text
            title
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on FlexibleSectionsFlexContentHistoryTopSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            buttonText {
              title
              url
            }
            image {
              node {
                altText
                sourceUrl
              }
            }
            text
            title
          }
          ... on FlexibleSectionsFlexContentMyHistorySectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            subtitle
            text1
            text2
            title
          }
          ... on FlexibleSectionsFlexContentStarAnimationLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            text
            text2
          }
          ... on FlexibleSectionsFlexContentBlogTopSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            subtitle
            text
            title
          }
          ... on FlexibleSectionsFlexContentUnderBlogContentSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            link {
              title
              url
            }
            text
            title
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
          ... on FlexibleSectionsFlexContentMoreBlogsSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            title
            link {
              title
              url
            }
          }
          ... on FlexibleSectionsFlexContentArticlesSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            link {
              title
              url
            }
            title
          }
        }
      }
    }
    blogs {
      nodes {
        blogContent {
          fieldGroupName
          postContent
          subtitle
          titel
          blogPostImage {
            node {
              altText
              sourceUrl
            }
          }
        }
        categories {
          nodes {
            name
            id
          }
        }
        slug
        id
      }
    }
    atMistePosts {
      nodes {
        blogContent {
          fieldGroupName
          postContent
          subtitle
          titel
          author
          blogPostImage {
            node {
              altText
              sourceUrl
            }
          }
        }
        categories {
          nodes {
            name
            id
          }
        }
        slug
        id
      }
    }
    articles {
      nodes {
        articleContent {
          fieldGroupName
          image {
            node {
              altText
              sourceUrl
            }
          }
          linkToArticle {
            title
            url
          }
          logo {
            node {
              altText
              sourceUrl
            }
          }
          shortText
        }
      }
    }
    products {
      nodes {
        ... on SimpleProduct {
          id
          name
          price
          slug
          galleryImages {
            nodes {
              altText
              sourceUrl
            }
          }
          flexibleSections {
            flexContent {
              ... on FlexibleSectionsFlexContentProductImageHoverLayout {
                acfeFlexibleLayoutTitle
                fieldGroupName
                hoverText
              }
            }
            fieldGroupName
          }
        }

        description
        image {
          altText
          sourceUrl
        }
      }
    }
  }
`;
