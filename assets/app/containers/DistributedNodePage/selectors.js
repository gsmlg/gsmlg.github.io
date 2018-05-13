import { createSelector } from 'reselect';

/**
 * Direct selector to the distributedNodePage state domain
 */
export const selectDistributedNodePageDomain = (state) => state.get('distributedNodePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by DistributedNodePage
 */

const makeSelectDistributedNodePage = () => createSelector(
  selectDistributedNodePageDomain,
  (substate) => substate.toJS()
);

export default makeSelectDistributedNodePage;
