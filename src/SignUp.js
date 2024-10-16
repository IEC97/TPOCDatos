import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Container from '@material-ui/core/Container';
import Container from '@mui/material/Container';
import AppBarSec from "./views/AppBarSec";
import FormAltaPaciente from '../src/pages/FormAltaPaciente';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',

  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: 'flex',
    position: 'relative',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 5),
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },

});


function DatosPersonales(props) {

  return (
    <Container>
    <div>
      <AppBarSec></AppBarSec>
    </div>
      <FormAltaPaciente></FormAltaPaciente>
    </Container>

  );
}

DatosPersonales.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DatosPersonales);
