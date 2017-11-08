/**
 *
 * Layout
 *
 */

import React from 'react';
// import styled from 'styled-components';
import { withStyles } from 'material-ui/styles';

import { NavLink } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { styles as btnStyles } from 'material-ui/Button/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import { blue } from 'material-ui/colors';

const styles = (theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  },
  flex: {
    flex: 1,
  },
  footer: {
    height: '2em',
    lineHeight: '2em',
    textAlign: 'center',
    marginTop: '1.5em',
    color: blue[50],
    backgroundColor: blue[500],
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
      children
    } = this.props;
    return (
      <section className={classes.root}>
        <AppBar position="static" >
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              <Button color="contrast" component={NavLink} to="/" exact activeClassName={classes.raised} >Home</Button>
              <Button color="contrast" component={NavLink} to="/blogs" activeClassName={classes.raised} >Blog</Button>
              <Button color="contrast" component={NavLink} to="/keynotes" activeClassName={classes.raised} >Keynote</Button>
              <Button color="contrast" component={NavLink} to="/networks" activeClassName={classes.raised} >Networks</Button>
              <Button color="contrast" component={NavLink} to="/games" activeClassName={classes.raised} >Games</Button>
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
        <section className={classes.flex}>
          {children}
        </section>
        <footer className={classes.footer}>
          <div className="container">
            Copyright © 2017 GSMLG - Powered by GSMLG Web.
          </div>
        </footer>
      </section>
    );
  }
}

Layout.propTypes = {

};

export default withStyles(styles)(Layout);
