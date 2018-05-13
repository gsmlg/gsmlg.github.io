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
  var id, vultr, site;
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case DO_CHECK:
      id = action.site.id;
      vultr = state.get('vultr');
      site = vultr.get(id);
      site = site.set('pending', true);
      vultr = vultr.set(id, site);
      return state.set('vultr', vultr);
    case CHECK_DONE:
      id = action.site.id;
      vultr = state.get('vultr');
      site = vultr.get(id);
      site = site.set('pending', false);
      var ping = site.get('ping').push(action.time);
      site = site.set('ping', ping);
      vultr = vultr.set(id, site);
      return state.set('vultr', vultr);
    default:
      return state;
  }
}

export default networksReducer;
