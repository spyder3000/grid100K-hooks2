
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({   
   root: {
     width: '100%',
   },
   tableIntro: {
      color: 'maroon', 
      fontWeight: 600, 
      margin: '1.5rem',
      fontSize: '1.7rem',
  },
   paper: {
     width: '100%',
     marginBottom: theme.spacing(2),
     //marginBottom: 1.5rem;
     border: '2px solid #333', 
     borderRadius: '15px' 
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

    /*td.col: {
      paddingTop: 2px; 
      paddingBottom: 2px; 
    }*/

 }));