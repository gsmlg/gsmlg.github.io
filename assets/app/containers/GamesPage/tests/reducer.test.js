
import { fromJS } from 'immutable';
import gamesReducer from '../reducer';

describe('gamesReducer', () => {
  it('returns the initial state', () => {
    expect(gamesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
