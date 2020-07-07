/**
 *
 * Asynchronously loads the component for Game
 *
 */

import React from 'react';
import { lazyLoad } from 'utils/loadable';
import Loading from 'app/components/Layout/loading';

export const Game = lazyLoad(
  () => import('./index'),
  module => module.Game,
  { fallback: <Loading /> },
);
