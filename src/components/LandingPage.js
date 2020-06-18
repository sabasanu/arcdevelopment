import React from 'react';
import HeroBlock from './HeroBlock';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid/index';
import ServicesBlock from './ServicesBlock';

const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '3em',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '2em',
    },
  },
}));

function LandingPage(props) {
  const classes = useStyles();
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item>
          <HeroBlock></HeroBlock>
        </Grid>
        <Grid item>
          <ServicesBlock></ServicesBlock>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
