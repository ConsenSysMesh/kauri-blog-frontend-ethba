import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Avatar from '@material-ui/core/Avatar'
import styled from 'styled-components'
import {
  CommentsHeaderTitle as PostsHeaderTitle,
  CommentsList,
  CommentsHeader as PostsHeader,
  NumberOfComments as NumberOfPosts
} from './Comments'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({})

const Container = styled.section`
  display: flex;
  flex-direction: column;
  > :first-child {
    margin-bottom: 10px;
  }
`

const Address = styled.span`
  height: 46px;
  width: 325px;
  color: rgba(0, 0, 0, 0.87);
  font-family: Roboto;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 0.21px;
  line-height: 23px;
  word-wrap: break-word;
`

const Posts = ({ classes, id }) => (
  <Container className={classes.card}>
    <Avatar aria-label="Recipe" className={classes.avatar}>
      B
    </Avatar>
    <Address>0x92D1D7188c773c1b322e5d7d3C35dB0B0BC33E3e</Address>
  </Container>
)

export default withStyles(styles)(Posts)
