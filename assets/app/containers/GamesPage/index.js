/**
 *
 * Games
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import Helmet from 'react-helmet';
import Layout from 'components/Layout';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import makeSelectGames from './selectors';

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

export class GamesPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const {
      classes,
      Games,
    } = this.props;
    return (
      <Layout>
        <Helmet
          title="KeynotePage"
          meta={[
            { name: 'description', content: 'Description of KeynotePage' },
          ]}
        />
        <Grid container justify="center" className={classes.root}>
          <Grid item md={11}>
            <Grid container>
              <Grid item md={4}>
                <Paper className={classes.paper}>
                  <Link to="/games/chinese-chess" className={classes.link}>
                    <Typography className={classes.text} component="h3" >中国象棋</Typography>
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

const mapStateToProps = createStructuredSelector({
  Games: makeSelectGames(),
});

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
  withStyles(styles),
)(GamesPage);
