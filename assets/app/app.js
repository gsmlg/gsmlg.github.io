/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import '@babel/polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import history from 'utils/history';

// Import root app
import App from 'containers/App';

// Import Language Provider
import LanguageProvider from 'containers/LanguageProvider';

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

// Import store Creator
import configureStore from './configureStore';

// Import i18n messages
import { translationMessages } from './i18n';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
// import initialState from './data/index';
const initialState = {};
export const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app');

const render = (messages) => {
  ReactDOM.render(
    <Provider store={store}>
      <LanguageProvider messages={messages}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </LanguageProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./i18n', 'containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render(translationMessages);
  });
}

// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
  (new Promise((resolve) => {
    resolve(import(/* webpackChunkName: 'intl' */'intl'));
  }))
    .then(() => Promise.all([
      import(/* webpackChunkName: 'intl.en' */'intl/locale-data/jsonp/en.js'),
    ]))
    .then(() => render(translationMessages))
    .catch((err) => {
      throw err;
    });
} else {
  render(translationMessages);
}
OfflinePluginRuntime.install({
  onInstalled() {
    console.log('App is ready for offline usage');
  },
  onUpdating() {
    console.log('App is updating');
  },
  onUpdateReady() {
    console.log('App is Ready for update');
    setTimeout(() => {
      OfflinePluginRuntime.applyUpdate();
    }, 5000);
  },
  onUpdateFailed() {
    console.log('App update failed');
  },
  onUpdated() {
    console.log('App has updated');
  },
});

setInterval(() => {
  OfflinePluginRuntime.update();
}, 1000 * 60 * 4);
