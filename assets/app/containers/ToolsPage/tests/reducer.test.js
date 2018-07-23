
import { fromJS } from 'immutable';
import toolsPageReducer from '../reducer';

describe('toolsPageReducer', () => {
  it('returns the initial state', () => {
    expect(toolsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
