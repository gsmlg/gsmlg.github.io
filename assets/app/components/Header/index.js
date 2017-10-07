import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MenuIcon from 'material-ui-icons/Menu';
import messages from './messages';
import HeaderLink from './HeaderLink';

const styles = theme => ({
  root: {
    marginTop: 0,
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

@withStyles(styles)
class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  state = {
    anchorEl: null,
    open: false,
  };

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={this.handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              open={this.state.open}
              onRequestClose={this.handleRequestClose}
              >
              <MenuItem onClick={this.handleRequestClose}>
                <HeaderLink to="/">
                  <FormattedMessage {...messages.home} />
                </HeaderLink>
              </MenuItem>
              <MenuItem onClick={this.handleRequestClose}>
                <HeaderLink to="/features">
                  <FormattedMessage {...messages.features} />
                </HeaderLink>
              </MenuItem>
            </Menu>
            <Typography type="title" color="inherit" className={classes.flex}>
              <FormattedMessage {...messages.home}/>
            </Typography>
            <Button color="contrast">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
