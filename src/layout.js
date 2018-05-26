import React from 'react'
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import CssBaseline from '@material-ui/core/CssBaseline'
import { compose } from 'recompose'
import classNames from 'classnames'
import { NavLink, withRouter } from 'react-router-dom'
import { Menu, Explore, Home } from '@material-ui/icons'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import ProfileDetails from './ProfileDetails'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    accent: red,
    type: 'light'
  }
})

const drawerWidth = 350

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflowX: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    color: 'white',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerLink: {
    textDecoration: 'none',
    width: drawerWidth
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: false
    }
  }

  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
    this.setState({
      loaded: true
    })
  }

  toggleDrawer = open => {
    open ? this.setState({ drawerOpen: open }) : this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    const {
      classes,
      children,
      location: { pathname }
    } = this.props
    const { drawerOpen } = this.state

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="absolute" className={classNames(classes.appBar)}>
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggleDrawer()}
            >
              <Menu />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Decentralised Blog Thingy
            </Typography>
            {/* <Button color="inherit">Sign in</Button> */}
          </Toolbar>
        </AppBar>
        <Drawer variant="temporary" anchor="left" open={drawerOpen} onClose={() => this.toggleDrawer()}>
          <div
            tabIndex={0}
            role="button"
            onClick={() => this.toggleDrawer(false)}
            onKeyDown={() => this.toggleDrawer(false)}
          >
            <div className={classes.drawerLink}>
              <List>
                <ListItem>
                  <ProfileDetails />
                </ListItem>
                <Divider />
                <NavLink className={classes.drawerLink} to="/">
                  <ListItem button title="Home">
                    <ListItemIcon>
                      <Home />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItem>
                </NavLink>
                <NavLink className={classes.drawerLink} to="/profile/1">
                  <ListItem button title="Profile">
                    <ListItemIcon>
                      <Explore />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </ListItem>
                </NavLink>
                <NavLink className={classes.drawerLink} to="/write-post">
                  <ListItem button title="Write Post">
                    <ListItemIcon>
                      <Explore />
                    </ListItemIcon>
                    <ListItemText primary="Write Post" />
                  </ListItem>
                </NavLink>
              </List>
            </div>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </MuiThemeProvider>
    )
  }
}

export default compose(withRouter, withStyles(styles))(Layout)
