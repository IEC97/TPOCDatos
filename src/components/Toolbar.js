import { withStyles } from '@material-ui/core/styles';
//import Toolbar from '@material-ui/core/Toolbar';
import Toolbar from '@mui/material/Toolbar';

export const styles = (theme) => ({
  root: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 10,
    },
  },
});

export default withStyles(styles)(Toolbar);
