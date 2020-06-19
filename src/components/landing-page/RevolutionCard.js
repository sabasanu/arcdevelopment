import {Grid, Card, Typography, useTheme,Button} from '@material-ui/core';
import React from 'react';
import { useServicesBlockStyles } from './ServicesBlock.Styles';
import ButtonArrow from "../ui/ButtonArrow";


function RevolutionCard(props) {
  const classes = useServicesBlockStyles();
  const theme = useTheme();
  return (
    <Card {...props}>
      <Grid container direction="column">
        <Grid item style={{textAlign:'center'}}>
          <Typography variant="h3">The Revolution</Typography>
        </Grid>
        <Grid item style={{textAlign:'center'}}>
          <Typography variant="subtitle1">
            Visionary insites coupled with couting edge is a recipe for revolution.
          </Typography>
					<Button variant="outlined" className={classes.learnButtonBig}>
						Learn more<span>&nbsp;</span>
						<ButtonArrow width="15px" height="15px" fill={theme.palette.common.blue} />
					</Button>
        </Grid>
      </Grid>
    </Card>
  );
}
 export default RevolutionCard;
