import { take, takeLatest, call, put, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { actions } from './slice';
import { selectSocket } from '../App/selectors';
import { selectChannel } from './selectors';

export function* start() {
  const channel = yield select(selectChannel);
  channel.push('start');
}

export function* movePiece(action) {
  const channel = yield select(selectChannel);
  const { payload } = action;
  channel.push('move_chess', payload);
}

function createChannel(channel) {
  const { setPieces, changeTurn, movePieceRemote } = actions;
  return eventChannel(emitter => {
    channel.on('init_pieces', payload => {
      emitter(setPieces(payload.pieces));
      emitter(changeTurn(payload.turn));
    });
    channel.on('move_chess_remote', payload => {
      emitter(
        movePieceRemote({ item: payload.item, position: payload.position }),
      );
      emitter(setPieces(payload.pieces));
    });
    return () => channel.off();
  });
}

export function* mount() {
  try {
    const socket = yield select(selectSocket);
    const channel = socket.channel('room:chess', {});
    yield put(actions.initChannel(channel));

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
    const channel = yield select(selectChannel);
    channel.off();
    channel.leave();
    yield put(actions.unsetChannel(null));
  } catch (err) {
    console.error(err);
  }
}

export function* xiangqiSaga() {
  yield takeLatest(actions.mount.type, mount);
  yield takeLatest(actions.unmount.type, unmount);
  yield takeLatest(actions.start.type, start);
  yield takeLatest(actions.movePiece.type, movePiece);
}
