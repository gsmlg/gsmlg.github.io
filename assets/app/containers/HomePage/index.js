/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Layout from 'components/Layout';

const useStyles = makeStyles((theme) => ({
  root: theme.mixins.gutters({
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing(3),
  }),
  text: {
    fontSize: '3rem',
    transition: '1000ms all',
  },
}));

const HomePage = (props) => { // eslint-disable-line react/prefer-stateless-function
  const classes = useStyles();
  const [colors, setColors] = React.useState(['#000','#000','#000','#000']);
  React.useEffect(() => {
    const randomRGB= () => {
      const r = (Math.random() * 10e16 % 0xff).toString(16);
      const g = (Math.random() * 10e16 % 0xff).toString(16);
      const b = (Math.random() * 10e16 % 0xff).toString(16);
      return `#${r}${g}${b}`;
    };
    const t = setInterval(() => {
      setColors([randomRGB(), randomRGB(), randomRGB(), randomRGB()]);
    }, 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      <Helmet
        title="HomePage"
        meta={[
          { name: 'description', content: 'Description of HomePage' },
        ]}
      />
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3" className={classes.text} style={{color: colors[0]}}>
            吾日三省吾身
        </Typography>
        <Typography type="headline" component="h3" className={classes.text} style={{color: colors[1]}}>
            为人谋而不忠乎
        </Typography>
        <Typography type="headline" component="h3" className={classes.text} style={{color: colors[2]}}>
            与朋友交而不信乎
        </Typography>
        <Typography type="headline" component="h3" className={classes.text} style={{color: colors[3]}}>
            传不习乎
        </Typography>
      </Paper>
    </Layout>
  );
};

export default HomePage;
