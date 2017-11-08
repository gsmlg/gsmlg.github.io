/**
 * Asynchronously loads the component for GamesPage
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'GamesPage' */'./index'),
  loading: () => null,
});
