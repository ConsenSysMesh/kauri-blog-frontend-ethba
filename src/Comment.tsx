import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import blue from '@material-ui/core/colors/blue'
import Avatar from '@material-ui/core/Avatar'

const styles = {
  divider: {
    margin: '8px 0',
    marginLeft: 55
  },
  avatar: {
    backgroundColor: blue[500]
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
`

const CommentsHeader = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  > :first-child {
    margin-right: 15px;
  }
`

const CommentsHeaderTitle = styled.span`
  /* Subtitle 1: */
  font-family: Roboto-Regular;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.15px;
  line-height: 24px;
`

const CommentText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  font-family: Roboto;
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 20px;
`

const Comments = ({ classes, id }) => (
  <CommentsContainer>
    <CommentsHeader>
      <Avatar aria-label="Recipe" className={classes.avatar}>
        B
      </Avatar>
      <CommentText>Greyhound divisively hello coldly wonderfully marginally far...</CommentText>
    </CommentsHeader>
    <Divider className={classes.divider} />
  </CommentsContainer>
)

export default withStyles(styles)(Comments)
