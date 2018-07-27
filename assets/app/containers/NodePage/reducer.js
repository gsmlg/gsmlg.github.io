/*
 *
 * NodePage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT,
  MOUNT,
  UNMOUNT,
} from './constants';

const initialState = fromJS({});

function nodePageReducer(state = initialState, action) {
  switch (action.type) {
    case INIT:
      return state;
    case MOUNT:
      return state;
    case UNMOUNT:
      return state;
    default:
      return state;
  }
}

export default nodePageReducer;
