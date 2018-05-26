import gql from 'graphql-tag'

export const searchBlogPost = gql`
  query searchBlogPost {
    searchBlogPost {
      content {
        id
      }
    }
  }
`
