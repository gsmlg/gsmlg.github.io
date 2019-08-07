/*
 *
 * ChineseChess
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Board from 'components/ChessBoard';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Layout from 'components/Layout';

import reducer from './reducer';
import saga from './saga';
import makeSelectChineseChess from './selectors';
import * as actions from './actions';
import canDrop from './canDrop';

const styles = (theme) => ({
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
});

export class ChineseChess extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      chess,
      movePiece,
      kill,
      connectRoom,
      start,
      classes,
    } = this.props;

    return (
      <Layout>
        <Helmet
          title="中国象棋"
          meta={[
            { name: 'description', content: '中国象棋游戏' },
          ]}
        />
        <Grid container>
          <Grid item xs={12} sm={12} className={classes.grid}>
            <Paper className={classes.boardPaper}>
              <Board
                {...chess}
                kill={kill}
                movePiece={movePiece}
                canDrop={canDrop}
              />
            </Paper>
            <Paper className={classes.paper}>
              <Button variant="raised" color="primary" className={classes.button}>
                回合：
                {' '}
                {chess.turn}
              </Button>
              <Button variant="raised" color="primary" className={classes.button} onClick={start}>
                Start Game
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

ChineseChess.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  chess: makeSelectChineseChess(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...actions,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chineseChess', reducer });
const withSaga = injectSaga({ key: 'chineseChess', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(ChineseChess);
