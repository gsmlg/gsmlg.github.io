/*
 *
 * KeynotePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Layout from 'components/Layout';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NoteIcon from '@material-ui/icons/Note';

import injectReducer from 'utils/injectReducer';
import reducer from './reducer';

class KeynotePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { keynotes } = this.props;
    const noteList = keynotes.reverse().toJS();
    const list = noteList.map((note) => (
      <ListItem key={note.name} component="a" href={note.link} target="_blank">
        <ListItemIcon><NoteIcon /></ListItemIcon>
        <ListItemText primary={note.name} />
        <ListItemText secondary={note.author} />
      </ListItem>
    ));
    return (
      <Layout>
        <Helmet
          title="KeynotePage"
          meta={[
            { name: 'description', content: 'Description of KeynotePage' },
          ]}
        />
        <List>
          {list}
        </List>
      </Layout>
    );
  }
}

KeynotePage.propTypes = {
  keynotes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  keynotes: state.get('keynotes'),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'keynotes', reducer });

export default compose(
  withReducer,
  withConnect,
)(KeynotePage);
