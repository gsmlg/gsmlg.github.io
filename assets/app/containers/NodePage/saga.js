import { takeLatest, take, call, put, select } from 'redux-saga/effects';
import {
  INIT,
  MOUNT,
  UNMOUNT,
} from './constants';
import {
  makeSelectSocket,
} from '../App/selectors';

let channel;

export function* connect() {
  const params = {};
  const socket = yield select(makeSelectSocket());

  try {
    channel = socket.channel('node:lobby', {});
    if (!channel.isJoined()) {
      channel.join();
    }
  } catch (err) {
    console.error(err);
  }
}

export function* disconnect() {
  channel.leave();
  channel.off();
}

// Individual exports for testing
export default function* defaultSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(INIT, connect);
  yield takeLatest(UNMOUNT, disconnect);
}
