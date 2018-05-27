import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import Save from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import MarkdownShortcuts from './MarkdownEditor'
import { Typography, Divider } from '@material-ui/core'
import styled from 'styled-components'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%'
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
})

const EditorContainer = styled.section`
  display: flex;
  margin-left: 10px;
  flex-direction: column;
  > :first-child {
    border-bottom: 1px solid #1976d2;
  }
`

class TextFields extends React.Component {
  state = {
    title: '',
    blog: ''
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="title"
          label="Title"
          className={classes.textField}
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
        />
        <EditorContainer>
          <Typography>Post</Typography>
          <MarkdownShortcuts handleChange={this.handleChange('blog')} />
        </EditorContainer>
        <Divider />
        <Button className={classes.button} variant="raised" color="primary">
          Post
          <Icon className={classes.rightIcon}>send</Icon>
        </Button>
      </form>
    )
  }
}

export default withStyles(styles)(TextFields)
