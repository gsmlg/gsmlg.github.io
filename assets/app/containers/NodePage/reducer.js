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
  INIT_CHANNEL,
  UNSET_CHANNEL,
  NODE_STATE,
  NODE_INFO,
  LIST_INFO,
} from './constants';

const initialState = fromJS({
  nodes: [],
  node_list: [],
  name: '',
  isAlive: false,
  socket: null,
});

function nodePageReducer(state = initialState, action) {
  const { payload, type } = action;

  switch (type) {
    case INIT:
      return state;
    case MOUNT:
      return state;
    case UNMOUNT:
      return state;
    case INIT_CHANNEL:
      return state.set('channel', payload.channel);
    case UNSET_CHANNEL:
      return state.set('channel', null);
    case NODE_STATE:
      return state.merge(payload);
    case NODE_INFO:
      return state.merge(payload);
    case LIST_INFO:
      return state.merge(payload);
    default:
      return state;
  }
}

export default nodePageReducer;
