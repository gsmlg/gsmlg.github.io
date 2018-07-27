import { createSelector } from 'reselect';

/**
 * Direct selector to the nodePage state domain
 */
export const selectNodePageDomain = (state) => state.get('nodePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NodePage
 */

export const makeSelectNodePage = () => createSelector(
  selectNodePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectNodePage;
