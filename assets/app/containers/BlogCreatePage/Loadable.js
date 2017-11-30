/**
 *
 * Asynchronously loads the component for BlogCreatePage
 *
 */

import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: BlogCreatePage */'./index'),
  loading: LayoutLoading,
});
