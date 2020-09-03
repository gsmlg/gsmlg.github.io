/**
 *
 * Asynchronously loads the component for Xiangqi
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Xiangqi = lazyLoad(
  () => import('./index'),
  module => module.Xiangqi,
);
