import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ElixirNodes container
export const initialState: ContainerState = {};

const elixirNodesSlice = createSlice({
  name: 'elixirNodes',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = elixirNodesSlice;
