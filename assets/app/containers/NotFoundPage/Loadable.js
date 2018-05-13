/**
 * Asynchronously loads the component for NotFoundPage
 */
import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'NotFoundPage' */'./index'),
  loading: LayoutLoading,
});
