import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Comment from './Comment'

const styles = {
  divider: {
    margin: '10px 0'
  }
}

const ViewLink = styled(Link)`
  /* Button: */
  font-family: Roboto-Medium;
  font-size: 14px;
  color: #1976d2;
  letter-spacing: 1.25px;
  text-align: center;
  line-height: 16px;
  text-transform: uppercase;
  text-decoration: none;
  :nth-child(2) {
    margin-left: 30px;
  }
  :first-child {
    margin-left: 13px;
  }
`

const CommentsContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 16px;
`

export const CommentsHeader = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  > :first-child {
    margin-right: auto;
  }
`

export const CommentsList = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const CommentsHeaderTitle = styled.span`
  /* Subtitle 1: */
  font-family: Roboto-Regular;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.15px;
  line-height: 24px;
`

export const NumberOfComments = styled.span`
  /* Caption: */
  font-family: Roboto-Regular;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.4px;
  text-align: right;
  line-height: 16px;
`

const Comments = ({ classes, id }) => (
  <CommentsContainer>
    <CommentsHeader>
      <CommentsHeaderTitle>Comments</CommentsHeaderTitle>
      <NumberOfComments>4</NumberOfComments>
    </CommentsHeader>
    <Divider className={classes.divider} />
    <CommentsList>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </CommentsList>
  </CommentsContainer>
)

export default withStyles(styles)(Comments)
