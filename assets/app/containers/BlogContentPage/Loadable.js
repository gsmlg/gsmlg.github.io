/**
 * Asynchronously loads the component for BlogContentPage
 */
import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import(/* webpackChunkName: 'BlogContentPage' */ './index'),
  loading: () => null,
});
