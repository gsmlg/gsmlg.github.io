import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the ElixirNodes container
export const initialState: ContainerState = {
  nodes: [],
  node_list: [],
  name: '',
  isAlive: false,
  from: {},
  channel: null,
};

const elixirNodesSlice = createSlice({
  name: 'elixirNodes',
  initialState,
  reducers: {
    mount(state, action: PayloadAction<any>) {},
    unmount(state, action: PayloadAction<any>) {},
    initChannel(state, action: PayloadAction<any>) {
      state.channel = action.payload;
      return state;
    },
    unsetChannel(state, action: PayloadAction<any>) {
      state.channel = null;
      return state;
    },
    setNodeState(state, action: PayloadAction<any>) {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateNodeInfo(state, action: PayloadAction<any>) {
      const { from, ...info } = action.payload;
      state.from[from] = info;
      if (from === state.name) {
        return {
          ...state,
          ...info,
        };
      }
      return state;
    },
    updateNodeList(state, action: PayloadAction<any>) {
      const { from, ...info } = action.payload;
      state.from[from] = info;
      if (from === state.name) {
        return {
          ...state,
          ...info,
        };
      }
      return state;
    },
  },
});

export const { actions, reducer, name: sliceKey } = elixirNodesSlice;
