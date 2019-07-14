import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './assets/images/Spark_New_Zealand_logo.svg';
import queue from './assets/images/queue.png';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function SimpleAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <img src={queue} alt='Spark' />
          <div className={classes.root}></div>
          <img src={logo} alt='Spark' width="120" />
        </Toolbar>
      </AppBar>
    </div>
  );
}