// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const fs = require('fs-extra');
const paths = require('../config/paths');
const configFactory = require('../config/webpack.config');
const webpack = require('webpack');
const config = configFactory('development');

config.output.path = paths.appBuild;

const { plugins, entry } = config;
config.entry = entry.filter(fileName => !fileName.match(/webpackHotDevClient/));
config.plugins = plugins.filter(
  plugin => !(plugin instanceof webpack.HotModuleReplacementPlugin),
);

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    copyPublicFolder();
  }
  console.error(
    stats.toString({
      chunks: false,
      colors: true,
    }),
  );
});

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}
