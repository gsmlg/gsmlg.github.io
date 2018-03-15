import { takeLatest, call, put, select } from 'redux-saga/effects';
import { Socket } from 'phoenix';
import {
  MOVE_POSITION,
  START,
} from './constants';
import {
  movePiece,
  movePieceRemote,
} from './actions';

let socket;
let channel;

export function* moveChess(action) {
  const { payload } = action;
  channel.push('move_chess', payload);
}

export function* start() {
  const params = {};
  socket = new Socket('/socket', { params, logger: console.log });
  socket.connect();
  try {
    channel = socket.channel(`room:chess`, {});
    if (!channel.isJoined()) {
      channel.join();
      channel.on('move_chess', (data) => {
        store.dispatch(movePieceRemote(data.item, data.position));
      });
    }
  } catch (err) {
    console.error(err);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(START, start);
  yield takeLatest(MOVE_POSITION, moveChess);
}
