import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
//import Link from '@material-ui/core/Link';
import Link from '@mui/material/Link';
import AppBarMain from '../components/AppBarMain';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
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

function AppBarRaiz(props) {
  const { classes } = props;

  return (
    <div>
      <AppBarMain position="fixed" >
      
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
          <div className={classes.right}>
          <Link
              color="transparent"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/LoginStaff"
            >
              {'Staff'}
            </Link>
            <Link
              color="transparent"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/login"
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/signup"
            >
              {'Sign Up'}
            </Link>
          </div>
        </Toolbar>
      </AppBarMain>
      <div className={classes.placeholder} />
    </div>
  );
}

AppBarRaiz.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppBarRaiz);
