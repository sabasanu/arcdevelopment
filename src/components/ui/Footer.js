import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
  },
}));
function Footer(props) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <img src={footerAdornment} alt="black decoretive slash" className={classes.adornment} />
    </footer>
  );
}

export default Footer;
