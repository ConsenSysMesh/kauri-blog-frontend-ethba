import * as React from 'react'
import logo from './react.svg'
import Typography from '@material-ui/core/Typography'
import withStyles, { WithStyles, StyleRulesCallback } from '@material-ui/core/styles/withStyles'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import './Home.css'

const styles: StyleRulesCallback<'root'> = theme => ({
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
    const classes = this.props.classes
    return (
      <div>
        <Typography variant="subheading" gutterBottom>
          example project
        </Typography>
        <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
        {/* <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Razzles</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/App.tsx</code> or <code>src/Home.tsx</code> and save to reload.
        </p>
        <ul className="Home-resources">
          <li>
            <a href="https://github.com/jaredpalmer/razzle">Docs</a>
          </li>
          <li>
            <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
          </li>
          <li>
            <a href="https://palmer.chat">Community Slack</a>
          </li>
        </ul> */}
      </div>
    )
  }
}

export default withStyles(styles)<{}>(Home)
