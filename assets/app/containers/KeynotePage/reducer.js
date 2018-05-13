/*
 *
 * KeynotePage reducer
 *
 */

import { fromJS } from 'immutable';

import DATA from 'data';

const initialState = fromJS(DATA.Keynotes);

function keynotesPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default keynotesPageReducer;
