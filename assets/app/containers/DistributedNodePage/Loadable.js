/**
 *
 * Asynchronously loads the component for DistributedNodePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: "DistributedNodePage" */'./index'),
  loading: () => null,
});
