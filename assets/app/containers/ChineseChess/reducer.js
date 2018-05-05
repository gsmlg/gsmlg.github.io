/*
 *
 * ChineseChess reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  INIT_PIECES,
  MOVE_POSITION,
  MOVE_POSITION_REMOTE,
  KILL,
} from './constants';

const PieceTypes = [
  0, // 帅
  1, // 士
  2, // 相
  3, // 马
  4, // 车
  5, // 炮
  6, // 兵
];

const initialState = fromJS({
  redPieces: [],
  blackPieces: [],
  turn: 'red',
});

function chineseChessReducer(state = initialState, action) {
  const { type, payload } = action;
  let index;
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case INIT_PIECES:
      return state.set('redPieces', fromJS(payload.redPieces))
        .set('blackPieces', fromJS(payload.blackPieces));
    case MOVE_POSITION_REMOTE:
    case MOVE_POSITION:
      index = Number(payload.item.id.slice(1));
      if (payload.item.color === 'red') {
        return state.mergeIn(['redPieces', index, 'position'], payload.position).set('turn', 'black');
      } else {
        return state.mergeIn(['blackPieces', index, 'position'], payload.position).set('turn', 'red');
      }
    case KILL:
      index = Number(payload.item.id.slice(1));
      if (payload.item.color === 'red') {
        return state.mergeIn(['redPieces', index, 'live'], false);
      } else {
        return state.mergeIn(['blackPieces', index, 'live'], false);
      }
    default:
      return state;
  }
}

export default chineseChessReducer;
