import React from 'react'
import {
  Router,
  Route,
  Link
} from 'react-router-dom'
//import createBrowserHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
//import Turnos from '../pages/FormSearchTurnos';
//import SearchPacientes from '../pages/FormSearchPaciente';
//import DatosPersonal from '../pages/FormPersonal';
//import ListadoMedicoRecetas from '../pages/FormAltaReceta';


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
      <Router history={history}>
        <div className={classes.root}>
          <Drawer
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {/* <div className={classes.toolbar} /> */}
            <List>
              <ListItem button component={Link} to="/medico/turnos">
                <ListItemText primary="Turnos" />
              </ListItem>       
              <ListItem button component={Link} to="/medico/listadoMedicoRecetas">
                <ListItemText primary="Recetas" />
              </ListItem>           
              <ListItem button component={Link} to="/medico/SearchPacientes">
                <ListItemText primary="Pacientes" />
              </ListItem>  
              <ListItem button component={Link} to="/medico/DatosPersonal">
                <ListItemText primary="Mis Datos" />
              </ListItem>           
            </List>
          </Drawer>
          <main className={classes.content}>
            {/* <div className={classes.toolbar} /> */}
            <Route path="/medico/turnos" component={Turnos}/> 
            <Route path="/medico/listadoMedicoRecetas" component={ListadoMedicoRecetas}/>
            <Route path="/medico/SearchPacientes" component={SearchPacientes}/>                
            <Route path="/medico/DatosPersonal" component={DatosPersonal}/>                    
          </main>
        </div>
      </Router>
    </div>
  );
}

Routes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Routes);
