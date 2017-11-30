
import { fromJS } from 'immutable';
import blogCreateReducer from '../reducer';

describe('blogCreateReducer', () => {
  it('returns the initial state', () => {
    expect(blogCreateReducer(undefined, {})).toEqual(fromJS({}));
  });
});
