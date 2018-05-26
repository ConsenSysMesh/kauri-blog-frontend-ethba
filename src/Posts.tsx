import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

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

const Posts = ({ classes, id }) => (
  <Container className={classes.card}>
    <PostsHeader>
      <PostsHeaderTitle>Posts</PostsHeaderTitle>
      <NumberOfPosts>4</NumberOfPosts>
    </PostsHeader>
    <PostsDivider />
    <PostsList>
      <PostCard />
      <PostCard />
      <PostCard />
    </PostsList>
  </Container>
)

export default withStyles(styles)(Posts)
