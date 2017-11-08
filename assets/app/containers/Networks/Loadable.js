/**
 * Asynchronously loads the component for NetworksPage
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'NetworksPage' */'./index'),
  loading: () => null,
});
