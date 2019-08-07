import { createGlobalStyle } from 'styled-components';

/* eslint no-unused-expressions: 0 */
const GlobalStyle = createGlobalStyle`
  html,
  body {
    display: flex;
    flex: 1;
    min-height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    display: flex;
    flex: 1;
    background-color: #fafafa;
    min-height: 100%;
    width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  .blog-content {
    img {
      max-width: 100%;
    }
    .hljs {
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
`;

export default GlobalStyle;
