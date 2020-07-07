/**
 *
 * Asynchronously loads the component for BlogContent
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BlogContent = lazyLoad(
  () => import('./index'),
  module => module.BlogContent,
);
