import chroma from 'chroma-js';
// eslint-disable-next-line
export default {
	colorBox: {
		width: '20%',
		height: props => (props.showFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
		textTransform: 'uppercase',
		'&:hover button': {
			opacity: '1'
		}
	},
	copyText: {
		color: props => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white')
	},
	colorName: {
		color: props => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black')
	},
	seeMore: {
		color: props =>
			chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.6)' : 'white',
		background: 'rgba(255, 2555, 255, 0.3)',
		position: 'absolute',
		bottom: '0',
		right: '0',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px'
	},
	copyButton: {
		color: props =>
			chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.6)' : 'white',
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
		textDecoration: 'none',
		opacity: '0'
	},
	boxContent: {
		position: 'absolute',
		padding: '10px',
		width: '100%',
		left: '0px',
		bottom: '0px',
		color: 'black',
		letterSpacing: '1px',
		fontSize: '12px'
	},
	copyOverlay: {
		opacity: '0',
		zIndex: '0',
		width: '100%',
		height: '100%',
		position: 'absolute',
		transition: 'transform 0.6s ease-in-out'
	},
	showOverlay: {
		opacity: '1',
		transform: 'scale(50)',
		zIndex: '10'
	},
	copyMessage: {
		color: props =>
			chroma(props.background).luminance() >= 0.7 ? 'rgba(0, 0, 0, 0.6)' : 'white',
		position: 'fixed',
		left: '0',
		right: '0',
		top: '0',
		bottom: '0',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '4rem',
		transform: 'scale(0.1)',
		opacity: ' 0',
		'& h1': {
			fontWeight: '400',
			textShadow: '1px 2px black',
			background: 'rgba(255, 255, 255, 0.3)',
			width: '100%',
			textAlign: 'center',
			marginBottom: '0',
			padding: '1rem',
			textTransform: 'uppercase'
		},
		'& p': {
			fontWeight: '100',
			fontSize: '2rem'
		}
	},
	showCopyMessage: {
		opacity: '1',
		transform: 'scale(0.5)',
		zIndex: '25',
		transition: 'all 0.4s 0.3s ease-in-out'
	}
};
