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
        regularPrice
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
          ... on FlexibleSectionsFlexContentUnderProductSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            image {
              node {
                altText
                sourceUrl
              }
            }
            subsection1Text
            subsection1Title
            subsection2Text
            subsection2Title
            subtitle
            title
          }
          ... on FlexibleSectionsFlexContentBigPictureSectionLayout {
            acfeFlexibleLayoutTitle
            background
            image {
              node {
                altText
                sourceUrl
              }
            }
            fieldGroupName
          }
          ... on FlexibleSectionsFlexContentStarAnimationLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            text
            text2
          }
          ... on FlexibleSectionsFlexContentMoreAboutTheProductSectionLayout {
            acfeFlexibleLayoutTitle
            fieldGroupName
            subsection1Text
            subsection1Title
            subsection2Text
            subsection2Title
            subsection3Text
            subsection3Title
            title
          }
          ... on FlexibleSectionsFlexContentCtaSectionLayout {
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
            subtitle
            text
            title
          }
        }
      }
    }
  }
`;
