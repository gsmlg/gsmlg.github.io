/**
 *
 * App reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT,
  MOUNT,
  UNMOUNT,
  SET_SOCKET,
} from './constants';

const initialState = fromJS({});

function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case INIT:
      return state;
    case MOUNT:
      return state;
    case UNMOUNT:
      return state;
    case SET_SOCKET:
      return state.set('socket', payload.socket);
    default:
      return state;
  }
}

export default appReducer;
