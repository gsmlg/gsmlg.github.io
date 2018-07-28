/**
 *
 * Asynchronously loads the component for NodePage
 *
 */

import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: "NodePage" */'./index'),
  loading: LayoutLoading,
});
