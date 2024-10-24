import gql from "graphql-tag";

export const PageQuery = gql`
  query PageQuery($id: ID!, $preview: Boolean = false) {
    page(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      test {
        test
      }
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
          ... on FlexibleSectionsFlexContentTestSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            testPageText
            title
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
              # fieldGroupName
              logo {
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
  }
`;
