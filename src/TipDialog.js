import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

export default class FormDialog extends React.Component {
  state = {
    open: false
  }

  handleChange = event => {
    this.setState({ ...this.state, tip: event.target.value })
  }

  handleSubmit = () => {
    const weiBounty = web3.toWei(this.state.tip, 'ether')

    window.Blog.tipPost(this.props.id, this.props.author, {
      from: web3.eth.accounts[0],
      value: weiBounty,
      gas: 250000
    }).then(transactionId => {
      console.log(transactionId)
      this.handleClose()
    })
  }

  render() {
    return (
      <div>
        {/* <Button onClick={this.props.handleClickOpen}>Open form dialog</Button> */}
        <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Tip Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To initiate this transaction you will need to use Metamask, Toshi etc...
            </DialogContentText>
            <TextField
              onChange={this.handleChange}
              autoFocus
              margin="dense"
              id="tip"
              label="ETH"
              type="number"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.handleClose} color="secondary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
