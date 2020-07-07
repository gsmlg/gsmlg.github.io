/**
 *
 * Blog
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WebIcon from '@material-ui/icons/Web';

import Layout from 'app/components/Layout';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectBlog } from './selectors';
import { blogSaga } from './saga';

interface Props {}

export const Blog = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: blogSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const blog = useSelector(selectBlog);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const { blogs } = blog;
  const reordered = blogs.slice().sort((a, b) => (a.id > b.id ? -1 : 1));

  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Description of Blog" />
      </Helmet>
      <List>
        {reordered.map(
          (blog): JSX.Element => (
            <ListItem
              key={blog.name}
              component={Link}
              to={`/blogs/${blog.name}`}
            >
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText primary={blog.title} />
              <ListItemText secondary={blog.date} />
            </ListItem>
          ),
        )}
      </List>
    </Layout>
  );
});
