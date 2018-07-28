/**
 * Asynchronously loads the component for Games.ChineseChess
 */
import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'Games.ChineseChess' */ './index'),
  loading: LayoutLoading,
});
