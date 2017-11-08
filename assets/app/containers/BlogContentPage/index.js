/*
 *
 * BlogContentPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import { extend, find } from 'lodash';

import Layout from 'components/Layout';

import 'highlight.js/styles/monokai-sublime.css';

class BlogContentPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(...args) {
    super(...args);
    this.state = Object.assign({}, this.state, {
      blogContent: '',
    });
  }

  componentDidMount() {
    const name = this.props.match.params.blog_name;
    import(/* webpackChunkName: 'BlogContentPage.[request]' */ `data/blogs/${name}.md`).then((html) => {
      this.setState({ blogContent: html });
    }).catch((error) => {
      this.setState({blogContent: '<h1 style="color: red">Load content fail!<h1>'});
    });
  }

  render() {
    if (DEBUG) {
      console.log(this.props);
    }
    let { Blogs, match } = this.props;
    let blog = Blogs.find((val, key) => (val.get('name') === match.params.blog_name)).toJS();
    let html = this.state.blogContent;
    return (
      <Layout>
        <Helmet
          title={blog.name}
          meta={[
            { name: 'description', content: blog.description },
          ]}
          />
        <section className="blog">
          <header className="blog-header">
            <h1 className="blog-title">{blog.title}</h1>
            <div className="blog-author">Author: <author>{blog.author}</author></div>
            <div className="blog-create-time">Created At: <time>{blog.date}</time></div>
          </header><hr/>
          <section className="blog-content" dangerouslySetInnerHTML={{__html: html}}>
          </section>
        </section>
      </Layout>
    );
  }
}

BlogContentPage.propTypes = {
  Blogs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  Blogs: state.get('Blogs')
});

export default connect(mapStateToProps)(BlogContentPage);
