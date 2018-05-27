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

export const createBlog = gql`
  mutation createBlog($user: String, $name: String) {
    createBlog(user: $user, name: $name) {
      user
      name
      tipAmount
    }
  }
`
