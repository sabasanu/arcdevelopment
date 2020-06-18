import React from 'react';
import HeroBlock from '../HeroBlock';
import { makeStyles } from '@material-ui/styles/index';
import Grid from '@material-ui/core/Grid/index';
import ServicesBlock from './ServicesBlock';
import MobileBlock from './MobileBlock';
import WebsiteBlock from "./WebsiteBlock";

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
        <Grid item>
          <MobileBlock></MobileBlock>
        </Grid>
        <Grid item>
          <WebsiteBlock></WebsiteBlock>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
