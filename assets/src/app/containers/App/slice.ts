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
    setSocket(state, action: PayloadAction<any>) {
      state.socket = action.payload;
      return state;
    },
  },
});

export const { actions, reducer, name: sliceKey } = appSlice;
