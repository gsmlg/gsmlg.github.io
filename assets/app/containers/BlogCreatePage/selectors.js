import { createSelector } from 'reselect';

/**
 * Direct selector to the blogCreate state domain
 */
const selectBlogCreateDomain = (state) => state.get('blogCreate');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BlogCreate
 */

const makeSelectBlogCreate = () => createSelector(
  selectBlogCreateDomain,
  (substate) => substate.toJS()
);

export default makeSelectBlogCreate;
export {
  selectBlogCreateDomain,
};
