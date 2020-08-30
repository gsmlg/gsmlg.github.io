/**
 *
 * ElixirNodes
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import Layout from 'app/components/Layout';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectElixirNodes } from './selectors';
import { elixirNodesSaga } from './saga';

interface Props {}

export function ElixirNodes(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: elixirNodesSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const elixirNodes = useSelector(selectElixirNodes);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <Helmet>
        <title>ElixirNodes</title>
        <meta name="description" content="Description of ElixirNodes" />
      </Helmet>
      <div>Nodes</div>
    </Layout>
  );
}

