import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import {Button, Grid, useMediaQuery} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import infoBackground from '../../assets/infoBackground.svg';
import ButtonArrow from '../ui/ButtonArrow';
import { useServicesBlockStyles } from './ServicesBlock.Styles';

const useStyles = makeStyles(theme => ({
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
  },
}));

function InformationBlock(props) {
  const classes = { ...useServicesBlockStyles(), ...useStyles() };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="row" style={{ height: '80em' }} alignItems="center">
      <Grid item container style={{position:'absolute'}} direction={matches ? 'column' : 'row' }>
        <Grid item sm style={{ marginLeft: '5em' }}>
          <Grid container direction="column" >
            <Typography variant="h2" style={{ color: 'white' }}>
              About Us
            </Typography>
            <Typography variant="subtitle2">Let's get personal</Typography>
            <Button variant="outlined" className={classes.learnButton} style={{ color: 'white', borderColor: 'white' }}>
              Learn more<span>&nbsp;</span>
              <ButtonArrow width={15} height={15} fill="white" />
            </Button>
          </Grid>
        </Grid>
        <Grid item sm style={{ marginRight: '5em', textAlign: 'right' }}>
          <Grid container direction="column" alignItems="flex-end">
            <Typography variant="h2" style={{ color: 'white' }}>
              Contact Us
            </Typography>
            <Typography variant="subtitle2">Say hello!</Typography>
            <Button variant="outlined" className={classes.learnButton} style={{ color: 'white', borderColor: 'white' }}>
              Learn more<span>&nbsp;</span>
              <ButtonArrow width={15} height={15} fill="white" />
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.infoBackground}></div>
    </Grid>
  );
}

export default InformationBlock;
