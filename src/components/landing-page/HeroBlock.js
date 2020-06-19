import React from 'react';
import ButtonArrow from '../ui/ButtonArrow';
import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/core';
import { Grid, Button, Typography } from '@material-ui/core';
import touchTheFuture from '../../assets/touchthefuture.jpg';
import { useServicesBlockStyles } from './ServicesBlock.Styles';

const useStyles = makeStyles(theme => ({
  animation: {
    maxWidth: '30em',
    minWidth: '25em',
    margin: '2em',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '20em',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    width: 145,
    height: 45,
    marginRight: 40,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: '1em',
  },
  heroTextContainer: {
    minWidth: '21.5em',
    marginLeft: '1em',
    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
    },
  },
}));

function HeroBlock(props) {
  const classes = { ...useStyles(), ...useServicesBlockStyles() };
  const theme = useTheme();
  return (
    <Grid container direction="row" justify="flex-end" alignItems="center">
      <Grid item sm className={classes.heroTextContainer}>
        <Typography align="center" variant="h2">
          Briging West Coast Technology
          <br />
          to the Midwest
        </Typography>
        <Grid container justify="center" className={classes.buttonContainer}>
          <Grid item>
            <Button variant="contained" className={classes.estimateButton}>
              Free Estimate
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" className={classes.learnButtonBig}>
              Learn more<span>&nbsp;</span>
              <ButtonArrow width="15px" height="15px" fill={theme.palette.common.blue} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm className={classes.animation}>
        <img src={touchTheFuture} alt="" style={{ width: '100%' }} />
      </Grid>
    </Grid>
  );
}

export default HeroBlock;
