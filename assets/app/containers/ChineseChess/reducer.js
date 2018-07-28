/*
 *
 * ChineseChess reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT_CHANNEL,
  UNSET_CHANNEL,
  SET_PIECES,
  MOVE_POSITION,
  MOVE_POSITION_REMOTE,
  KILL,
  CHANGE_TURN,
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
  channel: null,
});

function chineseChessReducer(state = initialState, action) {
  const { type, payload } = action;
  let index;
  switch (type) {
    case INIT_CHANNEL:
      return state.set('channel', payload.channel);
    case UNSET_CHANNEL:
      return state.set('channel', null);
    case SET_PIECES:
      return state.set('redPieces', fromJS(payload.redPieces))
        .set('blackPieces', fromJS(payload.blackPieces));
    case MOVE_POSITION_REMOTE:
    case MOVE_POSITION:
      index = Number(payload.item.id.slice(1));
      if (payload.item.color === 'red') {
        return state.mergeIn(['redPieces', index, 'position'], payload.position).set('turn', 'black');
      }
      return state.mergeIn(['blackPieces', index, 'position'], payload.position).set('turn', 'red');

    case KILL:
      index = Number(payload.item.id.slice(1));
      if (payload.item.color === 'red') {
        return state.setIn(['redPieces', index, 'live'], false);
      }
      return state.setIn(['blackPieces', index, 'live'], false);

    case CHANGE_TURN:
      return state.set('turn', payload.turn);

    default:
      return state;
  }
}

export default chineseChessReducer;
