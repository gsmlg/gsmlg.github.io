/*
 *
 * ChineseChess reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  MOVE_POSITION,
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

const redPieces = [
  {
    name: '车',
    type: 4,
    position: {x: 0, y: 0}
  },
  {
    name: '马',
    type: 3,
    position: {x: 1, y: 0}
  },
  {
    name: '相',
    type: 2,
    position: {x: 2, y: 0}
  },
  {
    name: '士',
    type: 1,
    position: {x: 3, y: 0}
  },
  {
    name: '帅',
    type: 0,
    position: {x: 4, y: 0}
  },
  {
    name: '士',
    type: 1,
    position: {x: 5, y: 0}
  },
  {
    name: '相',
    type: 2,
    position: {x: 6, y: 0}
  },
  {
    name: '马',
    type: 3,
    position: {x: 7, y: 0}
  },
  {
    name: '车',
    type: 4,
    position: {x: 8, y: 0}
  },
  {
    name: '炮',
    type: 5,
    position: {x: 1, y: 2}
  },
  {
    name: '炮',
    type: 5,
    position: {x: 7, y: 2}
  },
  {
    name: '兵',
    type: 6,
    position: {x: 0, y: 3}
  },
  {
    name: '兵',
    type: 6,
    position: {x: 2, y: 3}
  },
  {
    name: '兵',
    type: 6,
    position: {x: 4, y: 3}
  },
  {
    name: '兵',
    type: 6,
    position: {x: 6, y: 3}
  },
  {
    name: '兵',
    type: 6,
    position: {x: 8, y: 3}
  },
];

const blackPieces = [
  {
    name: '車',
    type: 4,
    position: {x: 0, y: 9}
  },
  {
    name: '馬',
    type: 3,
    position: {x: 1, y: 9}
  },
  {
    name: '象',
    type: 2,
    position: {x: 2, y: 9}
  },
  {
    name: '仕',
    type: 1,
    position: {x: 3, y: 9}
  },
  {
    name: '将',
    type: 0,
    position: {x: 4, y: 9}
  },
  {
    name: '仕',
    type: 1,
    position: {x: 5, y: 9}
  },
  {
    name: '象',
    type: 2,
    position: {x: 6, y: 9}
  },
  {
    name: '馬',
    type: 3,
    position: {x: 7, y: 9}
  },
  {
    name: '車',
    type: 4,
    position: {x: 8, y: 9}
  },
  {
    name: '砲',
    type: 5,
    position: {x: 1, y: 7}
  },
  {
    name: '砲',
    type: 5,
    position: {x: 7, y: 7}
  },
  {
    name: '卒',
    type: 6,
    position: {x: 0, y: 6}
  },
  {
    name: '卒',
    type: 6,
    position: {x: 2, y: 6}
  },
  {
    name: '卒',
    type: 6,
    position: {x: 4, y: 6}
  },
  {
    name: '卒',
    type: 6,
    position: {x: 6, y: 6}
  },
  {
    name: '卒',
    type: 6,
    position: {x: 8, y: 6}
  },
];

const initialState = fromJS({
  redPieces: redPieces.map((p, i) => {
    p.id = `r${i}`;
    p.color = 'red';
    p.live = true;
    return p;
  }),
  blackPieces: blackPieces.map((p, i) => {
    p.id = `b${i}`;
    p.color = 'black';
    p.live = true;
    return p;
  }),
});

function chineseChessReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DEFAULT_ACTION:
      return state;
    case MOVE_POSITION:
      const index = Number(payload.item.id.slice(1));
      if (payload.item.color === 'red') {
        return state.mergeIn(['redPieces', index, 'position'], payload.position);
      } else {
        return state.mergeIn(['blackPieces', index, 'position'], payload.position);
      }
    default:
      return state;
  }
}

export default chineseChessReducer;
