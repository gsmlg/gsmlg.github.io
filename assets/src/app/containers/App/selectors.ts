import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.app || initialState;

export const selectSocket = createSelector(
  [selectDomain],
  appState => appState.socket,
);
