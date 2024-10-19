import React, { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Appbar from '../components/AppBar.js';
import RoutesSecretariaMedico from '../routes/medico'
import '../App.css';


class VistaJugador extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar />
        <RoutesSecretariaMedico />       
      </React.Fragment>  
    );
  }
}

export default VistaJugador;