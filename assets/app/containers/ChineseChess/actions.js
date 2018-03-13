/*
 *
 * ChineseChess actions
 *
 */

import {
  DEFAULT_ACTION,
  MOVE_POSITION,
  KILL,
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

export const kill = (item) => ({
  type: KILL,
  payload: {
    item,
  },
});
