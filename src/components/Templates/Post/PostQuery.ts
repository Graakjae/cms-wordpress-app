import gql from "graphql-tag";

export const PostQuery = gql`
  query PostQuery($id: ID!, $preview: Boolean = false) {
    blog(id: $id, idType: DATABASE_ID, asPreview: $preview) {
      blogContent {
        blogPostImage {
          node {
            altText
            sourceUrl
          }
        }
        fieldGroupName
        postContent
        subtitle
        titel
        author
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`;
