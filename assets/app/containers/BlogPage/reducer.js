/*
 *
 * BlogPage reducer
 *
 */

import { fromJS } from 'immutable';

import DATA from 'data/index';

const initialState = fromJS({
  blogs: DATA.Blogs,
});

function blogPageReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default blogPageReducer;
