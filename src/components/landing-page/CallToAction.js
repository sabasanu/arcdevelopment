import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Grid, useMediaQuery, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { useServicesBlockStyles } from './ServicesBlock.Styles';
import ButtonArrow from '../ui/ButtonArrow';
import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
		backgroundAttachment:'fixed',
    width: '100%',
    height: '60em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
			backgroundAttachment:'inherit',
    },
  },
  estimateButtonBig: {
    height: 80,
    width: 205,
    fontSize: '1.25rem',
		[theme.breakpoints.down('sm')]: {
    	marginLeft:0,
			marginRight:0
		}
  },
}));

function CallToAction(props) {
  const classes = { ...useStyles(), ...useServicesBlockStyles() };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const gridProps = { direction: matches ? 'column' : 'row', justify: matches ? 'center' : 'space-between' };
  return (
    <Grid container className={classes.background} alignItems="center" {...gridProps}>
      <Grid item style={{ marginLeft:matches ? 0 : '5em', textAlign: matches ? 'center' : 'inherit' }}>
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
      <Grid item>
        <Button variant="container" className={clsx(classes.estimateButton, classes.estimateButtonBig)}>
          Free estimate
        </Button>
      </Grid>
    </Grid>
  );
}

export default CallToAction;
