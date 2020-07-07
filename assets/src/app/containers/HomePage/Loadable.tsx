/**
 * Asynchronously loads the component for HomePage
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import Loading from 'app/components/Layout/loading';

export const HomePage = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
  { fallback: <Loading /> },
);
