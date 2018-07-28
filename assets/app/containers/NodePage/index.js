/**
 *
 * NodePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators, compose } from 'redux';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import ComputerIcon from '@material-ui/icons/Computer';
import CloudIcon from '@material-ui/icons/Cloud';
import CloudOffIcon from '@material-ui/icons/CloudOff';

import Layout from 'components/Layout';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {
  makeSelectNodePage,
  makeSelectNode,
  makeSelectList,
  makeSelectFrom,
} from './selectors';
import reducer from './reducer';
import {
  init,
  mount,
  unmount,
} from './actions';
import saga from './saga';

const styles = (theme) => ({
  root: {
    marginTop: '1em',
  },
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  chip: {
    margin: '0.618em',
  },
});

export class NodePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.init();
  }

  componentDidMount() {
    this.props.mount();
  }

  componentWillUnmount() {
    this.props.unmount();
  }

  content(state) {
    if (!state || !state.get('nodes')) return null;
    return (
      <CardContent>
        {state.get('nodes').map((n) => (
          <Chip key={n} className={this.props.classes.chip} label={n} avatar={<Avatar>{state.get('node_list').includes(n) ? <CloudIcon /> : <CloudOffIcon />}</Avatar>} />
        ))}
      </CardContent>
    );
  }

  render() {
    const {
      classes,
      theme,
      node,
      list,
      from,
    } = this.props;

    return (
      <Layout>
        <Helmet>
          <title>NodePage</title>
          <meta name="description" content="Description of NodePage" />
        </Helmet>
        <Grid container justify="center" className={classes.root}>
          <Grid item md={11} sm={10}>
            <Grid container spacing={24} justify="center">
              <Grid key={node.get('name')} item md={3} sm={4} >
                <Paper>
                  <Card>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="Recipe" className={classes.avatar}>
                          <ComputerIcon />
                        </Avatar>
                      }
                      title={node.get('name')}
                      subheader={node.get('isAlive') ? 'Started' : 'Stopped'}
                    />
                  </Card>
                </Paper>
              </Grid>
            </Grid>
            <Grid container spacing={24} justify="center">
              {list.get('nodes').map((name) => (
                <Grid key={name} item md={3} sm={4} >
                  <Paper>
                    <Card>
                      <CardHeader
                        avatar={
                          <Avatar aria-label="Recipe" className={classes.avatar}>
                            {
                              list.get('node_list').includes(name) ?
                                <CloudIcon /> :
                                <CloudOffIcon />
                            }
                          </Avatar>
                        }
                        title={name}
                      />
                      <Divider />
                      {this.content(from.get(name))}
                    </Card>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    );
  }
}

NodePage.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  nodePage: makeSelectNodePage(),
  node: makeSelectNode(),
  list: makeSelectList(),
  from: makeSelectFrom(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  init,
  mount,
  unmount,
}, dispatch);

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'nodePage', reducer });
const withSaga = injectSaga({ key: 'nodePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles, { withTheme: true }),
)(NodePage);
