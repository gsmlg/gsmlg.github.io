/**
 * Asynchronously loads the component for KeynotePage
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'KeynotePage' */'./index'),
  loading: () => null,
});
