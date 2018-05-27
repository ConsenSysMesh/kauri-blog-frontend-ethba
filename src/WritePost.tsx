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
import { Mutation } from 'react-apollo'
import { createBlogMutationVariables, createBlogMutation } from './__generated__/types'
import { createBlog } from './queries'

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

class CreateBlogComponent extends Mutation<createBlogMutation, createBlogMutationVariables> {}

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

  handleSubmit = createBlog => (e: MouseEvent) => {
    e.preventDefault()
    console.log(this.state)
    createBlog({ variables: { name: window.web3.eth.accounts[0], user: window.web3.eth.accounts[0] } })
      .then(({ data }) => {
        console.log(data)
      })
      .catch(err => console.error(err))
    // KauriCore.addRequest.sendTransaction(
    //   id,
    //   web3.sha3(content_hash).toString('hex'),
    //   category,
    //   Math.floor(dead_line / 1000),
    //   weiBounty,
    //   {
    //     from: web3.eth.accounts[0],
    //     value: weiBounty,
    //     gas: 250000,
    //     gasPrice,
    //   }
    // )
  }

  render() {
    const { classes } = this.props

    return (
      <CreateBlogComponent mutation={createBlog}>
        {(createBlog, { data }) => {
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
              <Button
                onClick={this.handleSubmit(createBlog)}
                className={classes.button}
                variant="raised"
                color="primary"
              >
                Post
                <Icon className={classes.rightIcon}>send</Icon>
              </Button>
            </form>
          )
        }}
      </CreateBlogComponent>
    )
  }
}

export default withStyles(styles)(TextFields)
