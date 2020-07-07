import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.elixirNodes || initialState;

export const selectElixirNodes = createSelector(
  [selectDomain],
  elixirNodesState => elixirNodesState,
);
