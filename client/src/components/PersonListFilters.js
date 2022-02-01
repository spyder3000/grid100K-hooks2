import React from 'react'; 
import { connect } from 'react-redux'; 
import { setTextFilter, setAge, setScore, setGender, setState }  from '../actions/filters';
import { useSelector, useDispatch } from 'react-redux'; 

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import SearchIcon from '@material-ui/icons/Search';

//class PersonListFilters extends React.Component {
const PersonListFilters = (props) => { 
   const filters = useSelector((state) => state.filters);         // hooks for mapstatetoprops
   const dispatch = useDispatch();  // allows us to dispatch actions

   const onTextChange = (e) => {
      dispatch(setTextFilter(e.target.value));
   };
   const onAgeChange = (e) => {
      dispatch(setAge(e.target.value));
   };
   const onScoreChange = (e) => {
      dispatch(setScore(e.target.value));
   };
   const onGenderChange = (e) => {
      dispatch(setGender(e.target.value));
   };
   const onStateChange = (e) => {
      dispatch(setState(e.target.value));
   };
  
      return (
         <Container maxWidth="lg" className="filter_grid">
            <Typography component="h1" variant="h6" color="inherit" noWrap className="filter_title">
               Search
            </Typography>
            <List className="search_section">
               <ListItem>
                  <SearchIcon />
                  <Input id="searchStr2" className="searchStr" placeholder="Enter name" inputProps={{ 'aria-label': 'description' }} 
                     label="Search" variant="outlined" 
                     value={filters.text} 
                     onChange={onTextChange}
                  />
               </ListItem>
            </List>

            <Typography className="filter_title" component="h1" variant="h6" color="inherit" noWrap >
               Filters
            </Typography>
            
            <List className="filter_section">
               <ListItem>
               <FormControl className="form_control" variant="outlined">
                  <InputLabel id="age_label" className="age_label">Age</InputLabel>
                  <Select
                     labelId="choose_age"
                     label="Age"
                     id="choose_age"
                     value={filters.age}
                     onChange={onAgeChange}
                  >
                     <MenuItem value={"0"}>None</MenuItem>
                     <MenuItem value={"1"}>1-10</MenuItem>
                     <MenuItem value={"2"}>11-20</MenuItem>
                     <MenuItem value={"3"}>21-30</MenuItem>
                     <MenuItem value={"4"}>31-40</MenuItem>
                     <MenuItem value={"5"}>41-50</MenuItem>
                     <MenuItem value={"6"}>51-60</MenuItem>
                     <MenuItem value={"7"}>61-70</MenuItem>
                     <MenuItem value={"8"}>71-80</MenuItem>
                     <MenuItem value={"9"}>81-90</MenuItem>
                     <MenuItem value={"10"}>91-100</MenuItem>
                  </Select>
               </FormControl>
               </ListItem>

               <ListItem>
               <FormControl className="form_control" variant="outlined">
                  <InputLabel id="score_label" className="score_label">Score</InputLabel>
                  <Select
                     labelId="choose_score"
                     label="Score"
                     id="choose_score"
                     value={filters.score}
                     onChange={onScoreChange}
                  >
                     <MenuItem value={"0"}>None</MenuItem>
                     <MenuItem value={"10"}>455-500</MenuItem>
                     <MenuItem value={"9"}>405-450</MenuItem>
                     <MenuItem value={"8"}>355-400</MenuItem>
                     <MenuItem value={"7"}>305-350</MenuItem>
                     <MenuItem value={"6"}>255-300</MenuItem>
                     <MenuItem value={"5"}>205-250</MenuItem>
                     <MenuItem value={"4"}>155-200</MenuItem>
                     <MenuItem value={"3"}>105-150</MenuItem>
                     <MenuItem value={"2"}>55-100</MenuItem>
                     <MenuItem value={"1"}>0-50</MenuItem>
                  </Select>
               </FormControl>
               </ListItem>

               <ListItem>
               <FormControl className="form_control" variant="outlined">
                  <InputLabel id="gender_label" className="gender_label">Gender</InputLabel>
                  <Select
                     labelId="choose_gender"
                     label="Gender"
                     id="choose_gender"
                     value={filters.gender}
                     onChange={onGenderChange}
                  >
                     <MenuItem value={"X"}>None</MenuItem>
                     <MenuItem value={"M"}>Male</MenuItem>
                     <MenuItem value={"F"}>Female</MenuItem>
                  </Select>
               </FormControl>
               </ListItem>

               <ListItem>
               <FormControl className="form_control" variant="outlined">
                  <InputLabel id="state_label" className="state_label">State</InputLabel>
                  <Select
                     labelId="choose_state"
                     label="State"
                     id="choose_state"
                     value={filters.stateXX}
                     onChange={onStateChange}
                  >
                        <MenuItem value={"XX"}>None</MenuItem>
                        <MenuItem value={"AL"}>AL</MenuItem>
                        <MenuItem value={"AK"}>AK</MenuItem>
                        <MenuItem value={"AR"}>AR</MenuItem>	
                        <MenuItem value={"AZ"}>AZ</MenuItem>
                        <MenuItem value={"CA"}>CA</MenuItem>
                        <MenuItem value={"CO"}>CO</MenuItem>
                        <MenuItem value={"CT"}>CT</MenuItem>
                        <MenuItem value={"DC"}>DC</MenuItem>
                        <MenuItem value={"DE"}>DE</MenuItem>
                        <MenuItem value={"FL"}>FL</MenuItem>
                        <MenuItem value={"GA"}>GA</MenuItem>
                        <MenuItem value={"HI"}>HI</MenuItem>
                        <MenuItem value={"IA"}>IA</MenuItem>	
                        <MenuItem value={"ID"}>ID</MenuItem>
                        <MenuItem value={"IL"}>IL</MenuItem>
                        <MenuItem value={"IN"}>IN</MenuItem>
                        <MenuItem value={"KS"}>KS</MenuItem>
                        <MenuItem value={"KY"}>KY</MenuItem>
                        <MenuItem value={"LA"}>LA</MenuItem>
                        <MenuItem value={"MA"}>MA</MenuItem>
                        <MenuItem value={"MD"}>MD</MenuItem>
                        <MenuItem value={"ME"}>ME</MenuItem>
                        <MenuItem value={"MI"}>MI</MenuItem>
                        <MenuItem value={"MN"}>MN</MenuItem>
                        <MenuItem value={"MO"}>MO</MenuItem>	
                        <MenuItem value={"MS"}>MS</MenuItem>
                        <MenuItem value={"MT"}>MT</MenuItem>
                        <MenuItem value={"NC"}>NC</MenuItem>	
                        <MenuItem value={"NE"}>NE</MenuItem>
                        <MenuItem value={"NH"}>NH</MenuItem>
                        <MenuItem value={"NJ"}>NJ</MenuItem>
                        <MenuItem value={"NM"}>NM</MenuItem>			
                        <MenuItem value={"NV"}>NV</MenuItem>
                        <MenuItem value={"NY"}>NY</MenuItem>
                        <MenuItem value={"ND"}>ND</MenuItem>
                        <MenuItem value={"OH"}>OH</MenuItem>
                        <MenuItem value={"OK"}>OK</MenuItem>
                        <MenuItem value={"OR"}>OR</MenuItem>
                        <MenuItem value={"PA"}>PA</MenuItem>
                        <MenuItem value={"RI"}>RI</MenuItem>
                        <MenuItem value={"SC"}>SC</MenuItem>
                        <MenuItem value={"SD"}>SD</MenuItem>
                        <MenuItem value={"TN"}>TN</MenuItem>
                        <MenuItem value={"TX"}>TX</MenuItem>
                        <MenuItem value={"UT"}>UT</MenuItem>
                        <MenuItem value={"VT"}>VT</MenuItem>
                        <MenuItem value={"VA"}>VA</MenuItem>
                        <MenuItem value={"WA"}>WA</MenuItem>
                        <MenuItem value={"WI"}>WI</MenuItem>	
                        <MenuItem value={"WV"}>WV</MenuItem>
                        <MenuItem value={"WY"}>WY</MenuItem>
                  </Select>
               </FormControl>
               </ListItem>
            </List>
         </Container>
      ); 
}

export default PersonListFilters; 
