import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Query } from 'react-apollo'
import red from '@material-ui/core/colors/red'
import styled from 'styled-components'
import {
  CommentsHeaderTitle as PostsHeaderTitle,
  CommentsList,
  CommentsHeader as PostsHeader,
  NumberOfComments as NumberOfPosts
} from './Comments'
import Divider from '@material-ui/core/Divider'
import PostCard from './PostCard'
import { searchBlogPost } from './queries'
import { searchBlogPostQuery } from './__generated__/types'

const styles = theme => ({
  card: {
    height: '100vh'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    margin: '20px 0'
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  shortContent: {
    textAlign: 'left'
  },
  headline: {
    textAlign: 'left'
  },
  date: {
    textAlign: 'left'
  },
  share: {
    marginLeft: 'auto',
    color: '#1976d2'
  }
})

const PostsList = CommentsList.extend`
  > :not(:first-child) {
    margin-top: 20px;
  }
`

const Container = styled.section`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
`

const PostsDivider = styled(Divider)`
  margin: 20px 0px !important;
`

class SearchBlogPostComponent extends Query<searchBlogPostQuery> {}

const Posts = ({ classes, id }) => (
  <Container className={classes.card}>
    <SearchBlogPostComponent
      query={searchBlogPost}
      variables={{
        size: 10,
        sort: 'dateCreated',
        dir: 'DESC',
        filter: {
          user_id_eq: id
        }
      }}
    >
      {({ data, loading, error }) => {
        if (loading) return <p>loading...</p>
        if (error) return <p>Error</p>
        const { searchBlogPost } = data
        if (searchBlogPost && !searchBlogPost.content.length) return <p>No data</p>
        return (
          <Fragment>
            <PostsHeader>
              <PostsHeaderTitle>Posts</PostsHeaderTitle>
              <NumberOfPosts>{searchBlogPost.totalElements}</NumberOfPosts>
            </PostsHeader>
            <PostsDivider />
            <PostsList>
              <div className="Home">
                {searchBlogPost &&
                  searchBlogPost.content &&
                  searchBlogPost.content.map((blogPost, i) => blogPost && <PostCard key={blogPost.id} {...blogPost} />)}
              </div>
            </PostsList>
          </Fragment>
        )
      }}
    </SearchBlogPostComponent>
  </Container>
)

export default withStyles(styles)(Posts)
