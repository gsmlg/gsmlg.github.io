/**
 * App Actions
 */

import {
  INIT,
  MOUNT,
  UNMOUNT,
  SET_SOCKET,
  LOG_SOCKET,
} from './constants';

export function init() {
  return {
    type: INIT,
    payload: {},
  };
}

export function mount() {
  return {
    type: MOUNT,
    payload: {},
  };
}

export function unmount() {
  return {
    type: UNMOUNT,
    payload: {},
  };
}

export function setSocket(socket) {
  return {
    type: SET_SOCKET,
    payload: {
      socket,
    },
  };
}

export function socketLogger(kind, msg, data) {
  return {
    type: LOG_SOCKET,
    payload: {
      kind,
      msg,
      data,
    },
  };
}
