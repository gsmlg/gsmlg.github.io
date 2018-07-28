/*
 *
 * NodePage actions
 *
 */

import {
  INIT,
  MOUNT,
  UNMOUNT,
  INIT_CHANNEL,
  UNSET_CHANNEL,
  NODE_STATE,
  NODE_INFO,
  LIST_INFO,
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

export function initChannel(channel) {
  return {
    type: INIT_CHANNEL,
    payload: { channel },
  };
}

export function unsetChannel() {
  return {
    type: UNSET_CHANNEL,
    payload: {},
  };
}

export function nodeState(payload) {
  return {
    type: NODE_STATE,
    payload,
  };
}

export function nodeInfo(payload) {
  return {
    type: NODE_INFO,
    payload,
  };
}

export function listInfo(payload) {
  return {
    type: LIST_INFO,
    payload,
  };
}
