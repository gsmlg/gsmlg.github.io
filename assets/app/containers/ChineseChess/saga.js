import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Socket } from 'phoenix';
import {
  MOVE_POSITION,
  CONNECT,
  START,
} from './constants';
import {
  initPieces,
  movePiece,
  movePieceRemote,
} from './actions';
import { store } from '../../app';

let socket;
let channel;

export function* connect() {
  const params = {};
  socket = new Socket('/socket', { params, logger: console.log });
  socket.connect();
  try {
    channel = socket.channel(`room:chess`, {});
    if (!channel.isJoined()) {
      channel.join();
      channel.on('init_pieces', (data) => {
        store.dispatch(initPieces(data.pieces));
      })
      channel.on('move_chess_remote', (data) => {
        store.dispatch(movePieceRemote(data.item, data.position));
      });
    }
  } catch (err) {
    console.error(err);
  }
}

export function* start() {
  channel.push('start');
}

export function* moveChess(action) {
  const { payload } = action;
  channel.push('move_chess', payload);
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(CONNECT, connect);
  yield takeLatest(START, start);
  yield takeLatest(MOVE_POSITION, moveChess);
}
