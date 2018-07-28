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
  from: {},
  channel: null,
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
    case NODE_STATE: {
      return state.merge(payload);
    }
    case NODE_INFO: {
      const { from, ...info } = payload;
      if (from === state.get('name')) {
        return state.mergeIn(['from', from], info).merge(info);
      }
      return state.mergeIn(['from', from], info);
    }
    case LIST_INFO: {
      const { from, ...info } = payload;
      if (from === state.get('name')) {
        return state.mergeIn(['from', from], info).merge(info);
      }
      return state.mergeIn(['from', from], info);
    }
    default:
      return state;
  }
}

export default nodePageReducer;
