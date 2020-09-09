const marked = require('marked');
const hljs = require('highlight.js');

const renderer = new marked.Renderer();

renderer.code = (code, language) => {
  try {
    return `<pre class="hljs"><code class="language-${language}">${
      language
        ? hljs.highlight(language, code).value
        : hljs.highlightAuto(code).value
    }</code></pre>`;
  } catch (e) {
    return `<pre class="hljs"><code class="language-auto">${
      hljs.highlightAuto(code).value
    }</code></pre>`;
  }
};

module.exports = {
  // The Webpack config to use when compiling your react app for development or production.
  webpack: function (config, env) {
    // ...add your webpack config
    // console.log('env: ', env);
    const loaders = config.module.rules[2].oneOf;
    loaders.splice(loaders.length - 2, 0, {
      test: /\.md$/,
      use: [
        'html-loader',
        {
          loader: 'markdown-loader',
          options: {
            renderer,
            gfm: true,
          },
        },
      ],
    });
    return config;
  },
  // The Jest config to use when running your jest tests - note that the normal rewires do not
  // work here.
  jest: function (config) {
    // ...add your jest config customisation...
    // Example: enable/disable some tests based on environment variables in the .env file.
    if (!config.testPathIgnorePatterns) {
      config.testPathIgnorePatterns = [];
    }
    if (!process.env.RUN_COMPONENT_TESTS) {
      config.testPathIgnorePatterns.push(
        '<rootDir>/src/components/**/*.test.js',
      );
    }
    if (!process.env.RUN_REDUCER_TESTS) {
      config.testPathIgnorePatterns.push('<rootDir>/src/reducers/**/*.test.js');
    }
    return config;
  },
  // The function to use to create a webpack dev server configuration when running the development
  // server with 'npm run start' or 'yarn start'.
  // Example: set the dev server to use a specific certificate in https.
  devServer: function (configFunction) {
    // Return the replacement function for create-react-app to use to generate the Webpack
    // Development Server config. "configFunction" is the function that would normally have
    // been used to generate the Webpack Development server config - you can use it to create
    // a starting configuration to then modify instead of having to create a config from scratch.
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);

      // Change the https certificate options to match your certificate, using the .env file to
      // set the file paths & passphrase.

      // Return your customised Webpack Development Server config.
      return config;
    };
  },
  // The paths config to use when compiling your react app for development or production.
  paths: function (paths, env) {
    // ...add your paths config
    return paths;
  },
};
