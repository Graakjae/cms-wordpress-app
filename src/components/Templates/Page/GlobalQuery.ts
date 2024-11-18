import gql from "graphql-tag";

export const GlobalQuery = gql`
  query GlobalQuery {
    globalSections {
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
          ... on GlobalFlexibleSectionsSectionsInfiniteSliderSectionLayout {
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
        }
      }
    }
  }
`;
