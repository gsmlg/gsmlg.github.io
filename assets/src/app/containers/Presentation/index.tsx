/**
 *
 * Presentation
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NoteIcon from '@material-ui/icons/Note';

import Layout from 'app/components/Layout';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectPresentation } from './selectors';
import { presentationSaga } from './saga';

interface Props {}

export const Presentation = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: presentationSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const presentation = useSelector(selectPresentation);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const noteList = [
    {
      id: 1,
      name: 'BIG WEB APP? COMPILE IT!',
      author: 'ALON ZAKAI / MOZILLA',
      link: 'https://kripken.github.io/mloc_emscripten_talk',
    },
    {
      id: 2,
      name: 'Debug in Webpack',
      author: 'gsmlg',
      link: 'https://gsmlg.github.io/Reveal/debug-module/',
    },
    {
      id: 3,
      name: 'Promise A Plus',
      author: 'gsmlg',
      link: 'https://gsmlg.github.io/Reveal/promise-a-plus/dist/',
    },
    {
      id: 4,
      name: 'Dynamic Import',
      author: 'gsmlg',
      link: 'https://gsmlg.github.io/Reveal/dynamic-import/dist/',
    },
  ].reverse();

  return (
    <Layout>
      <Helmet>
        <title>Presentation</title>
        <meta name="description" content="Description of Presentation" />
      </Helmet>
      <List>
        {noteList.map(note => (
          <ListItem
            key={note.name}
            component="a"
            href={note.link}
            target="_blank"
          >
            <ListItemIcon>
              <NoteIcon />
            </ListItemIcon>
            <ListItemText primary={note.name} />
            <ListItemText secondary={note.author} />
          </ListItem>
        ))}
      </List>
    </Layout>
  );
});
