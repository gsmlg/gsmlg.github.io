/**
 *
 * Game
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Layout from 'app/components/Layout';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectGame } from './selectors';
import { gameSaga } from './saga';

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

interface Props {}

export const Game = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: gameSaga });

  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const game = useSelector(selectGame);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Grid container justify="center" className={classes.root}>
        <Grid item md={11}>
          <Grid container>
            <Grid item md={4}>
              <Paper className={classes.paper}>
                <Link to="/games/xiangqi" className={classes.link}>
                  <Typography className={classes.text} component="h3">
                    中国象棋
                  </Typography>
                </Link>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
});
