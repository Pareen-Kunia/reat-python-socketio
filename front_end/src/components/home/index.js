import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import { Button, withStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Search from '../search';
const styles = theme =>({
  root: {
    flexGrow: 1,
    width: '60%',
    marginTop: 10,
    marginLeft:10
  },

});



class Home extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          open:false
      }
      this.handleClickOpen=this.handleClickOpen.bind(this);
      this.handleClose=this.handleClose.bind(this);
  }
  handleClickOpen(){
      this.setState({
          open:true
      })
  }

  handleClose(){
    this.setState({
        open:false
    })
 }
  render(){
    const {classes} = this.props;
    const { open } = this.state;

  return (
    
    <div className={classes.root}>
      
        <Toolbar>
          <Button 
          variant="outlined" color="secondary" onClick={this.handleClickOpen}
          >Add to Queue</Button>
          <div className={classes.root}></div>
          
          
        </Toolbar>
        <Dialog fullScreen open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add to QUEUE</DialogTitle>
        <DialogContent>
          <Search />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          
        </DialogActions>
      </Dialog>
      
    </div>
  );
  }
}

export default withStyles(styles)(Home)