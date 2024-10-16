import React, { Component } from 'react';
//import CssBaseline from '@material-ui/core/CssBaseline';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '../components/AppBar.js';
import RoutesAdmin from '../routes/administrador'
import '../App.css';

class VistaAdmin extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar />
        <RoutesAdmin/>
      </React.Fragment>  
    );
  }
}

export default VistaAdmin;