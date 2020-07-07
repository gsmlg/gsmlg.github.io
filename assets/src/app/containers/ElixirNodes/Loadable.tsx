/**
 *
 * Asynchronously loads the component for ElixirNodes
 *
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import Loading from 'app/components/Layout/loading';

export const ElixirNodes = lazyLoad(
  () => import('./index'),
  module => module.ElixirNodes,
  { fallback: <Loading /> },
);
