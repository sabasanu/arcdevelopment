import {makeStyles} from "@material-ui/styles";

export const useServicesBlockStyles = makeStyles(theme => ({
	specialText: {
		fontFamily: 'Pacifico',
		color: theme.palette.common.orange,
	},
	learnButton: {
		...theme.typography.learnButton,
		fontSize: '0.7rem',
		height: 35,
		padding: 5,
		textAlign:'left',
		width:'fit-content',
		[theme.breakpoints.down('sm')]:{
			marginBottom:'2em'
		}
	},
	subtitle: {
		marginBottom: '1em',
	},
	icon: {
		marginLeft: '2em',
		[theme.breakpoints.down('xs')]: {
			marginLeft: 0,
		},
	},
	serviceContainer: {
		marginTop: '8em',
		[theme.breakpoints.down('xs')]: {
			padding:25
		},
	},
	learnButtonBig: {
		...theme.typography.learnButton,
		fontSize: '0.9rem',
		height: 45,
		width: 145,
	},
	estimateButton: {
		...theme.typography.estimate,
		backgroundColor: theme.palette.common.orange,
		borderRadius: 50,
		width: 145,
		height: 45,
		marginRight: 40,
		'&:hover': {
			backgroundColor: theme.palette.secondary.light,
		},
	},
}));
