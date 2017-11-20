/*
 *
 * Games
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import Layout from 'components/Layout';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import makeSelectGames from './selectors';

export class Games extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { Games } = this.props;
    return (
      <Layout>
        <Helmet
          title="KeynotePage"
          meta={[
            { name: 'description', content: 'Description of KeynotePage' },
          ]}
        />
        <Grid container justify="center">
          <Grid item md={11}>
            <Grid container>
              <Grid item md={4}>
                <Paper>
                  <Link to="/games/chinese-chess">
                    <Typography component="h3" >{'中国象棋'}</Typography>
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

Games.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Games: makeSelectGames(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
