/*
 *
 * ChineseChess actions
 *
 */

import {
  INIT,
  MOUNT,
  UNMOUNT,
  INIT_CHANNEL,
  UNSET_CHANNEL,
  SET_PIECES,
  MOVE_POSITION,
  MOVE_POSITION_REMOTE,
  KILL,
  CHANGE_TURN,
  START,
} from './constants';

export const init = () => ({
  type: INIT,
  payload: {},
});

export const mount = () => ({
  type: MOUNT,
  payload: {},
});

export const unmount = () => ({
  type: UNMOUNT,
  payload: {},
});

export const initChannel = (channel) => ({
  type: INIT_CHANNEL,
  payload: { channel },
});

export const unsetChannel = () => ({
  type: UNSET_CHANNEL,
  payload: {},
});

export function setPieces(pieces) {
  return {
    type: SET_PIECES,
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

export const changeTurn = (turn) => ({
  type: CHANGE_TURN,
  payload: { turn },
});

export const start = () => ({
  type: START,
  payload: {},
});
