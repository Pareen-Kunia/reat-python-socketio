import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField, Button } from '@material-ui/core';
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

function createData(manufacturer, device, fat, carbs, protein) {
  return { manufacturer, device, fat, carbs, protein };
}

const rows = [
  createData('Samsung', 'Samsung S10 Green', 6.0, 24, 4.0),
  createData('Apple', 'Apple Iphone X', 9.0, 37, 4.3),
  createData('Nokia', 'Nokia Mate 10', 16.0, 24, 6.0)
];

const useStyles = theme => ({
  root: {
    width: '90%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
    marginLeft:theme.spacing(3)
  },
  table: {
    minWidth: 700,
  },
});

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state={
            manufacturer:"",
            device:""
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    notifyServer= () => {
      console.log("in");
      socket.emit('itemadded',{
        manufacturer:'Samsung',
        device:'Samsuncd ..g s10 plus',
        quantity:1
      })
    }
    handleSearch = name => event => {
        this.setState({
            [name]:event.target.value
        })
    }

    render(){
        const {classes}  = this.props;
        return (
            <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <StyledTableCell>Manufacturer</StyledTableCell>
                    <StyledTableCell >Accessory/Device</StyledTableCell>
                    
                    <StyledTableCell align="right">Quantity</StyledTableCell>
                    
                    <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
                
                </TableHead>
                <TableBody>
                <TableRow>
                    <StyledTableCell>
                        <TextField 
                            placeholder="Search..."
                            onChange={this.handleSearch("manufacturer")}
                            value={this.state.manufacturer}
                        />
                    </StyledTableCell>
                    <StyledTableCell >
                        <TextField 
                            placeholder="Search..."
                            onChange={this.handleSearch("device")}
                            value={this.state.device}
                        />
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    
                    <StyledTableCell align="center"></StyledTableCell>
                </TableRow>
                {rows.filter(row => ((row.manufacturer.toUpperCase().indexOf(this.state.manufacturer.toUpperCase()) > -1) && (row.device.toUpperCase().indexOf(this.state.device.toUpperCase()) > -1))).map(row => (
                    <StyledTableRow key={row.device}>
                    <StyledTableCell component="th" scope="row">
                        {row.manufacturer}
                    </StyledTableCell>
                    <StyledTableCell >{row.device}</StyledTableCell>
                    <StyledTableCell align="right">
                        <TextField
                        defaultValue={1}
                        
                        >

                        </TextField>
                    </StyledTableCell>
                    <StyledTableCell align="right"><Button
                    variant="contained"
                    onClick={this.notifyServer}
                    >Add</Button></StyledTableCell>
                    
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </Paper>
        );
    }
  
}

export default  withStyles(useStyles)(Search) 