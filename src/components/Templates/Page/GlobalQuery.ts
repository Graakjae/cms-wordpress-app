import gql from "graphql-tag";

export const GlobalQuery = gql`
  query GlobalQuery {
    globalBro {
      globalFlexibleSections {
        fieldGroupName
        sections {
          ... on GlobalFlexibleSectionsSectionsUnderBlogContentLayout {
            fieldGroupName
            text
            image {
              node {
                altText
                sourceUrl
              }
            }
            link {
              title
              url
            }
            title
          }
          ... on GlobalFlexibleSectionsSectionsReadMoreBlogsLayout {
            fieldGroupName
            title
            link {
              title
              url
            }
          }
        }
      }
    }
  }
`;
