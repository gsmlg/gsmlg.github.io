/**
 *
 * Tools
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/styles';

import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Layout from 'app/components/Layout';

interface Props {}

const useStyles = makeStyles(theme => ({
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
}));

export function Tools(props: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const classes = useStyles();

  return (
    <Layout>
      <Helmet>
        <title>Tools</title>
        <meta name="description" content="Description of Tools" />
      </Helmet>
      <Grid container justify="center" className={classes.root}>
        <Grid item md={11}>
          <Grid container>
            <Grid item md={4}>
              <Paper className={classes.paper}>
                <Link className={classes.link} to="/tools/vultr-networks">
                  <Typography className={classes.text} component="h3">
                    Vultr Networks Delay
                  </Typography>
                </Link>
              </Paper>
              <Paper className={classes.paper}>
                <Link className={classes.link} to="/tools/nodes">
                  <Typography className={classes.text} component="h3">
                    Phoenix Nodes
                  </Typography>
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
