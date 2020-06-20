import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useServicesBlockStyles } from './ServicesBlock.Styles';
import ButtonArrow from '../ui/ButtonArrow';
import background from '../../assets/background.jpg'
import mobileBackground from '../../assets/mobileBackground.jpg'

const useStyles = makeStyles(theme => ({
	background:{
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		width: '100%',
		height: '100%',
		[theme.breakpoints.down('md')]:{
			backgroundImage: `url(${mobileBackground})`,
		}
	}
}));

function CallToAction(props) {
  const classes = { ...useStyles(), ...useServicesBlockStyles() };
  const theme = useTheme();
  return (
    <Grid container style={{height:'60em'}}>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="h2">
              Simple software.
              <br /> Revolutionary results
            </Typography>
            <Typography variant="subtitle2">Take advantage of the 21st century</Typography>
            <Button variant="outlined" className={classes.learnButton}>
              Learn more<span>&nbsp;</span>
              <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    	<div className={classes.background}></div>
    </Grid>
  );
}

export default CallToAction;
