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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    '&:hover': {
      backgroundColor: 'transparent',
    },
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
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    '&:hover': {
      opacity: 1,
    },
    opacity: 0.7,
  },
}));

const routes = new Map([
  ['/', 0],
  ['/services', 1],
  ['/customservices', 1],
  ['/mobilesites', 1],
  ['/websites', 1],
  ['/revolution', 2],
  ['/about', 3],
  ['/contact', 4],
]);

function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setValue(value);
  };
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
    console.log(e);
  };
  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleMenuItemClick = (e, i) => {
    setOpen(false);
    setSelectedIndex(i);
    setValue(1);
    handleClose(e);
  };

  useEffect(() => {
    console.log('effect');
    setValue(routes.get(window.location.pathname));
  }, [value]);

  const menuOptions = [
    { name: 'Services', link: '/services' },
    { name: 'Custom Software Developmennt', link: '/customservices' },
    { name: 'Mobile App Development', link: '/mobilesites' },
    { name: 'Website Development', link: '/websites' },
  ];

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            <Tabs value={value} className={classes.tabContainer} onChange={handleChange}>
              <Tab className={classes.tab} component={Link} to="/" label="Home"></Tab>
              <Tab
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={!!anchorEl}
                onMouseOver={event => handleClick(event)}
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
              ></Tab>
              <Tab className={classes.tab} component={Link} to="/revolution" label="Revolution"></Tab>
              <Tab className={classes.tab} component={Link} to="/about" label="About us"></Tab>
              <Tab className={classes.tab} component={Link} to="/contact" label="Contact us"></Tab>
            </Tabs>
            <Button className={classes.button} variant="contained" color="secondary">
              Free estimate
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              {menuOptions.map((m, i) => (
                <MenuItem
                  key={m.name + m.link}
                  classes={{ root: classes.menuItem }}
                  onClick={event => handleMenuItemClick(event, i)}
                  component={Link}
                  to={m.link}
                  selected={selectedIndex === i && value === 1}
                >
                  {m.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}

export default Header;
