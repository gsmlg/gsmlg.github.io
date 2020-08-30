import { takeLatest, take, call, put, select } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { selectSocket } from '../App/selectors';
import { actions } from './slice';
import { selectChannel } from './selectors';

export function* mount() {
  const params = {};
  const socket = yield select(selectSocket);

  try {
    const channel = socket.channel('node:lobby', {});
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

function createChannel(channel) {
  return eventChannel(emitter => {
    channel.on('node_state', payload => {
      emitter(actions.setNodeState(payload));
    });
    channel.on('node_info', payload => {
      emitter(actions.updateNodeInfo(payload));
    });
    channel.on('list_info', payload => {
      emitter(actions.updateNodeList(payload));
    });
    return () => channel.off();
  });
}

export function* join() {
  const channel = yield select(selectChannel);

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
  const channel = yield select(selectChannel);

  try {
    channel.leave();
    yield put(actions.unsetChannel(null));
  } catch (err) {
    console.log(err);
  }
}

export function* elixirNodesSaga() {
  // yield takeLatest(actions.someAction.type, doSomething);
  // See example in containers/HomePage/saga.js
  yield takeLatest(actions.mount.type, mount);
  yield takeLatest(actions.unmount.type, leave);
}
