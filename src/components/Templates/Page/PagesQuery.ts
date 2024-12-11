import gql from "graphql-tag";

export const PagesQuery = gql`
  query PagesQuery {
    pages {
      nodes {
        uri
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
              text
              image {
                node {
                  sourceUrl
                  altText
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
              blogsOrAtMiste
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
            ... on FlexibleSectionsFlexContentShareYourStoryFormLayout {
              acfeFlexibleLayoutTitle
              buttonText1
              fieldGroupName
              text
              title
            }
            ... on FlexibleSectionsFlexContentThankYouPageSectionLayout {
              acfeFlexibleLayoutTitle
              fieldGroupName
              link {
                title
                url
              }
              text
              title
            }
            ... on FlexibleSectionsFlexContentInfiniteSliderSectionLayout {
              acfeFlexibleLayoutTitle
              fieldGroupName
              divider
            }
          }
        }
      }
    }
  }
`;
