import sizes from './mediaQueries';
// eslint-disable-next-line
export default {
	goBack: {
		backgroundColor: 'black',
		width: '20%',
		height: props => (props.showFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4.3px',
		textTransform: 'uppercase',
		'& a': {
			color: 'white',
			display: 'inline-block',
			width: '100px',
			height: '30px',
			position: 'absolute',
			top: '50%',
			left: '50%',
			marginLeft: '-50px',
			marginTop: '-15px',
			textAlign: 'center',
			outline: 'none',
			background: 'rgba(255, 255, 255, 0.3)',
			fontSize: '1rem',
			lineHeight: '30px',
			textTransform: 'uppercase',
			border: 'none',
			cursor: 'pointer',
			textDecoration: 'none'
		},
		[sizes.down('lg')]: {
			width: '25%',
			height: '33.3333% !important'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '20% !important'
		},
		[sizes.down('sm')]: {
			width: '100%',
			height: '10% !important'
		}
	},
	palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	colors: {
		height: '90%',
		fontFamily: "'Roboto', sans-serif",
		lineHeight: '1.23',
		fontSize: '1rem'
	}
};
