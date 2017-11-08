/*
 *
 * ChineseChess
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import Board from 'components/ChessBoard';

import reducer from './reducer';
import makeSelectChineseChess from './selectors';

export class ChineseChess extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Helmet
          title="中国象棋"
          meta={[
            { name: 'description', content: '中国象棋游戏' },
          ]}
        />
        <Board ></Board>
      </div>
    );
  }
}

ChineseChess.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ChineseChess: makeSelectChineseChess(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chineseChess', reducer });

export default compose(
  withReducer,
  withConnect,
)(ChineseChess);
