import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import classnames from 'classnames'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import styled from 'styled-components'

const styles = {}

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

const CommentsHeader = styled.section`
  display: flex;
  width: 100%;
  flex-direction: row;
  > :first-child {
    margin-right: auto;
  }
`

const CommentsList = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const CommentsHeaderTitle = styled.span`
  /* Subtitle 1: */
  font-family: Roboto-Regular;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: 0.15px;
  line-height: 24px;
`

const NumberOfComments = styled.span`
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
    <CommentsList />
  </CommentsContainer>
)

export default withStyles(styles)(Comments)
