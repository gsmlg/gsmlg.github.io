import {
  delay,
  call,
  put,
  select,
  takeLatest,
  cancel,
} from 'redux-saga/effects';
import { actions } from './slice';
import { selectVultrNetworks } from './selectors';

export function* doCheck() {
  const { hosts } = yield select(selectVultrNetworks);
  while (true) {
    for (let h of hosts) {
      const { host, id } = h;
      try {
        const req = new Request(`//${host}`, { method: 'HEAD' });
        const start = Date.now();
        yield call(fetch, req);
        const time = Date.now() - start;
        yield put(actions.updateHost({ id, time }));
      } catch (e) {
        yield put(actions.updateHost({ id, time: NaN }));
      }
      yield delay(1000);
    }
  }
}

export function* cancelCheck(task) {
  yield cancel(task);
}

export function* vultrNetworksSaga() {
  const checkingTask = yield takeLatest(actions.startCheck.type, doCheck);
  yield takeLatest(actions.stopCheck.type, cancelCheck, checkingTask);
}
