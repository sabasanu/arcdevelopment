import {Grid, Card, Typography, useTheme,Button} from '@material-ui/core';
import React from 'react';
import { useServicesBlockStyles } from './ServicesBlock.Styles';
import ButtonArrow from "../ui/ButtonArrow";
import {makeStyles} from "@material-ui/styles";
const useStyles = makeStyles((theme)=>({
	revolutionCard:{
		position:'absolute',
		boxShadow: theme.shadows[10],
		borderRadius:15,
		padding:'10em',
		[theme.breakpoints.down('sm')]: {
			padding: '8em 0 8em 0',
			margin: '1em'
		}
	}

}));

function RevolutionCard(props) {
  const classes = {...useServicesBlockStyles(), ...useStyles() } ;
  const theme = useTheme();
  return (
    <Card className={classes.revolutionCard}>
      <Grid container direction="column">
        <Grid item style={{textAlign:'center'}}>
          <Typography variant="h3" gutterBottom>The Revolution</Typography>
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
