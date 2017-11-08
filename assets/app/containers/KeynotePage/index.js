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

export class KeynotePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let {Keynotes} = this.props;
    let noteList = Keynotes.reverse().toJS();
    let list = noteList.map((note) => {
      return (
        <section key={note.name} className="list-group">
          <a className="list-group-item" href={note.link} target="_blank">
            <h3 className="list-group-item-heading">{note.name}</h3>
            <author className="list-group-item-text">{note.author}</author>
          </a>
        </section>
      );
    });
    return (
      <Layout>
        <Helmet
          title="KeynotePage"
          meta={[
            { name: 'description', content: 'Description of KeynotePage' },
          ]}
        />
        <div className="container-fluid">
          {list}
        </div>
      </Layout>
    );
  }
}

KeynotePage.propTypes = {
  Keynotes: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  Keynotes: state.get('Keynotes')
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeynotePage);
