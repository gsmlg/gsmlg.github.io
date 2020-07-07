/**
 *
 * Asynchronously loads the component for Blog
 *
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import Loading from 'app/components/Layout/loading';

export const Blog = lazyLoad(
  () => import('./index'),
  module => module.Blog,
  { fallback: <Loading /> },
);
