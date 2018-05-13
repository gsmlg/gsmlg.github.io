
import { fromJS } from 'immutable';
import networksReducer from '../reducer';

describe('networksReducer', () => {
  it('returns the initial state', () => {
    expect(networksReducer(undefined, {})).toEqual(fromJS({}));
  });
});
