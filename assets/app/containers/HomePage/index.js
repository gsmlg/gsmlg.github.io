/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Layout from 'components/Layout';

const useStyles = makeStyles((theme) => ({
  root: theme.mixins.gutters({
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing(3),
  }),
}));

const HomePage = (props) => { // eslint-disable-line react/prefer-stateless-function
  const classes = useStyles();

  return (
    <Layout>
      <Helmet
        title="HomePage"
        meta={[
          { name: 'description', content: 'Description of HomePage' },
        ]}
      />
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          这里是我的主页！
        </Typography>
      </Paper>
    </Layout>
  );
};

export default HomePage;
