/**
 *
 * Asynchronously loads the component for Presentation
 *
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import Loading from 'app/components/Layout/loading';

export const Presentation = lazyLoad(
  () => import('./index'),
  module => module.Presentation,
  { fallback: <Loading /> },
);
