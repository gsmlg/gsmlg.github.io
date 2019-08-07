/*
 *
 * BlogPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WebIcon from '@material-ui/icons/Web';
import Layout from 'components/Layout';
import Immutable from 'immutable';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

class BlogPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { blogs } = this.props;
    let blogList;

    if (blogs) {
      blogList = blogs.toJS().sort((a, b) => {
        if (a.id < b.id) return 1;
        if (a.id > b.id) return -1;
        return 0;
      }).map((blog) => (
        <ListItem key={blog.name} component={Link} to={`/blogs/${blog.name}`}>
          <ListItemIcon><WebIcon /></ListItemIcon>
          <ListItemText primary={blog.title} />
          <ListItemText secondary={blog.date} />
        </ListItem>
      ));
    }
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
};

const mapStateToProps = (state) => ({
  blogs: state.getIn(['blogs', 'blogs']),
});

const withConnect = connect(mapStateToProps);

const withReducer = injectReducer({ key: 'blogs', reducer });

export default compose(
  withReducer,
  withConnect,
)(BlogPage);
