/**
 *
 * Asynchronously loads the component for NodePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "NodePage" */'./index'),
  loading: () => null,
});
