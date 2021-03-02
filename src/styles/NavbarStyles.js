// eslint-disable-next-line
export default {
	navbar: {
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: '6vh'
	},
	logo: {
		marginRight: '15px',
		padding: '0 13px',
		fontSize: '22px',
		backgroundColor: '#eceff1',
		fontFamily: 'Roboto, sans-serif',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		'& a': {
			textDecoration: 'none',
			color: 'black'
		}
	},
	selectContainer: { marginLeft: 'auto', marginRight: '1rem' },
	slider: {
		width: '300px',
		margin: '0 10px',
		display: 'inline-block',
		'& .rc-slider-track': { backgroundColor: 'transparent' },
		'& .rc-slider-rail': { height: '8px' },
		'& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover': {
			backgroundColor: 'green',
			outline: 'none',
			border: '2px solid green',
			boxShadow: 'none',
			width: '13px',
			height: '13px',
			marginTop: '-3px'
		}
	}
};
