/**
 * Asynchronously loads the component for BlogContentPage
 */
import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'BlogContentPage' */ './index'),
  loading: LayoutLoading,
});
