/*
 *
 * Networks reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  DO_CHECK,
  CHECK_DONE,
} from './constants';

import VultrHosts from './vultrHosts';

const initialState = fromJS({ vultr: VultrHosts });

function networksReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case DO_CHECK: {
      const { id } = action.site;
      let vultr = state.get('vultr');
      let site = vultr.get(id);
      site = site.set('pending', true);
      vultr = vultr.set(id, site);
      return state.set('vultr', vultr);
    }
    case CHECK_DONE: {
      const { id } = action.site;
      let vultr = state.get('vultr');
      let site = vultr.get(id);
      site = site.set('pending', false);
      const ping = site.get('ping').push(action.time);
      site = site.set('ping', ping);
      vultr = vultr.set(id, site);
      return state.set('vultr', vultr);
    }
    default:
      return state;
  }
}

export default networksReducer;
