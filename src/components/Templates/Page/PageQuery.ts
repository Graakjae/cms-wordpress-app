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
            heroSection: acfeFlexibleLayoutTitle
            fieldGroupName
            heroHeader
          }
          ... on FlexibleSectionsFlexContentTestSectionLayout {
            testSection: acfeFlexibleLayoutTitle
            fieldGroupName
            testPageText
            title
          }
          ... on FlexibleSectionsFlexContentProductSectionLayout {
            productSection: acfeFlexibleLayoutTitle
            fieldGroupName
            productHeader
            productImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }
  }
`;
