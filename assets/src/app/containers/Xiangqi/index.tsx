/**
 *
 * Xiangqi
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Layout from 'app/components/Layout';

import GameBoard from './components/DndContext';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { selectXiangqi } from './selectors';
import { xiangqiSaga } from './saga';
import canDrop from './canDrop';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
  boardPaper: {
    width: '540px',
    height: '600px',
  },
  paper: {
    width: '320px',
    height: '600px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    margin: theme.spacing(1),
  },
}));

interface Props {}

export function Xiangqi(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: xiangqiSaga });

  const classes = useStyles();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const xiangqi = useSelector(selectXiangqi);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const { kill, movePiece, start } = bindActionCreators(actions, dispatch);

  return (
    <Layout>
      <Helmet>
        <title>Xiangqi</title>
        <meta name="description" content="Description of Xiangqi" />
      </Helmet>
      <Grid container>
        <Grid item xs={12} sm={12} className={classes.grid}>
          <Paper className={classes.boardPaper}>
            <GameBoard
              redPieces={xiangqi.redPieces}
              blackPieces={xiangqi.blackPieces}
              turn={xiangqi.turn}
              kill={kill}
              movePiece={movePiece}
              canDrop={canDrop}
            />
          </Paper>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              回合： {xiangqi.turn}
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={start}
            >
              Start Game
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}
