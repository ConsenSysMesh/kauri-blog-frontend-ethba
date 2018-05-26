import * as React from 'react'
import { compose } from 'recompose'
import logo from './react.svg'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import { searchBlogPost } from './queries'
import { searchBlogPostQuery } from './__generated__/types'
import PostCard from './PostCard'
import './Home.css'

const styles: StyleRulesCallback<'button'> = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  }
})

class SearchBlogPostComponent extends Query<searchBlogPostQuery> {}

const BlogPosts = () => (
  <SearchBlogPostComponent query={searchBlogPost}>
    {({ data, loading, error }) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>Error</p>
      if (!data) return <p>No data</p>

      const { searchBlogPost } = data
      return (
        <div className="Home">
          <div className="Home-header">
            <Typography variant="subheading" gutterBottom>
              example project
            </Typography>
            <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
              <AddIcon />
            </Button>
          </div>
          <div className="Home-intro">
            {searchBlogPost &&
              searchBlogPost.content &&
              searchBlogPost.content.map(
                (blogPost, i) =>
                  blogPost && (
                    <div key={blogPost.id}>
                      Hello
                      {/* <Link to={`/about/${i + 1}`}>{blogPost.title}</Link> */}
                    </div>
                  )
              )}
          </div>
          <Link to="/about">About -></Link>
        </div>
      )
    }}
  </SearchBlogPostComponent>
)

class Home extends React.Component<WithStyles<'button'>, {}> {
  public render() {
    const { classes } = this.props
    return (
      <div className="Home">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    )
  }
}

export default compose(withStyles(styles))(Home)
