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
import Board from 'components/ChessBoard';

import reducer from './reducer';
import makeSelectChineseChess from './selectors';
import {
  movePiece,
  kill,
} from './actions';

const canDrop = (item, pos, pieces) => {
  const fx = item.position.x;
  const fy = item.position.y;
  const tx = pos.x;
  const ty = pos.y;

  const target = _.find(pieces, { position: pos });
  if (target && target.color === item.color) return false;

  const hasntPiece = (pos) => !_.find(pieces, { position: pos });

  const rk = _.find(pieces, { color: 'red', type: 0 });
  const bk = _.find(pieces, { color: 'black', type: 0 });
  if (!rk || !bk) return false;
  if (item.type !== 0 && rk.position.x === bk.position.x && fx === rk.position.x) {
    let count = 0;
    for (let i = rk.position.y + 1; i < bk.position.y; i ++) {
      if (!hasntPiece({x: fx, y: i})) count++;
    }
    if (count === 1 && tx !== fx) return false;
  }

  switch(item.type) {
    case 0: // 帅
      if (tx < 3 || tx > 5) return false;
      if (item.color === 'red' && (ty > 2)) return false;
      if (item.color === 'black' && (ty < 7)) return false;
      if (item.color == 'red') {
        if (tx === bk.position.x) {
          let count = 0;
          for (let i = rk.position.y + 1; i < bk.position.y; i ++) {
            if (!hasntPiece({x: tx, y: i})) count++;
          }
          if (count === 0) return false;
        }
      } else {
        if (tx === rk.position.x) {
          let count = 0;
          for (let i = rk.position.y + 1; i < bk.position.y; i ++) {
            if (!hasntPiece({x: tx, y: i})) count++;
          }
          if (count === 0) return false;
        }
      }
      if (tx === fx && (ty === fy + 1 || ty === fy - 1)) return true;
      if (ty === fy && (tx === fx + 1 || tx === fx - 1)) return true;
      return false;
    case 1: // 士
      if (tx < 3 || tx > 5) return false;
      if (item.color === 'red' && (ty > 2)) return false;
      if (item.color === 'black' && (ty < 7)) return false;
      if (tx === fx + 1 && (ty === fy + 1 || ty === fy - 1)) return true;
      if (tx === fx - 1 && (ty === fy + 1 || ty === fy - 1)) return true;
      return false;
    case 2: // 相
      if (item.color === 'red' && ty > 4) return false;
      if (item.color === 'black' && ty < 5) return false;
      if (hasntPiece({x: fx-1, y: fy-1})) {
        if (tx === fx-2 && ty === fy-2) return true;
      }
      if (hasntPiece({x: fx-1, y: fy+1})) {
        if (tx === fx-2 && ty === fy+2) return true;
      }
      if (hasntPiece({x: fx+1, y: fy-1})) {
        if (tx === fx+2 && ty === fy-2) return true;
      }
      if (hasntPiece({x: fx+1, y: fy+1})) {
        if (tx === fx+2 && ty === fy+2) return true;
      }
      return false;
    case 3: // 马
      if (hasntPiece({x:fx-1, y: fy})) {
        if (tx === fx-2 && (ty === fy + 1 || ty === fy - 1)) return true;
      }
      if (hasntPiece({x:fx+1, y: fy})) {
        if (tx === fx+2 && (ty === fy + 1 || ty === fy - 1)) return true;
      }
      if (hasntPiece({x:fx, y: fy-1})) {
        if (ty === fy-2 && (tx === fx + 1 || tx === fx - 1)) return true;
      }
      if (hasntPiece({x:fx, y: fy+1})) {
        if (ty === fy+2 && (tx === fx + 1 || tx === fx - 1)) return true;
      }
      return false;
    case 4: // 车
      if (fx === tx) {
        let count = 0;
        if (ty > fy) {
          for ( let i = fy + 1; i <= ty; i++ ) {
            if (_.find(pieces, { position: { x: fx, y: i } })) count++;
          }
        } else {
          for ( let i = fy - 1; i >= ty; i-- ) {
            if (_.find(pieces, { position: { x: fx, y: i } })) count++;
          }
        }
        return count == 0 || (count == 1 && target);
      } else if (fy === ty) {
        let count = 0;
        if (tx > fx) {
          for ( let i = fx + 1; i <= tx; i++ ) {
            if (_.find(pieces, { position: { x: i, y: fy } })) count++;
          }
        } else {
          for ( let i = fx - 1; i >= tx; i-- ) {
            if (_.find(pieces, { position: { x: i, y: fy } })) count++;
          }
        }
        return count == 0 || (count == 1 && target);
      } else {
        return false;
      }
    case 5: // 炮
      if (fx === tx) {
        let count = 0;
        if (ty > fy) {
          for ( let i = fy + 1; i <= ty; i++ ) {
            if (_.find(pieces, { position: { x: fx, y: i } })) count++;
          }
        } else {
          for ( let i = fy - 1; i >= ty; i-- ) {
            if (_.find(pieces, { position: { x: fx, y: i } })) count++;
          }
        }
        return count == 0 || (count == 2 && target);
      } else if (fy === ty) {
        let count = 0;
        if (tx > fx) {
          for ( let i = fx + 1; i <= tx; i++ ) {
            if (_.find(pieces, { position: { x: i, y: fy } })) count++;
          }
        } else {
          for ( let i = fx - 1; i >= tx; i-- ) {
            if (_.find(pieces, { position: { x: i, y: fy } })) count++;
          }
        }
        return count == 0 || (count == 2 && target);
      } else {
        return false;
      }
    case 6: // 兵
      if (item.color === 'red') {
        if (item.position.y > 4) {
          return (pos.x === item.position.x && pos.y === item.position.y + 1)
            || (pos.x === item.position.x + 1 && pos.y === item.position.y)
            || (pos.x === item.position.x - 1 && pos.y === item.position.y);
        } else {
          return pos.x === item.position.x && pos.y === item.position.y + 1;
        }
      } else {
        if (item.position.y < 5) {
          return (pos.x === item.position.x && pos.y === item.position.y - 1)
            || (pos.x === item.position.x + 1 && pos.y === item.position.y)
            || (pos.x === item.position.x - 1 && pos.y === item.position.y);
        } else {
          return pos.x === item.position.x && pos.y === item.position.y - 1;
        }
      }
      break;
  }
  return false;
};

export class ChineseChess extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      chess,
      movePiece,
      kill,
    } = this.props;

    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Helmet
          title="中国象棋"
          meta={[
            { name: 'description', content: '中国象棋游戏' },
          ]}
        />
        <Board
          {...chess}
          kill={kill}
          movePiece={movePiece}
          canDrop={canDrop} ></Board>
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
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'chineseChess', reducer });

export default compose(
  withReducer,
  withConnect,
)(ChineseChess);
