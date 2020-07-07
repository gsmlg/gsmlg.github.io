/**
 *
 * Asynchronously loads the component for Tools
 *
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import Loading from 'app/components/Layout/loading';

export const Tools = lazyLoad(
  () => import('./index'),
  module => module.Tools,
  { fallback: <Loading /> },
);
