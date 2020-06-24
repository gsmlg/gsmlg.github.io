/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import GlobalStyle from 'global-styles';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import BlogPage from 'containers/BlogPage/Loadable';
import BlogContentPage from 'containers/BlogContentPage/Loadable';
import BlogCreatePage from 'containers/BlogCreatePage/Loadable';

import KeynotePage from 'containers/KeynotePage/Loadable';

import ToolsPage from 'containers/ToolsPage/Loadable';
import NetworksPage from 'containers/NetworksPage/Loadable';
import NodePage from 'containers/NodePage/Loadable';

import GamesPage from 'containers/GamesPage/Loadable';
import ChineseChess from 'containers/ChineseChess/Loadable';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import saga from './saga';
import reducer from './reducer';
import {
} from './selectors';
import {
  init,
  mount,
  unmount,
} from './actions';

const theme = createMuiTheme({
});

class App extends PureComponent {
  componentWillMount() {
    this.props.init();
  }

  componentDidMount() {
    this.props.mount();
  }

  componentWillUnmount() {
    this.props.unmount();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div style={{ display: 'flex', flex: 1 }}>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/blogs" component={BlogPage} />
            <Route exact path="/blogs/create" component={BlogCreatePage} />
            <Route exact path="/blogs/:blog_name" component={BlogContentPage} />
            <Route exact path="/keynotes" component={KeynotePage} />
            <Route exact path="/tools" component={ToolsPage} />
            <Route exact path="/tools/vultr-networks" component={NetworksPage} />
            <Route exact path="/tools/nodes" component={NodePage} />
            <Route exact path="/games" component={GamesPage} />
            <Route exact path="/games/chinese-chess" component={ChineseChess} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  init,
  mount,
  unmount,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'APP', reducer });
const withSaga = injectSaga({ key: 'APP', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
)(App);
