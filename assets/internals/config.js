const { resolve } = require('path');

const ReactBoilerplate = {
  root: resolve(__dirname, '..'),
  build_to: resolve(__dirname, '..', '..', 'priv', 'static'),

  // This refers to the react-boilerplate version this project is based on.
  version: '3.4.0',

};

module.exports = ReactBoilerplate;
