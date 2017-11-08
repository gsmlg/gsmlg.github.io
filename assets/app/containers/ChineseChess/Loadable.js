/**
 * Asynchronously loads the component for Games.ChineseChess
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'Games.ChineseChess' */ './index'),
  loading: () => null,
});
