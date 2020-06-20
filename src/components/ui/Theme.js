import { createMuiTheme } from "@material-ui/core/styles";

let arcBlue = "#0b72b9";
let arcOrange = "#ffba60";
let arcGray = ""
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
		},
		h2:{
  		fontFamily:'Raleway',
			fontWeight:700,
			fontSize:'2.5rem',
			color:arcBlue,
			lineHeight:1.5
		},
		h3:{
  		fontFamily:'Pacifico',
			fontSize:'2.5rem',
			color:arcBlue
		},
		h4:{
			fontFamily:'Raleway',
			fontWeight:700,
			fontSize:'1.75rem',
			color:arcBlue,
		},
		subtitle1:{
  		fontSize:'1.25rem',
			fontWeight:400,
			color:"#5e6875"
		},
		subtitle2:{
			color:"white",
			fontSize:'1.23rem',
			fontWeight:300
		},
		learnButton:{
			color: arcBlue,
			borderColor: arcBlue,
			borderWidth: 2,
			textTransform: 'none',
			borderRadius: 50,
			fontFamily: 'Roboto',
			fontWeight: 'bold',
		}
	}
});
