import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Layout from './index';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function LayoutLoading(props) {
  const { classes } = props;
  return (
    <Layout>
      <div className={classes.root}>
        <CircularProgress />
      </div>
    </Layout>
  );
}

LayoutLoading.propTypes = {

};

export default withStyles(styles)(LayoutLoading);
