/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './containers/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';

import { Blog } from './containers/Blog/Loadable';
import { BlogContent } from './containers/BlogContent/Loadable';

import { Presentation } from './containers/Presentation/Loadable';

import { Tools } from './containers/Tools/Loadable';
import { VultrNetworks } from './containers/VultrNetworks/Loadable';
import { ElixirNodes } from './containers/ElixirNodes/Loadable';

import { Game } from './containers/Game/Loadable';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './containers/App/slice';
// import { elixirNodesSaga } from './App/saga';

const theme = createMuiTheme({});

export function App() {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Helmet
          titleTemplate="%s - React Boilerplate"
          defaultTitle="React Boilerplate"
        >
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/blogs" component={Blog} />
          <Route exact path="/blogs/:blog_name" component={BlogContent} />

          <Route exact path="/Presentation" component={Presentation} />

          <Route exact path="/tools" component={Tools} />
          <Route exact path="/tools/vultr-networks" component={VultrNetworks} />
          <Route exact path="/tools/nodes" component={ElixirNodes} />

          <Route exact path="/games" component={Game} />

          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  );
}
