/*
 *
 * ChineseChess actions
 *
 */

import {
  DEFAULT_ACTION,
  MOVE_POSITION,
  MOVE_POSITION_REMOTE,
  KILL,
  START,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
};

export const movePiece = (item,position) => ({
  type: MOVE_POSITION,
  payload: {
    item,
    position,
  },
});

export const movePieceRemote = (item,position) => ({
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

export const start = () => ({
  type: START,
  payload: {},
});
