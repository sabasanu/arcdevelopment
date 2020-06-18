import React from 'react';

import ButtonArrow from '../ui/ButtonArrow';
import customSoftwareIcon from '../../assets/Custom Software Icon.svg';
import {useMediaQuery, useTheme} from '@material-ui/core/index';
import {Grid,Typography,Button} from "@material-ui/core/index";
import {useServicesBlockStyles} from "./ServicesBlock.Styles";

function ServicesBlock(props) {
  const classes = useServicesBlockStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid container direction="row" className={classes.serviceContainer} justify={matchesSm ? 'center' : undefined}>
      <Grid item style={{ marginLeft: matchesSm ? 0 : '5em',textAlign: matchesSm ? 'center' : undefined }}>
        <Typography variant="h4">Custom Software Development</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          Save Energy. Save Time. Save Money.
        </Typography>

        <Typography variant="subtitle1">
          Complete digital solutions, from investigation to
          <span className={classes.specialText}>&nbsp;celebration</span>
        </Typography>
        <Button variant="outlined" className={classes.learnButton}>
          Learn more<span>&nbsp;</span>
          <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
        </Button>
      </Grid>
      <Grid item>
        <img className={classes.icon} src={customSoftwareIcon} alt="custom software icon" />
      </Grid>
    </Grid>
  );
}

export default ServicesBlock;
