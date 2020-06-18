import React, { useEffect, useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { useMediaQuery, useScrollTrigger, useTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { appRoutes, menuOptions,mainRoutes } from './Routes';

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
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.5em',
    },
  },
  logo: {
    height: '8em',
    [theme.breakpoints.down('md')]: {
      height: '7em',
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em',
    },
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
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  drawerIcon: {
    height: '50px',
    width: '50px',
  },
  drawer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7,
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1,
    },
  },
  appBar:{

  }
}));
const routeMap = new Map();

appRoutes.map(v => routeMap.set(v.link, v));

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpenMenu(true);
    console.log(e);
  };
  const handleClose = e => {
    setAnchorEl(null);
    setOpenMenu(false);
  };
  const handleMenuItemClick = (e, i) => {
    setOpenMenu(false);
    setSelectedIndex(i);
    setValue(1);
    handleClose(e);
  };

  const handleListItemClick = i => {
    setValue(i);
    setOpenDrawer(false);
  };

  useEffect(() => {
    let route = routeMap.get(window.location.pathname);
    setValue(route.activeIndex);
    setSelectedIndex(route.selectedIndex);
  }, [value]);

  const tabs = () => (
    <>
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
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
      >
        {menuOptions.map((m, i) => (
          <MenuItem
            key={m.link}
            classes={{ root: classes.menuItem }}
            onClick={event => handleMenuItemClick(event, m.selectedIndex)}
            component={Link}
            to={m.link}
            selected={selectedIndex === m.selectedIndex && value === m.activeIndex}
          >
            {m.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawers = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={!iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin}></div>
        <List disablePadding>
          {mainRoutes.map(r => (
            <ListItem
              key={r.name + r.link}
              classes={{ selected: classes.drawerItemSelected }}
              divider
              component={Link}
              to={r.link}
              onClick={() => handleListItemClick(r.activeIndex)}
              selected={value == r.activeIndex}
            >
              <ListItemText disableTypography className={classes.drawerItem}>
                {r.name}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon}></MenuIcon>
      </IconButton>
    </>
  );

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            {matches ? drawers : tabs()}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin}></div>
    </>
  );
}

export default Header;
