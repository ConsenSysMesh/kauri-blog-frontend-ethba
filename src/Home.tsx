import * as React from 'react'
import { compose } from 'recompose'
import logo from './react.svg'
import { Query } from 'react-apollo'
import Typography from '@material-ui/core/Typography'
import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import { Link } from 'react-router-dom'
import { AllFilms } from './queries'
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

class Home extends React.Component<WithStyles<'button'>, {}> {
  public render() {
    const { classes } = this.props
    return (
      <Query query={AllFilms}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>
          if (error) return <p>Error</p>
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
              <div className="Home-intro" />
              <Link to="/about">About -></Link>
            </div>
          )
        }}
      </Query>
    )
  }
}

export default compose(withStyles(styles))(Home)
