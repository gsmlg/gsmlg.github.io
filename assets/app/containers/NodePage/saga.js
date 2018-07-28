import { takeLatest, take, call, put, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import {
  INIT,
  MOUNT,
  UNMOUNT,
} from './constants';
import {
  makeSelectSocket,
} from '../App/selectors';
import {
  initChannel,
  unsetChannel,
  nodeState,
  nodeInfo,
  listInfo,
} from './actions';
import {
  makeSelectChannel,
} from './selectors';

export function* init() {
  const params = {};
  const socket = yield select(makeSelectSocket());

  try {
    const channel = socket.channel('node:lobby', {});
    yield put(initChannel(channel));
  } catch (err) {
    console.error(err);
  }
}

function createChannel(channel) {
  return eventChannel((emitter) => {
    channel.on('node_state', (payload) => {
      emitter(nodeState(payload));
    });
    channel.on('node_info', (payload) => {
      emitter(nodeInfo(payload));
    });
    channel.on('list_info', (payload) => {
      emitter(listInfo(payload));
    });
    return () => channel.off();
  });
}

export function* join() {
  const channel = yield select(makeSelectChannel());

  try {
    channel.join();
    const conn = yield call(createChannel, channel);
    while (true) {
      const action = yield take(conn);
      yield put(action);
    }
  } catch (err) {
    console.log(err);
  }
}

export function* leave() {
  const channel = yield select(makeSelectChannel());

  try {
    channel.leave();
    yield put(unsetChannel());
  } catch (err) {
    console.log(err);
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(INIT, init);
  yield takeLatest(MOUNT, join);
  yield takeLatest(UNMOUNT, leave);
}
