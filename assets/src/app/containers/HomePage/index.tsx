import React from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'app/components/Layout';

export function HomePage() {
  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <span>HomePage container</span>
    </Layout>
  );
}
