import React from 'react';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';
import { withStyles } from '@mui/styles'; // Asegúrate de que estás usando el paquete correcto
import AppBarMain from '../components/AppBarMain';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.black,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.black,
  },
});

function AppBarSec(props) {
  const { classes } = props;

  return (
    <div>
      <AppBarMain color="white">
      
        <Toolbar className={classes.toolbar}>
          <div className={classes.left} />
          <Link
            variant="h6"
            underline="none"
            color="transparent"
            className={classes.title}
            href="/home"
          >
            {'OSAPI'}
          </Link>
        </Toolbar>
      </AppBarMain>
      <div className={classes.placeholder} />
    </div>
  );
}

AppBarSec.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarSec);
