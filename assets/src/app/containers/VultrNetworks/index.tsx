/**
 *
 * VultrNetworks
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import Layout from 'app/components/Layout';
import Card from './Card';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { actions, reducer, sliceKey } from './slice';
import { selectHosts } from './selectors';
import { vultrNetworksSaga } from './saga';

interface Props {}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1em',
  },
}));

export function VultrNetworks(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: vultrNetworksSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hosts = useSelector(selectHosts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  const networks = hosts;

  React.useEffect(() => {
    dispatch(actions.startCheck({}));
  }, [dispatch]);

  return (
    <Layout>
      <Helmet>
        <title>VultrNetworks</title>
        <meta name="description" content="Description of VultrNetworks" />
      </Helmet>
      <Grid container justify="center" spacing={6} className={classes.root}>
        <Grid item md={11} sm={2}>
          <Grid container spacing={6} justify="center">
            {networks.map(host => (
              <Grid key={host.host} item md={3} sm={4}>
                <Card host={host} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
