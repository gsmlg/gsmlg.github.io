/*
 *
 * ChineseChess actions
 *
 */

import {
  DEFAULT_ACTION,
  MOVE_POSITION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export const movePiece = (item,position) => ({
  type: MOVE_POSITION,
  payload: {
    item,
    position,
  },
})
