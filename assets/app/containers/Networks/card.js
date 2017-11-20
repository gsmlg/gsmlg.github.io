import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from 'material-ui/styles';

import Paper from 'material-ui/Paper';
import Card, { CardHeader, CardContent } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = (theme) => ({

});

/*
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

 */

function NetworkCard (props) {
  const {
    classes,
    host,
  } = props;
  return (
    <Paper>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {host.name[0]}
            </Avatar>
          }
          title={host.name}
          subheader={host.host}
        />
        <Divider />
        <CardContent>
          <Typography component="p">
            <span>Delay: </span>
            <span>{host.delay}</span>
            <Divider />
            <span>Min Delay: </span>
            <span>{host.minDelay}</span>
            <Divider />
            <span>Max Delay: </span>
            <span>{host.maxDelay}</span>
            <Divider />
            <span>Average Delay: </span>
            <span>{host.averageDelay}</span>
            <Divider />
            <span>Package Lost: </span>
            <span>{host.lost}</span>
            <Divider />
            <span>Times:  </span>
            <span>{host.times}</span>
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}

export default compose(
  withStyles(styles),
)(NetworkCard);
