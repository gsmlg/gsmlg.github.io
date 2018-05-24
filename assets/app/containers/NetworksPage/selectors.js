import { createSelector } from 'reselect';

import {each, map, last, compact, min, max, sum, sortBy} from 'lodash';

/**
 * Direct selector to the networks state domain
 */
export const selectNetworksDomain = () => (state) => state.get('networks');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Networks
 */

export const makeSelectNetworks = () => createSelector(
  selectNetworksDomain(),
  (substate) => {
    const states = substate.toJS();
    const vultr = map(states.vultr, (site) => {
      const { ping } = site;
      const delay = last(ping);
      const len = ping.length;
      const suc = compact(ping);
      const sucLen = suc.length;
      const averageDelay = Math.round(sum(suc) / sucLen);
      return {
        ...site,
        delay: delay == null ? 'N/A' : delay,
        lost: `${(((len - sucLen) / len) * 100).toFixed()}%`,
        times: len,
        minDelay: min(suc),
        maxDelay: max(suc),
        averageDelay: Number.isNaN(averageDelay) ? 'N/A' : averageDelay,
      };
    });
    return { vultr: sortBy(vultr, 'averageDelay') };
  }
);

export default makeSelectNetworks;
