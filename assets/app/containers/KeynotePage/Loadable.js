/**
 * Asynchronously loads the component for KeynotePage
 */
import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'KeynotePage' */'./index'),
  loading: LayoutLoading,
});
