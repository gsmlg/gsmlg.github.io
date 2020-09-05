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
    movePiece(state, action: PayloadAction<any>) {
      const { item, position } = action.payload;
      const index = Number(item.id.slice(1));
      if (item.color === ChessColor.Red) {
        state.redPieces[index].position = position;
        state.turn = ChessColor.Black;
      } else {
        state.blackPieces[index].position = position;
        state.turn = ChessColor.Red;
      }
      return state;
    },
    movePieceRemote(state, action: PayloadAction<any>) {
      const { item, position } = action.payload;
      const index = Number(item.id.slice(1));
      if (item.color === ChessColor.Red) {
        state.redPieces[index].position = position;
        state.turn = ChessColor.Black;
      } else {
        state.blackPieces[index].position = position;
        state.turn = ChessColor.Red;
      }
      return state;
    },
    start(state, action: PayloadAction<any>) {},
    kill(state, action: PayloadAction<any>) {
      const { item } = action.payload;
      const index = Number(item.id.slice(1));
      if (item.color === ChessColor.Red) {
        state.redPieces[index].live = false;
      } else {
        state.blackPieces[index].live = false;
      }
    },
    setPieces(state, action: PayloadAction<any>) {
      const pieces = action.payload;
      const redPieces = pieces.filter(p => p.color === ChessColor.Red);
      const blackPieces = pieces.filter(p => p.color === ChessColor.Black);
      state.redPieces = redPieces;
      state.blackPieces = blackPieces;
      return state;
    },
    changeTurn(state, action: PayloadAction<any>) {
      state.turn = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = xiangqiSlice;
