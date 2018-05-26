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

const styles = theme => ({
  card: {},
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
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

const PostCard = ({ classes, id = 1 }) => (
  <Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          A
        </Avatar>
      }
      action={<IconButton />}
      title={
        <Typography variant="headline" component="h2" className={classes.headline}>
          Headline
        </Typography>
      }
      subheader={<Date>01/02/2018</Date>}
    />
    <CardContent>
      <Typography className={classes.shortContent} component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </CardContent>
    <CardActions>
      <ViewLink to={`/blogpost/${id}`}>View Post</ViewLink>
      <ViewLink to={`/profile/${id}`}>View Profile</ViewLink>
    </CardActions>
  </Card>
)

export default withStyles(styles)(PostCard)
