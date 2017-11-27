/**
 *
 * BlogCreate
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Layout from 'components/Layout';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBlogCreate from './selectors';
import reducer from './reducer';
import saga from './saga';

const styles = theme => ({
  root: theme.mixins.gutters({
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing.unit * 3,
  }),
});

export class BlogCreatePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      classes,
      match,
    } = this.props;
    const blog = {};
    const title = '';
    const author = '';
    const content = '';
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
            <FormControl className={classes.formControl} fullWidth>
              <InputLabel htmlFor="title-helper">Title</InputLabel>
              <Input id="title-helper" value={title} onChange={this.handleChange} />
              <FormHelperText error>{}</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="author-helper">Author</InputLabel>
              <Input id="author-helper" value={author} onChange={this.handleChange} />
              <FormHelperText error>{}</FormHelperText>
            </FormControl>
          </header>
          <Divider />
          <FormControl className={classes.formControl} fullWidth>
            <InputLabel htmlFor="content-helper">Content</InputLabel>
            <Input id="content-helper" onChange={this.handleChange} multiline />
            <FormHelperText error>{}</FormHelperText>
          </FormControl>
        </Paper>
      </Layout>
    );
  }
}

BlogCreatePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  blogcreate: makeSelectBlogCreate(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'blogCreate', reducer });
const withSaga = injectSaga({ key: 'blogCreate', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(BlogCreatePage);
