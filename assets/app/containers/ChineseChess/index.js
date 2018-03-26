/*
 *
 * ChineseChess
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Board from 'components/ChessBoard';
import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import reducer from './reducer';
import saga from './saga';
import makeSelectChineseChess from './selectors';
import {
  movePiece,
  kill,
  start,
} from './actions';
import canDrop from './canDrop';

const styles = (theme) => ({
  paper: {
    width: '320px',
    height: '480px',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

export class ChineseChess extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      chess,
      movePiece,
      kill,
      start,
      classes,
    } = this.props;

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Helmet
          title="中国象棋"
          meta={[
            { name: 'description', content: '中国象棋游戏' },
          ]}
        />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Paper>
              <Board
                {...chess}
                kill={kill}
                movePiece={movePiece}
                canDrop={canDrop}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <Button variant="raised" color="primary" className={classes.button} onClick={start}>
                Start Game
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

ChineseChess.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  chess: makeSelectChineseChess(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  movePiece,
  kill,
  start,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chineseChess', reducer });
const withSaga = injectSaga({ key: 'chineseChess', saga });

export default compose(
  withStyles(styles),
  withReducer,
  withSaga,
  withConnect,
)(ChineseChess);
