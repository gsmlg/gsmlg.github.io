/*
 *
 * Games
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import Layout from 'components/Layout';
import { Link } from 'react-router-dom';
import makeSelectGames from './selectors';

export class Games extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    let { Games } = this.props;
    let noteList = Games.reverse();
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
          <section className="list-group">
            <Link className="list-group-item" to="/games/chinese-chess" >
              <h3 className="list-group-item-heading">{'中国象棋'}</h3>
            </Link>
          </section>
        </div>
      </Layout>
    );
  }

}

Games.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Games: makeSelectGames(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Games);
