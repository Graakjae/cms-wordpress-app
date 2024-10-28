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
            buttonText
            text1
            text2
            image {
              node {
                sourceUrl
                altText
              }
            }
          }
          ... on FlexibleSectionsFlexContentProductSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            productHeader
            productImage {
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
            buttonText
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
            buttonText
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
          ... on FlexibleSectionsFlexContentHeroPageSection4Layout {
            acfeFlexibleLayoutTitle
            buttonText
            fieldGroupName
            rightBigText
            text
            text2
            title
          }
          ... on FlexibleSectionsFlexContentHeroPageSection5Layout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            image {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;
