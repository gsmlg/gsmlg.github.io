/**
 *
 * ElixirNodes
 *
 */

import React, { useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import ComputerIcon from '@material-ui/icons/Computer';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudOffIcon from '@material-ui/icons/CloudOff';
import Layout from 'app/components/Layout';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectChannel, selectElixirNodeState } from './selectors';
import { elixirNodesSaga } from './saga';

interface Props {}

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '1em',
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  chip: {
    margin: '0.618em',
  },
  avatar: {
    display: 'flex',
  },
}));

export function ElixirNodes(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: elixirNodesSaga });
  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const elixirNodes = useSelector(selectElixirNodeState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  useEffect(() => {
    dispatch(actions.mount(null));
    return () => {
      dispatch(actions.unmount(null));
    };
  }, [dispatch]);

  const content = useCallback(
    state => {
      if (!state || !state.nodes) return null;

      return (
        <CardContent>
          {state.nodes.map(n => (
            <Chip
              key={n}
              className={classes.chip}
              label={n}
              avatar={
                <Avatar>
                  {state.node_list.includes(n) ? (
                    <CloudIcon />
                  ) : (
                    <CloudOffIcon />
                  )}
                </Avatar>
              }
            />
          ))}
        </CardContent>
      );
    },
    [classes.chip],
  );

  return (
    <Layout>
      <Helmet>
        <title>ElixirNodes</title>
        <meta name="description" content="Description of ElixirNodes" />
      </Helmet>
      <Grid container justify="center" className={classes.root}>
        <Grid item md={11} sm={10}>
          <Grid container spacing={6} justify="center">
            <Grid key={elixirNodes.name} item md={3} sm={4}>
              <Paper>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="Recipe" className={classes.avatar}>
                        <ComputerIcon />
                      </Avatar>
                    }
                    title={elixirNodes.name}
                    subheader={elixirNodes.isAlive ? 'Started' : 'Stopped'}
                  />
                </Card>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={6} justify="center">
            {elixirNodes.nodes.map(name => (
              <Grid key={name} item md={3} sm={4}>
                <Paper>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                          {elixirNodes.node_list.includes(name) ? (
                            <CloudIcon />
                          ) : (
                            <CloudOffIcon />
                          )}
                        </Avatar>
                      }
                      title={name}
                    />
                    <Divider />
                    {content(elixirNodes.from[name])}
                  </Card>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
