import { takeLatest, put, select } from 'redux-saga/effects';
// import { eventChannel } from 'redux-saga';
import { Socket } from 'phoenix';
import { actions } from './slice';
import { selectSocket } from './selectors';

export function* mount() {
  const params = {};
  const socket = new Socket('/socket', { params });
  yield put(actions.setSocket(socket));
  socket.connect();
}

export function* unmount(channel) {
  const socket = yield select(selectSocket);
  socket.disconnect();
}

export function* appSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  // See example in containers/HomePage/saga.js
  yield takeLatest(actions.mount.type, mount);
  yield takeLatest(actions.unmount.type, unmount);
}
