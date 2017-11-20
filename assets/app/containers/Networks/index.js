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
import Grid from 'material-ui/Grid';
import Card from './card';

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
    const {
      doCheck,
      checkDone,
    } = this.props;
    return new Promise((resolve, reject) => {
      doCheck(site);
      const xhr = new XMLHttpRequest();
      const times = new Date();
      setTimeout(() => { if (xhr.readyState < 4) {xhr.abort();reject()}}, 3000);
      xhr.onreadystatechange = (e) => {
        const timef = new Date();
        const t = timef - times;
        switch (xhr.readyState) {
          case 4:
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
    const { Networks } = this.props;
    const { vultr } = Networks;

    return (
      <Layout>
        <Helmet
          title="Networks"
          meta={[
            { name: 'description', content: 'Description of Networks' },
          ]}
          />
        <Grid container justify="center" spacing={24}>
          <Grid item md={11} sm={10}>
            <Grid container spacing={24} justify="center">
              {map(vultr, (host) => (
                <Grid item md={3} sm={4} >
                  <Card host={host} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
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
