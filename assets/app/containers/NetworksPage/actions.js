/*
 *
 * Networks actions
 *
 */

import {
  DEFAULT_ACTION,
  DO_CHECK,
  CHECK_DONE,
} from './constants';

export function defaultAction(host) {
  return {
    type: DEFAULT_ACTION,
    host: host,
  };
}

export function doCheck(site) {
  return {
    type: DO_CHECK,
    site: site,
  };
}

export function checkDone(site, time) {
  return {
    type: CHECK_DONE,
    site: site,
    time: time,
  };
}
