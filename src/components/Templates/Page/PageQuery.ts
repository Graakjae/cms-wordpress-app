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
            HeroSection: acfeFlexibleLayoutTitle
            fieldGroupName
            heroHeader
          }
          ... on FlexibleSectionsFlexContentTestSectionLayout {
            TestSection: acfeFlexibleLayoutTitle
            fieldGroupName
            testPageText
            title
          }
          ... on FlexibleSectionsFlexContentProductSectionLayout {
            ProductSection: acfeFlexibleLayoutTitle
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
