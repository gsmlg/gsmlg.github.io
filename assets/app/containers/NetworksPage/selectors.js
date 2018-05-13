import { createSelector } from 'reselect';

import { each, map, last, compact, min, max, sum, sortBy } from 'lodash';

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
    const states = substate.toJS();
    const vultr = map(states.vultr, (site) => {
      const { ping } = site;
      const delay = last(ping);
      site.delay = delay == null ? 'N/A' : delay;
      const len = ping.length;
      const suc = compact(ping);
      const sucLen = suc.length;
      site.lost = `${(((len - sucLen) / len) * 100).toFixed()}%`;
      site.times = len;
      site.minDelay = min(suc);
      site.maxDelay = max(suc);
      site.averageDelay = Math.round(sum(suc) / sucLen);
      return site;
    });
    return { vultr: sortBy(vultr, 'averageDelay') };
  }
);

export default makeSelectNetworks;
export {
  selectNetworksDomain,
};
