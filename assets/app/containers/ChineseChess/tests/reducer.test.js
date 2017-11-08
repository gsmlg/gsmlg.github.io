
import { fromJS } from 'immutable';
import chineseChessReducer from '../reducer';

describe('chineseChessReducer', () => {
  it('returns the initial state', () => {
    expect(chineseChessReducer(undefined, {})).toEqual(fromJS({}));
  });
});
