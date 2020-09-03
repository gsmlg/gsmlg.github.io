import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.xiangqi || initialState;

export const selectXiangqi = createSelector(
  [selectDomain],
  xiangqiState => xiangqiState,
);
