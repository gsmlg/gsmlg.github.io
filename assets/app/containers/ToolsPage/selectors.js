import { createSelector } from 'reselect';

/**
 * Direct selector to the toolsPage state domain
 */
export const selectToolsPageDomain = (state) => state.get('tools');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ToolsPage
 */

export const makeSelectToolsPage = () => createSelector(
  selectToolsPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectToolsPage;
