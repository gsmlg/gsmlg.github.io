/*
 *
 * ToolsPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  INIT,
  MOUNT,
  UNMOUNT,
} from './constants';

const initialState = fromJS({});

function toolsPageReducer(state = initialState, { type, payload }) {
  switch (type) {
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

export default toolsPageReducer;
