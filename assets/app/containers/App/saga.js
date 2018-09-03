import {
  takeLatest, take, call, put, select,
} from 'redux-saga/effects';
import { Socket } from 'phoenix';

import {
  INIT,
  MOUNT,
  UNMOUNT,
} from './constants';
import {
  setSocket,
  socketLogger,
} from './actions';
import {
  makeSelectSocket,
} from './selectors';

function* init() {
  const params = {};
  const socket = new Socket('/socket', { params, logger: (...args) => null });
  yield put(setSocket(socket));
}

function* mount() {
  const socket = yield select(makeSelectSocket());
  socket.connect();
}

function* unmount() {
  const socket = yield select(makeSelectSocket());
  socket.disconnect();
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(INIT, init);
  yield takeLatest(MOUNT, mount);
  yield takeLatest(UNMOUNT, unmount);
}
