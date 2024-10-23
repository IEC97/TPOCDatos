import React from 'react'
import {Router,Route,Link} from 'react-router-dom'
//import createBrowserHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles'; // Asegúrate de que estás usando el paquete correcto
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
//import SearchPersonal from '../pages/FormSearchPersonal';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
});

// const history = createBrowserHistory();


const Routes = (props) => {
  const { classes } = props;

  return (
    <div >
      {/* <Router history={history}> */}
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <List>
            <ListItem button component={Link} to="/SearchPersonal">
                <ListItemText primary="ABM de Personal" />
              </ListItem>                    
            </List>
          </Drawer>
          <main className={classes.content}>      
            {/* <Route path="/SearchPersonal" component={SearchPersonal}/>             */}
          </main>
        </div>
      {/* </Router> */}
    </div>
  );
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Routes);
