import React, { useEffect, useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { useScrollTrigger } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
  },
  logo: {
    height: '8em',
  },
  logoContainer: {
    padding: 0,
		'&:hover':{
    	backgroundColor:'transparent'
		}
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  tab: {
    minWidth: 10,
    marginLeft: '25px',
    ...theme.typography.tab,
  },
  button: {
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px',
    ...theme.typography.estimate,
  },
}));

const routes = new Map([
  ['/', 0],
  ['/services', 1],
  ['/revolution', 2],
  ['/about', 3],
  ['/contact', 4],
]);

function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value);
  };
  useEffect(() => {
    console.log('effect');
    setValue(routes.get(window.location.pathname));
  }, [value]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={()=>setValue(0)} disableRipple>
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            <Tabs value={value} className={classes.tabContainer} onChange={handleChange}>
              <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
              <Tab className={classes.tab} component={Link} to="/services" label="Services"></Tab>
              <Tab className={classes.tab} component={Link} to="/revolution" label="Revolution"></Tab>
              <Tab className={classes.tab} component={Link} to="/about" label="About us"></Tab>
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact us"></Tab>
            </Tabs>
            <Button className={classes.button} variant="contained" color="secondary">
              Free estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}

export default Header;
