import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ElixirNodes container
export const initialState: ContainerState = {
  socket: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    mount(state, action: PayloadAction<any>) {},
    unmount(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
