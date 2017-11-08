/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
          <Layout>
              <Helmet
                  title="HomePage"
                  meta={[
                    { name: 'description', content: 'Description of HomePage' },
                  ]}
                  />
              <div className="well">
                  <h1>这里是我的主页！</h1>
              </div>
          </Layout>
        );
    }
}
