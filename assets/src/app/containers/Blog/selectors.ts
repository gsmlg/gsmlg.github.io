import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.blog || initialState;

export const selectBlog = createSelector(
  [selectDomain],
  blogState => blogState,
);
