/**
 *
 * Asynchronously loads the component for ToolsPage
 *
 */

import Loadable from 'react-loadable';
import LayoutLoading from 'components/Layout/loading';

export default Loadable({
  loader: () => import(/* webpackChunkName: "ToolsPage" */'./index'),
  loading: LayoutLoading,
});
