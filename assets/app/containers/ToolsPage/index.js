/**
 *
 * ToolsPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';

import Layout from 'components/Layout';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectToolsPage,
} from './selectors';
import reducer from './reducer';
import {
  init,
  mount,
  unmount,
} from './actions';
import saga from './saga';

const styles = (theme) => ({
  root: {
    marginTop: '1em',
  },
  paper: {
    padding: '1em',
  },
  link: {
    textDecoration: 'none',
  },
  text: {
    fontSize: '1.44em',
  },
});

export class ToolsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    const {
      classes,
    } = this.props;
    return (
      <Layout>
        <Helmet
          title="Tools"
          meta={[
            { name: 'description', content: 'Tools for web' },
          ]}
        />
        <Grid container justify="center" className={classes.root}>
          <Grid item md={11}>
            <Grid container>
              <Grid item md={4}>
                <Paper className={classes.paper}>
                  <Link className={classes.link} to="/tools/vultr-networks">
                    <Typography className={classes.text} component="h3" >Vultr Networks Delay</Typography>
                  </Link>
                </Paper>
                <Paper className={classes.paper}>
                  <Link className={classes.link} to="/tools/nodes">
                    <Typography className={classes.text} component="h3" >Phoenix Nodes</Typography>
                  </Link>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

ToolsPage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  toolsPage: makeSelectToolsPage(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  init,
  mount,
  unmount,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tools', reducer });
const withSaga = injectSaga({ key: 'tools', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ToolsPage);
