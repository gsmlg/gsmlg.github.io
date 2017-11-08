/*
 *
 * BlogPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import List, { ListItem, ListItemText } from 'material-ui/List';

import Layout from 'components/Layout';

class BlogPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { Blogs } = this.props;

    const blogList = Blogs.toJS().sort((a, b) => {
      if (a.id < b.id) return 1;
      if (a.id > b.id) return -1;
      return 0;
    }).map((blog) => (
      <ListItem key={blog.name} className="col-md-12">
        <h3><Link to={`/blogs/${blog.name}`}>{blog.title}</Link></h3>
        <time>{blog.date}</time>
      </ListItem>
    ));
    return (
      <Layout>
        <Helmet
          title="BlogPage"
          meta={[
            { name: 'description', content: 'Description of BlogPage' },
          ]}
        />
        <List>
          {blogList}
        </List>
      </Layout>
    );
  }
}

BlogPage.propTypes = {
  Blogs: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  Blogs: state.get('Blogs'),
});


export default connect(mapStateToProps)(BlogPage);
