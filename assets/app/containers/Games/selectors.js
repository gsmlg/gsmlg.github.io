import { createSelector } from 'reselect';

/**
 * Direct selector to the games state domain
 */
const selectGamesDomain = () => (state) => state.get('games');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Games
 */

const makeSelectGames = () => createSelector(
  selectGamesDomain(),
  (substate) => []
);

export default makeSelectGames;
export {
  selectGamesDomain,
};
