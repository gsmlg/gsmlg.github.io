import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.game || initialState;

export const selectGame = createSelector(
  [selectDomain],
  gameState => gameState,
);
