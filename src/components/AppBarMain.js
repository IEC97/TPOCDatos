import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles'; // Asegúrate de que estás usando el paquete correcto
//import MuiAppBar from '@material-ui/core/AppBar';
import MuiAppBar from '@mui/material/AppBar'; // Cambia la importación de MuiAppBar

const styles = (theme) => ({
  root: {
    color: "black",
  },
});

function AppBar(props) {
  return <MuiAppBar elevation={0} position="static" {...props} />;
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBar);
