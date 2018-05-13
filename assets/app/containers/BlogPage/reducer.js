/*
 *
 * BlogPage reducer
 *
 */

import { fromJS } from 'immutable';

import DATA from 'data';

const initialState = fromJS(DATA.Blogs);

function blogPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default blogPageReducer;
