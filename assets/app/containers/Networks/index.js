/**
 *
 * Networks
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { map, each } from 'lodash';
import injectReducer from 'utils/injectReducer';

import Layout from 'components/Layout';
import { doCheck, checkDone } from './actions';
import makeSelectNetworks from './selectors';
import reducer from './reducer';

export class Networks extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.stop = false;
    this.checkQueue();
  }

  componentWillUnmount() {
    this.stop = true;
  }

  checkQueue() {
    let { vultr } = this.props.Networks;
    var prevPromise = Promise.resolve(true);
    each(vultr, (site) => {
      let thisPromise = prevPromise.then(()=>{
        if (this.stop) throw Error;
        return this.checkSite(site);
      });
      prevPromise = thisPromise;
    });
    prevPromise.then(() => this.checkQueue());
    return prevPromise;
  }

  checkSite(site) {
    let {doCheck, checkDone} = this.props;
    return new Promise((resolve, reject) => {
      doCheck(site);
      let xhr = new XMLHttpRequest();
      let times = new Date(), timef;
      setTimeout(() => { if (xhr.readyState < 4) {xhr.abort();reject()}}, 3000);
      xhr.onreadystatechange = (e) => {
        switch (xhr.readyState) {
          case 4:
            timef = new Date();
            let t = timef - times
            resolve(t);
            break;
        }
      };
      xhr.onerror = reject;
      xhr.open('HEAD', `//${site.host}`);
      xhr.send(null);
    })
      .catch(() => {
        return null;
      })
      .then((time)=> {
        checkDone(site, time);
      });
  }

  render() {
    let {Networks} = this.props;
    let {vultr} = Networks;

    return (
      <Layout>
        <Helmet
          title="Networks"
          meta={[
            { name: 'description', content: 'Description of Networks' },
          ]}
          />
        <div className="list-group">
          {map(vultr, (host) => {
            let colClass = "col-lg-2 col-md-2";
            return (
              <div key={host.id} className="list-group-item">
                <h3 className="list-group-item-heading">
                  <span style={{marginRight: '2em'}}>{host.name}</span>
                  <small>{host.host}</small>
                </h3>
                <section className="list-group-item-text">
                  <div className="ping-site-status row">
                    <div className={colClass}>
                      <span>Delay: </span>
                      <span>{host.delay}</span>
                    </div>
                    <div className={colClass}>
                      <span>Min Delay: </span>
                      <span>{host.minDelay}</span>
                    </div>
                    <div className={colClass}>
                      <span>Max Delay: </span>
                      <span>{host.maxDelay}</span>
                    </div>
                    <div className={colClass}>
                      <span>Average Delay: </span>
                      <span>{host.averageDelay}</span>
                    </div>
                    <div className={colClass}>
                      <span>Package Lost: </span>
                      <span>{host.lost}</span>
                    </div>
                    <div className={colClass}>
                      <span>Times:  </span>
                      <span>{host.times}</span>
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

Networks.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Networks: makeSelectNetworks(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    doCheck: bindActionCreators(doCheck, dispatch),
    checkDone: bindActionCreators(checkDone, dispatch),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'networks', reducer });

export default compose(
  withReducer,
  withConnect,
)(Networks);
