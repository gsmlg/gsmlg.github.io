/*
 *
 * DistributedNodePage actions
 *
 */

import {
  INIT,
  MOUNT,
  UNMOUNT,
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