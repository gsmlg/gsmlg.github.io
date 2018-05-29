/*
 *
 * BlogContentPage
 *
 */

import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Layout from 'components/Layout';

import 'highlight.js/styles/monokai-sublime.css';
import injectReducer from 'utils/injectReducer';
import reducer from '../BlogPage/reducer';

const styles = (theme) => ({
  root: theme.mixins.gutters({
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});

class BlogContentPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(...args) {
    super(...args);
    this.state = Object.assign({}, this.state, {
      blogContent: '',
    });
  }

  componentDidMount() {
    const name = this.props.match.params.blog_name;
    import(/* webpackChunkName: 'BlogContentPage.[request]' */ `data/blogs/${name}.md`).then(({ default: html }) => {
      this.setState({ blogContent: html });
    }).catch((error) => {
      this.setState({ blogContent: '<h1 style="color: red">Load content fail!<h1>' });
    });
  }

  render() {
    const {
      Blogs,
      classes,
      match,
    } = this.props;
    const blog = Blogs.find((val, key) => (val.get('name') === match.params.blog_name)).toJS();
    const html = this.state.blogContent;
    return (
      <Layout>
        <Helmet
          title={blog.name}
          meta={[
            { name: 'description', content: blog.description },
          ]}
        />
        <Paper className={classes.root} elevation={4}>
          <header>
            <Typography type="headline" component="h1">{blog.title}</Typography>
            <Typography type="subheading" component="div">Author: {blog.author}</Typography>
            <Typography type="subheading" component="div">Created At: {blog.date}</Typography>
          </header>
          <Divider />
          <Typography className="blog-content" component="section" dangerouslySetInnerHTML={{ __html: html }} />
        </Paper>
      </Layout>
    );
  }
}

BlogContentPage.propTypes = {
  Blogs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  Blogs: state.get('Blogs'),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'Blogs', reducer });

export default compose(
  withReducer,
  withConnect,
  withStyles(styles),
)(BlogContentPage);
