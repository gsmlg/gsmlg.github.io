/**
 * Asynchronously loads the component for NetworksPage
 */
import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'NetworksPage' */'./index'),
  loading: LayoutLoading,
});
