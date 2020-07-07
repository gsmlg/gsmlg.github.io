/**
 *
 * Asynchronously loads the component for VultrNetworks
 *
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import Loading from 'app/components/Layout/loading';

export const VultrNetworks = lazyLoad(
  () => import('./index'),
  module => module.VultrNetworks,
  { fallback: <Loading /> },
);
