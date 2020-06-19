import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import HeroBlock from './HeroBlock';
import ServicesBlock from './ServicesBlock';
import MobileBlock from './MobileBlock';
import WebsiteBlock from './WebsiteBlock';
import RevolutionCard from './RevolutionCard';
import repeatingBackground from '../../assets/repeatingBackground.svg'

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
  revolutionBackground:{
    backgroundImage: `url('${repeatingBackground}')`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height:"100%",
    width:"100%",
  },
  revolutionCard:{
    position:'absolute',
    boxShadow: theme.shadows[10],
    borderRadius:15,
    padding:'10em'
  }
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
        <Grid item>
          <Grid container alignItems="center" justify="center" style={{height:'100em',marginTop:'10em'}}>
            <RevolutionCard className={classes.revolutionCard}></RevolutionCard>
            <div className={classes.revolutionBackground}></div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default LandingPage;
