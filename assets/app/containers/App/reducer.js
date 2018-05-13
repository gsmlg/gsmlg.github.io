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
  LOG_SOCKET,
} from './constants';

const initialState = fromJS({
  socket: null,
  socketLogs: [],
});

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
    case LOG_SOCKET:
      return state.update('socketLogs', (logs) => logs.unshift({ kind: payload.kind, msg: payload.msg, data: payload.data }).take(1985));
    default:
      return state;
  }
}

export default appReducer;
