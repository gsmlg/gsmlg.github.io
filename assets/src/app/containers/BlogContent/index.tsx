/**
 *
 * BlogContent
 *
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Layout from 'app/components/Layout';

import { useInjectReducer } from 'utils/redux-injectors';

import { selectBlog } from 'app/containers/Blog/selectors';
import { reducer, sliceKey } from 'app/containers/Blog/slice';
import 'highlight.js/styles/monokai-sublime.css';

import { Content } from './Content';

interface Props {
  match: {
    params;
  };
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    flex: 1,
    padding: 16,
    margin: theme.spacing(3),
  },
}));

export function BlogContent(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  const classes = useStyles();
  const { blogs } = useSelector(selectBlog);

  const lastPost = blogs[blogs.length - 1];

  const blog =
    blogs.find(b => b.name === props.match.params.blog_name) || lastPost;

  const [content, setContent] = useState('');

  useEffect(() => {
    import(`data/blogs/${blog.name}.md`).then(({ default: ctnt }) => {
      setContent(ctnt);
    });
  }, [blog.name]);

  return (
    <Layout>
      <Helmet>
        <title>{blog.title}</title>
        <meta name="description" content={blog.title} />
      </Helmet>
      <Paper className={classes.root} elevation={4}>
        <header>
          <Typography component="h1">{blog.title}</Typography>
          <Typography component="div">
            Author:
            {blog.author}
          </Typography>
          <Typography component="div">
            Created At:
            {blog.date}
          </Typography>
        </header>
        <Divider />
        <Typography className="blog-content" component="section">
          <Content content={content} />
        </Typography>
      </Paper>
    </Layout>
  );
}
