
import { fromJS } from 'immutable';
import distributedNodePageReducer from '../reducer';

describe('distributedNodePageReducer', () => {
  it('returns the initial state', () => {
    expect(distributedNodePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
