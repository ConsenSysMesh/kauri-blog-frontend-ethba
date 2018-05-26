import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    accent: red,
    type: 'light'
  }
})

const drawerWidth = 250

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      drawerOpen: true
    }
    this.toggleDrawer = this.toggleDrawer.bind(this)
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

  toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    const { classes, children } = this.props
    const { drawerOpen } = this.state

    return (
      <MuiThemeProvider sheetsManager={new Map()} theme={theme}>
        <CssBaseline />
        <main>{children}</main>
      </MuiThemeProvider>
    )
  }
}

export default Layout
