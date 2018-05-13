import { createSelector } from 'reselect';

import {each, map, last, compact, min, max, sum, sortBy} from 'lodash';

/**
 * Direct selector to the networks state domain
 */
const selectNetworksDomain = () => (state) => state.get('networks');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Networks
 */

const makeSelectNetworks = () => createSelector(
  selectNetworksDomain(),
  (substate) => {
    let states = substate.toJS();
    let vultr = map(states.vultr, (site) => {
      let {ping} = site;
      let delay = last(ping);
      site.delay = delay == null ? 'N/A' : delay;
      let len = ping.length;
      let suc = compact(ping);
      let sucLen = suc.length;
      site.lost = (((len - sucLen) / len) * 100).toFixed() + '%';
      site.times = len;
      site.minDelay = min(suc);
      site.maxDelay = max(suc);
      site.averageDelay = Math.round(sum(suc) / sucLen);
      return site;
    });
    return {vultr: sortBy(vultr, 'averageDelay')};
  }
);

export default makeSelectNetworks;
export {
  selectNetworksDomain,
};
