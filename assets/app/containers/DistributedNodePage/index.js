/**
 *
 * DistributedNodePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectDistributedNodePage,
} from './selectors';
import reducer from './reducer';
import {
  init,
  mount,
  unmount,
} from './actions';
import saga from './saga';
import messages from './messages';

export class DistributedNodePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.init();
  }

  componentDidMount() {
    this.props.mount();
  }

  componentWillUnmount() {
    this.props.unmount();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>DistributedNodePage</title>
          <meta name="description" content="Description of DistributedNodePage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

DistributedNodePage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  distributedNodePage: makeSelectDistributedNodePage(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  init,
  mount,
  unmount,
}, dispatch)

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'distributedNodePage', reducer });
const withSaga = injectSaga({ key: 'distributedNodePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DistributedNodePage);
