/**
 *
 * Layout
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { styles as btnStyles } from '@material-ui/core/Button/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = (theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  flex: {
    display: 'flex',
    flex: 1,
  },
  footer: {
    height: '2em',
    lineHeight: '2em',
    textAlign: 'center',
    marginTop: '0.5em',
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  raised: Object.assign(
    btnStyles(theme).raised,
    btnStyles(theme).raisedPrimary,
  ),
});

class Layout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      children,
    } = this.props;
    return (
      <section className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              <Button color="inherit" component={NavLink} to="/" exact activeClassName={classes.raised} >Home</Button>
              <Button color="inherit" component={NavLink} to="/blogs" activeClassName={classes.raised} >Blog</Button>
              <Button color="inherit" component={NavLink} to="/keynotes" activeClassName={classes.raised} >Keynote</Button>
              <Button color="inherit" component={NavLink} to="/tools" activeClassName={classes.raised} >Tools</Button>
              <Button color="inherit" component={NavLink} to="/games" activeClassName={classes.raised} >Games</Button>
            </Typography>
          </Toolbar>
        </AppBar>
        <section className={classes.flex}>
          {children}
        </section>
        <footer className={classes.footer}>
          <div className="container">
            Copyright © 2017-2018 GSMLG - Powered by GSMLG Web.
          </div>
        </footer>
      </section>
    );
  }
}

Layout.propTypes = {

};

export default withStyles(styles)(Layout);
