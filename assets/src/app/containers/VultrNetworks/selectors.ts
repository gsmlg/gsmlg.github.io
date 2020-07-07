import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.vultrNetworks || initialState;

export const selectVultrNetworks = createSelector(
  [selectDomain],
  vultrNetworksState => vultrNetworksState,
);

export const selectHosts = createSelector([selectDomain], ({ hosts }) => {
  const vultr = hosts.map(site => {
    const { ping } = site;
    const delay = ping[ping.length - 1];
    const success = ping.filter(p => !Number.isNaN(p));
    const averageDelay =
      success.reduce((all, p) => all + p, 0) / success.length;
    return {
      ...site,
      delay: delay == null ? NaN : delay,
      lost: (((ping.length - success.length) / ping.length) * 100).toFixed(),
      times: ping.length,
      minDelay: Math.min(...success),
      maxDelay: Math.max(...success),
      averageDelay: Number.isNaN(averageDelay) ? NaN : Math.round(averageDelay),
    };
  });
  return vultr.sort(({ averageDelay: m }, { averageDelay: n }) => {
    if (Number.isNaN(m)) return 1;
    if (m === n) return 0;
    return m > n ? 1 : -1;
  });
});
