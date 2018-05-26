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
import ShareIcon from '@material-ui/icons/Share'
import Typography from '@material-ui/core/Typography'
import red from '@material-ui/core/colors/red'
import blue from '@material-ui/core/colors/blue'
import styled from 'styled-components'
import Posts from './Posts'
import ProfileDetails from './ProfileDetails'

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

export const Date = styled.div`
  font-family: Roboto-Medium;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.87);
  margin-left: 2px;
  letter-spacing: 2px;
  line-height: 16px;
  text-align: left;
`

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

const Container = styled.section`
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
`

const Profile = ({ classes, id }) => (
  <Container className={classes.card}>
    <ProfileDetails />
    <Posts />
  </Container>
)

export default withStyles(styles)(Profile)
