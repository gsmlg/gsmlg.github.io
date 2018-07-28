import { createSelector } from 'reselect';

/**
 * Direct selector to the nodePage state domain
 */
export const selectNodePageDomain = (state) => state.get('nodePage');

/**
 * Other specific selectors
 */
export const makeSelectChannel = () => createSelector(
  selectNodePageDomain,
  (substate) => substate.get('channel')
);

export const makeSelectNode = () => createSelector(
  selectNodePageDomain,
  (substate) => substate.filter((v, k) => k === 'name' || k === 'isAlive')
);

export const makeSelectList = () => createSelector(
  selectNodePageDomain,
  (substate) => substate.filter((v, k) => k.indexOf('node') === 0)
);

/**
 * Default selector used by NodePage
 */

export const makeSelectNodePage = () => createSelector(
  selectNodePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectNodePage;
