import gql from 'graphql-tag'

export const searchBlogPost = gql`
  query searchBlogPost($page: Int = 0, $size: Int = 50, $dir: DirectionInput, $filter: BlogPostFilterInput) {
    searchBlogPost(page: $page, size: $size, dir: $dir, filter: $filter) {
      totalElements
      content {
        id
        title
        user
        dateUpdated
        content
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

export const createNewPost = gql`
  mutation savePost($user: String, $title: String, $content: String) {
    savePost(user: $user, title: $title, content: $content) {
      id
      user
      title
      content
      totalTip
      status
      contentHash
      dateCreated
      dateUpdated
    }
  }
`

export const getBlogPost = gql`
  query getBlogPost($id: String) {
    getBlogPost(id: $id) {
      id
      title
      content
      user
      contentHash
      dateCreated
      dateUpdated
      status
      blogName
    }
  }
`
