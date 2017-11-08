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
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

const activeStyle = {
  color: 'red',
};

class Layout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { classes } = this.props;
    return (
      <section className="application-layout">
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              <Button color="contrast" component={NavLink} to="/" exact>Home</Button>
              <Button color="contrast" component={NavLink} to="/blogs" activeStyle={activeStyle} >Blog</Button>
              <Button color="contrast" component={NavLink} to="/keynotes" activeStyle={activeStyle} >Keynote</Button>
              <Button color="contrast" component={NavLink} to="/networks" activeStyle={activeStyle} >Networks</Button>
              <Button color="contrast" component={NavLink} to="/games" activeStyle={activeStyle} >Games</Button>
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
        <section className="container layout-content">
          {this.props.children}
        </section>
        <footer className="layout-footer">
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
