/**
 *
 * Game
 *
 */

import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import Layout from 'app/components/Layout';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectGame } from './selectors';
import { gameSaga } from './saga';

interface Props {}

export const Game = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: gameSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const game = useSelector(selectGame);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      <div>{t('')}</div>
    </Layout>
  );
});
