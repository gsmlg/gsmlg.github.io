/**
 * Asynchronously loads the component for GamesPage
 */
import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'GamesPage' */'./index'),
  loading: LayoutLoading,
});