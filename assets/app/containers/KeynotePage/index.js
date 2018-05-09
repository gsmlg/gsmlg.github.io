/*
 *
 * KeynotePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import Layout from 'components/Layout';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import NoteIcon from 'material-ui-icons/Note';

export class KeynotePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { Keynotes } = this.props;
    const noteList = Keynotes.reverse().toJS();
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
  Keynotes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  Keynotes: state.get('Keynotes'),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeynotePage);
