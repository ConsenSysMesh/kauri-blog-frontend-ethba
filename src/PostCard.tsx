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
  card: {
    maxWidth: 400
  },
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

const Date = styled(Typography)`
  font-family: Roboto-Medium;
  font-size: 14px;
  color: #1976d2;
  letter-spacing: 1.25px;
  text-align: center;
  line-height: 16px;
`

const PostCard = ({ classes, id }) => (
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
      subheader={
        <Typography component="p" className={classes.date}>
          May 26, 2018
        </Typography>
      }
    />
    <CardContent>
      <Typography className={classes.shortContent} component="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
    </CardContent>
    <CardActions>
      <Link to={`/post/${id}`}>View Post</Link>
      <Link to={`/post/${id}`} size="small" color="primary">
        View Profile
      </Link>
    </CardActions>
  </Card>
)

export default withStyles(styles)(PostCard)
