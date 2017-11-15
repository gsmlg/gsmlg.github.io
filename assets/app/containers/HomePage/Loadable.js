/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'HomePage' */ './index'),
  loading: () => LayoutLoading,
});
