import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import io from 'socket.io-client'

const socket = io('http://localhost:5000')


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
  body: {
    fontSize: 14,
  },
  
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

//const rows = [
//   createData('Samsung', 'Samsung S10 Green', 6.0, 24, 4.0),
//   createData('Apple', 'Apple Iphone X', 9.0, 37, 4.3),
//   createData('Nokia', 'Nokia Mate 10', 16.0, 24, 6.0)
//];

const styles = theme => ({
  root: {
    width: '95%',
    overflowX: 'auto',
    marginLeft:theme.spacing(3)
  },
  table: {
    minWidth: 700,
  },
});

class Queued extends React.Component {
  
  constructor(props){
      super(props);
      this.state={
          rows : []
      }
  }
  setSocketListeners () {
        socket.on('message', (data) => {
          console.log(data)
          this.audio = new Audio('http://resources.schoolscience.co.uk/CDA/CD/files/sound/decorativelamp.mp3');
          this.audio.play();
          this.setState({
              rows:[createData('Samsung', 'Samsung S10 Green', 6.0, 24, 4.0)]
          })
  })
  }

  componentDidMount(){
      this.setSocketListeners();
  }

  render(){
    const { classes }  = this.props;
    const { rows } = this.state;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
        <TableRow>
            <StyledTableCell>Manufacturer</StyledTableCell>
            <StyledTableCell >Accessory/Device</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Created By</StyledTableCell>
            <StyledTableCell align="right">Aisle #</StyledTableCell>
            <StyledTableCell align="right">Ordered at</StyledTableCell>
            <StyledTableCell align="right">Acknowledged By</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="center">&nbsp;</StyledTableCell>
          </TableRow>
          
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell >{row.calories}</StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
}

export default  withStyles(styles)(Queued)

