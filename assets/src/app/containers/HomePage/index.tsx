import React from 'react';
import { Helmet } from 'react-helmet-async';
import { makeStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Layout from 'app/components/Layout';

const useStyles = makeStyles((theme: any) => ({
  root: theme.mixins.gutters({
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
    margin: theme.spacing(3),
  }),
  text: {
    fontSize: '3rem',
    transition: '3000ms all',
  },
}));

export function HomePage() {
  const classes = useStyles();
  const [colors, setColors] = React.useState(['#000', '#000', '#000', '#000']);
  React.useEffect(() => {
    const randomRGB = () => {
      const r = ((Math.random() * 10e16) % 0xff).toString(16);
      const g = ((Math.random() * 10e16) % 0xff).toString(16);
      const b = ((Math.random() * 10e16) % 0xff).toString(16);
      return `#${r}${g}${b}`;
    };
    setColors([randomRGB(), randomRGB(), randomRGB(), randomRGB()]);
    const t = setInterval(() => {
      setColors([randomRGB(), randomRGB(), randomRGB(), randomRGB()]);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Paper className={classes.root} elevation={4}>
        <Typography
          component="h3"
          className={classes.text}
          style={{ color: colors[0] }}
        >
          吾日三省吾身
        </Typography>
        <Typography
          component="h3"
          className={classes.text}
          style={{ color: colors[1] }}
        >
          为人谋而不忠乎
        </Typography>
        <Typography
          component="h3"
          className={classes.text}
          style={{ color: colors[2] }}
        >
          与朋友交而不信乎
        </Typography>
        <Typography
          component="h3"
          className={classes.text}
          style={{ color: colors[3] }}
        >
          传不习乎
        </Typography>
      </Paper>
    </Layout>
  );
}
