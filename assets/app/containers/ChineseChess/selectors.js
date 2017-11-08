import { createSelector } from 'reselect';

/**
 * Direct selector to the chineseChess state domain
 */
const selectChineseChessDomain = () => (state) => state.get('chineseChess');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ChineseChess
 */

const makeSelectChineseChess = () => createSelector(
  selectChineseChessDomain(),
  (substate) => substate.toJS()
);

export default makeSelectChineseChess;
export {
  selectChineseChessDomain,
};
