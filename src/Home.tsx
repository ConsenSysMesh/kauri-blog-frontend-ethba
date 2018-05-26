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
import { AllFilmsQuery } from './__generated__/types'

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

class AllFilmsComponent extends Query<AllFilmsQuery> {}

class Home extends React.Component<WithStyles<'button'>, {}> {
  public render() {
    const { classes } = this.props
    return (
      <AllFilmsComponent query={AllFilms}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>
          if (error) return <p>Error</p>
          if (!data) return <p>No data</p>

          const { allFilms } = data
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
                {allFilms &&
                  allFilms.films &&
                  allFilms.films.map(
                    film =>
                      film && (
                        <Link key={film.id} to={`/${film.id}`}>
                          {film.title}
                        </Link>
                      )
                  )}
              </div>
              <Link to="/about">About -></Link>
            </div>
          )
        }}
      </AllFilmsComponent>
    )
  }
}

export default compose(withStyles(styles))(Home)
