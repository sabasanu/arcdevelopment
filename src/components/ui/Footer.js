import React from 'react';
import footerAdornment from '../../assets/Footer Adornment.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '15em',
    },
  },
  mainContainer: {
    position: 'absolute',
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: '0.75rem',
  },
  gridItem: {
    margin: '3em',
  },
  icon:{
    height:'4em',
    width:'4em',
    [theme.breakpoints.down('xs')]:{
      height:'2.5em',
      width:'2.5em',
    }
  },
  socialContainer:{
    position:'absolute',
    marginTop:'-6em',
    right:'1.5em',
    [theme.breakpoints.down('xs')]:{
      right:'0.6em'
    }
  }
}));
function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid container className={classes.mainContainer} justify="center">
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Services
              </Grid>
              <Grid item className={classes.link}>
                Custom Software Development
              </Grid>
              <Grid item className={classes.link}>
                Mobile App Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                The Revolution
              </Grid>
              <Grid item className={classes.link}>
                Technology
              </Grid>
              <Grid item className={classes.link}>
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                About Us
              </Grid>
              <Grid item className={classes.link}>
                History
              </Grid>
              <Grid item className={classes.link}>
                Services
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid item className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img src={footerAdornment} alt="black decoretive slash" className={classes.adornment} />
      <Grid container className={classes.socialContainer} justify="flex-end" spacing={2}>
        <Grid item component="a" href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">
          <img src={facebook} alt="" className={classes.icon} />
        </Grid>
        <Grid item component="a" href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img src={twitter} alt="" className={classes.icon}  />
        </Grid>
        <Grid item component="a" href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img src={instagram} alt="" className={classes.icon}  />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
