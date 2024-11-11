import gql from "graphql-tag";

export const ProductQuery = gql`
  query ProductQuery($id: ID!) {
    product(id: $id, idType: DATABASE_ID) {
      id
      name
      description
      ... on SimpleProduct {
        id
        name
        galleryImages {
          nodes {
            altText
            sourceUrl
          }
        }
        price
      }
      flexibleSections {
        flexContent {
          ... on FlexibleSectionsFlexContentAccordionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            specifications {
              fieldGroupName
              specificationText
            }
          }
        }
      }
    }
  }
`;
