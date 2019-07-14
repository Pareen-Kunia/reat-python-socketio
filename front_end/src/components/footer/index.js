import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
});

class Footer extends React.Component{
  

  render(){
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">Built by Automation team</Typography>
          </Container>
        </footer>
      </div>
    ); 
  }
  

}

export default  withStyles(styles)(Footer)