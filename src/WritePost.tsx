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
import {
  createBlogMutationVariables,
  createBlogMutation,
  savePostMutation,
  savePostMutationVariables
} from './__generated__/types'
import { createBlog, createNewPost, searchBlogPost } from './queries'

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
class CreateNewPostComponent extends Mutation<savePostMutation, savePostMutationVariables> {}

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

  handleSubmit = (createBlog, createNewPost) => (e: MouseEvent) => {
    e.preventDefault()
    const { title, blog } = this.state
    createBlog({ variables: { name: window.web3.eth.accounts[0], user: window.web3.eth.accounts[0] } })
      .then(({ data }) => {
        console.log('create blog', data)
        createNewPost({ variables: { user: window.web3.eth.accounts[0], title, content: blog } }).then(({ data }) => {
          console.log('createNewPost', data)
          window.Blog.submitPost
            .sendTransaction(data.savePost.id, web3.sha3(data.savePost.contentHash).toString('hex'), {
              from: window.web3.eth.accounts[0],
              gas: 250000
            })
            .then(transactionId => console.log('transactionId', transactionId))
        })
      })
      .catch(err => console.error(err))
  }

  render() {
    const { classes } = this.props

    return (
      <CreateBlogComponent mutation={createBlog}>
        {(createBlog, { data }) => {
          return (
            <CreateNewPostComponent
              mutation={createNewPost}
              update={(cache, { data: { savePost } }) => {
                console.log(savePost)
                try {
                  const {
                    searchBlogPost: { content }
                  } = cache.readQuery({
                    query: searchBlogPost,
                    variables: {
                      page: 0,
                      size: 10,
                      sort: 'dateCreated',
                      dir: 'DESC',
                      filter: {}
                    }
                  })
                  console.log(content)
                  cache.writeQuery({
                    query: searchBlogPost,
                    data: { content: content.concat([savePost]) }
                  })
                } catch (err) {
                  console.error(err)
                }
              }}
            >
              {(createNewPost, { data }) => {
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
                      onClick={this.handleSubmit(createBlog, createNewPost)}
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
            </CreateNewPostComponent>
          )
        }}
      </CreateBlogComponent>
    )
  }
}

export default withStyles(styles)(TextFields)
