import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = (theme) => ({

});

function NetworkCard(props) {
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
          <Typography component="div">
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

export default compose(withStyles(styles), )(NetworkCard);
