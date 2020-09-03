import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, ChessColor } from './types';

// The initial state of the Xiangqi container
export const initialState: ContainerState = {
  redPieces: [],
  blackPieces: [],
  turn: ChessColor.Red,
  channel: null,
};

const xiangqiSlice = createSlice({
  name: 'xiangqi',
  initialState,
  reducers: {
    initChannel(state, action: PayloadAction<any>) {
      state.channel = action.payload;
      return state;
    },
    unsetChannel(state, action: PayloadAction<any>) {
      state.channel = null;
      return state;
    },
    movePiece(state, action: PayloadAction<any>) {
      return state;
    },
    movePieceRemote(state, action: PayloadAction<any>) {
      return state;
    },
    kill(state, action: PayloadAction<any>) {},
    start(state, action: PayloadAction<any>) {},
    setPieces(state, action: PayloadAction<any>) {},
    changeTurn(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = xiangqiSlice;
