import gql from 'graphql-tag'

export const searchBlogPost = gql`
  query searchBlogPost(
    $page: Int = 0
    $size: Int = 10
    $sort: String
    $dir: DirectionInput
    $filter: BlogPostFilterInput
  ) {
    searchBlogPost(page: $page, size: $size, sort: $sort, dir: $dir, filter: $filter) {
      content {
        id
        title
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
