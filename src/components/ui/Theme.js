import { createMuiTheme } from "@material-ui/core/styles";

let arcBlue = "#0b72b9";
let arcOrange = "#ffba60";
export default createMuiTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange
    },
    primary: {
      main: arcBlue
    },
    secondary: {
      main: arcOrange
    }
  },
  status: {
    danger: "orange"
  },
	typography:{
  	tab:{
			fontFamily:'Raleway',
			textTransform: 'none',
			fontWeight:'700',
			fontSize:'1rem',
		},
		estimate:{
			fontFamily:'Pacifico',
			fontSize: '1rem',
			textTransform:'none',
			color:'white',
		}
	}
});
