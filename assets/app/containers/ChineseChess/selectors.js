import { createSelector } from 'reselect';

/**
 * Direct selector to the chineseChess state domain
 */
export const selectChineseChessDomain = () => (state) => state.get('chineseChess');

/**
 * Other specific selectors
 */
export const makeSelectChannel = () => createSelector(
  selectChineseChessDomain(),
  (substate) => substate.get('channel')
);

/**
 * Default selector used by ChineseChess
 */
export const makeSelectChineseChess = () => createSelector(
  selectChineseChessDomain(),
  (substate) => substate.toJS()
);

export default makeSelectChineseChess;
