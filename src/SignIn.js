import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import AppBarRaiz from "./views/AppBarRaiz";

import {loginPaciente} from "./controller/nutriApp.controller";

class Ingreso extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      dni: '',         
      isLogged: false,  
      fallo: false,
    }
  }
async validarLogin(user)
{
  let respuesta = await loginPaciente(user);
  console.log(respuesta)
  if (respuesta.rdo===0)
  {
    alert("Bienvenido a UADE Medical Group")

    this.props.history.push({
    pathname: this.props.history.push('/VistaPaciente')      
    });  
  }
  else
    alert("error al intentar ingresar")
}
//Capturar el mail y pwd cuando la ingresas en el estado
presionarBotonLogin = () =>{
  console.log("dni",this.state.dni);
  console.log("password",this.state.password);
  let user={
    dni: this.state.dni,
    password: this.state.password
  }
  this.validarLogin(user);  
};

cambiarTextoDni = (event) => {
  this.setState({
    dni: event.target.value,
  });
};
cambiarTextoPassword = (event) => {
  this.setState({
    password: event.target.value,
  });
};

render(){
  const { classes } = this.props;
  return (
    <Container component="main" maxWidth="xs">
      <p></p>
      <AppBarRaiz></AppBarRaiz> 
        <CssBaseline />
          <Typography color="inherit" align="center" variant="h5">
                Datos Logueo
          </Typography>
          <Grid container spacing={2} align='center'>
            <Grid item xs={6}>
              <TextField
              name= 'dni'
              label= 'dni'
              onChange={this.cambiarTextoDni.bind(this)}           
              >           
              </TextField>  
              <TextField
                name= 'password'
                label= 'password'
                onChange={this.cambiarTextoPassword.bind(this)}
              >           
              </TextField> 
              </Grid>
              </Grid>
              <p></p>
              <Button align='center'
                variant="contained"
                color="primary"
                size="large"
                onClick={this.presionarBotonLogin.bind(this)}
              >
                Sign In
              </Button>
          </Container>
          
    )
}
}

export default Ingreso;