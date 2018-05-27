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
  <SearchBlogPostComponent
    query={searchBlogPost}
    variables={{
      page: 0,
      size: 10,
      sort: 'dateCreated',
      dir: 'DESC',
      filter: {
        // status_in: ['PUBLISHED']
      }
    }}
  >
    {({ data, loading, error }) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>Error</p>
      const { searchBlogPost } = data
      if (searchBlogPost && !searchBlogPost.content.length) return <p>No data</p>
      return (
        <div className="Home">
          {searchBlogPost &&
            searchBlogPost.content &&
            searchBlogPost.content.map((blogPost, i) => blogPost && <PostCard key={blogPost.id} {...blogPost} />)}
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
        <BlogPosts classes={classes} />
        {/* <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard /> */}
      </div>
    )
  }
}

export default compose(withStyles(styles))(Home)
