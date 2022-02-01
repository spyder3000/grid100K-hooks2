import React from 'react'; 
import PersonListItem from './PersonListItem'; 

import { lighten, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux'; 

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import useStyles from './styles/PersonList_styles';
import TableHeader from './PersonListHeader'; 

/*const useStyles = makeStyles((theme) => ({
   root: {
     width: '100%',
   },
   paper: {
     width: '100%',
     marginBottom: theme.spacing(2),
   },
   table: {
     minWidth: 750,
   },
   visuallyHidden: {
     border: 0,
     clip: 'rect(0 0 0 0)',
     height: 1,
     margin: -1,
     overflow: 'hidden',
     padding: 0,
     position: 'absolute',
     top: 20,
     width: 1,
   },
 }));*/

 function descendingComparator(a, b, orderBy) {
   if (b[orderBy] < a[orderBy]) {
     return -1;
   }
   if (b[orderBy] > a[orderBy]) {
     return 1;
   }
   return 0;
 }
 
 function getComparator(order, orderBy) {
   return order === 'desc'
     ? (a, b) => descendingComparator(a, b, orderBy)
     : (a, b) => -descendingComparator(a, b, orderBy);
 }

 function stableSort(array, comparator) {
   const stabilizedThis = array.map((el, index) => [el, index]);
   stabilizedThis.sort((a, b) => {
     const order = comparator(a[0], b[0]);
     if (order !== 0) return order;
     return a[1] - b[1];
   });
   return stabilizedThis.map((el) => el[0]);
 }

const PersonList = (props) => { 
   const classes = useStyles();
   const [page, setPageNum] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(20);

   const [order, setOrder] = React.useState('asc');
   const [orderBy, setOrderBy] = React.useState('id');

   const [dense, setDense] = React.useState(false);

   // const filters = useSelector((state) => state.filters);         // hooks for mapstatetoprops
   const dispatch = useDispatch();  // allows us to dispatch actions

   const handleChangePage = (event, newPage) => {
      setPageNum(newPage);
      // dispatch(setPageNum(newPage)); 
   };

   const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPageNum(0);
      // dispatch(setRowsPerPage(parseInt(event.target.value, 10))); 
   };

   const handleRequestSort = (event, property) => {
      console.log('property = ' + property + '; order = ' + order); 
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

   const handleChangeDense = (event) => {
      setDense(event.target.checked);
   };

   // console.log('rowsPerPage = ' + rowsPerPage + '; ' + props.persons.length + '; ' + page  ); 
   // const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
   //console.log('emptyRows = ' + emptyRows); 
   return (
      <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
         <Paper className={classes.paper}>
         <Typography className={classes.tableIntro} variant="h3" id="tableTitle" component="div">
            Contestants
         </Typography>
         <TableContainer>
               <Table
                  className={classes.table}
                  aria-labelledby="tableTitle"
                  size={dense ? 'small' : 'medium'}
                  aria-label="enhanced table"
               >
               <TableHeader
                  classes={classes}
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
               />
               <TableBody>
         {/*<table className="table"><tbody> 
            <tr>
               <th>Entry Num</th>
               <th>Name</th>
               <th>Age</th>
               <th>Gender</th>
               <th>State</th>
               <th>Status</th>
               <th>Final Score</th>
            </tr>  */}
            {/*}   {props.persons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)  */}
            {stableSort(props.persons, getComparator(order, orderBy))
               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((person) => {
               <span>{person.id}</span>
               return <PersonListItem key={person.id} {...person} />  // ...person includes all key/value properties;  referenced as props.score, etc
            })}    
            {/* {emptyRows > 0 && (
                  <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                     <TableCell colSpan={5} />
                  </TableRow>
            )}   */}
            </TableBody>
            </Table>
         </TableContainer>
         <TablePagination
               rowsPerPageOptions={[20, 50, 100, 200]}
               component="div"
               count={props.persons.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onChangePage={handleChangePage}
               onChangeRowsPerPage={handleChangeRowsPerPage}
         />
         </Paper>
         {/*<FormControlLabel
            control={<Switch checked={dense} onChange={handleChangeDense} />}
            label="Dense padding"
         />*/}
         </Container>
      </div>
   )
}

export default PersonList; 
