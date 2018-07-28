import { take, takeLatest, call, put, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { Socket } from 'phoenix';
import {
  INIT,
  MOUNT,
  UNMOUNT,
  MOVE_POSITION,
  CONNECT,
  START,
} from './constants';
import {
  initChannel,
  unsetChannel,
  setPieces,
  movePieceRemote,
  changeTurn,
} from './actions';
import { makeSelectSocket } from '../App/selectors';
import { makeSelectChannel } from './selectors';

export function* start() {
  const channel = yield select(makeSelectChannel());
  channel.push('start');
}

export function* moveChess(action) {
  const channel = yield select(makeSelectChannel());
  const { payload } = action;
  channel.push('move_chess', payload);
}

export function* init() {
  try {
    const socket = yield select(makeSelectSocket());
    const channel = socket.channel('room:chess', {});
    yield put(initChannel(channel));
  } catch (err) {
    console.error(err);
  }
}

function createChannel(channel) {
  return eventChannel((emitter) => {
    channel.on('init_pieces', (payload) => {
      emitter(setPieces(payload.pieces));
      emitter(changeTurn(payload.turn));
    });
    channel.on('move_chess_remote', (payload) => {
      emitter(movePieceRemote(payload.item, payload.position));
      emitter(setPieces(payload.pieces));
    });
    return () => channel.off();
  });
}

export function* mount(act) {
  try {
    const channel = yield select(makeSelectChannel());
    channel.join();
    const conn = yield call(createChannel, channel);
    while (true) {
      const action = yield take(conn);
      yield put(action);
    }
  } catch (err) {
    console.error(err);
  }
}

export function* unmount() {
  try {
    const channel = yield select(makeSelectChannel());
    channel.off();
    channel.leave();
    yield put(unsetChannel());
  } catch (err) {
    console.error(err);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeLatest(INIT, init);
  yield takeLatest(MOUNT, mount);
  yield takeLatest(UNMOUNT, unmount);
  yield takeLatest(START, start);
  yield takeLatest(MOVE_POSITION, moveChess);
}
