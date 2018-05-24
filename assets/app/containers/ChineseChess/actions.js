/*
 *
 * ChineseChess actions
 *
 */

import {
  DEFAULT_ACTION,
  INIT_PIECES,
  MOVE_POSITION,
  MOVE_POSITION_REMOTE,
  KILL,
  CONNECT,
  START,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function initPieces(pieces) {
  return {
    type: INIT_PIECES,
    payload: {
      pieces,
      redPieces: pieces.filter((p) => p.color === 'red'),
      blackPieces: pieces.filter((p) => p.color === 'black'),
    },
  };
}

export const movePiece = (item, position) => ({
  type: MOVE_POSITION,
  payload: {
    item,
    position,
  },
});

export const movePieceRemote = (item, position) => ({
  type: MOVE_POSITION_REMOTE,
  payload: {
    item,
    position,
  },
});

export const kill = (item) => ({
  type: KILL,
  payload: {
    item,
  },
});

export const connectRoom = () => ({
  type: CONNECT,
  payload: {},
});

export const start = () => ({
  type: START,
  payload: {},
});
