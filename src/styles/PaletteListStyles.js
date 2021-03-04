import sizes from './mediaQueries';
import bg from './bg.svg';
// eslint-disable-next-line
export default {
	'@global': {
		'.fade-exit': {
			opacity: 1
		},
		'.fade-exit-active': {
			opacity: 0,
			transition: 'opacity 500ms ease-in-out'
		}
	},
	root: {
		overflow: 'auto',
		// backgroundColor: 'blue',
		height: '100vh',
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'center',
		backgroundColor: '#394bad',
		backgroundImage: `url(${bg})`,
		backgroundAttachment: 'fixed',
		fontFamily: "'Roboto', sans-serif",
		lineHeight: '1.23',
		fontSize: '1rem'
		/* background by SVGBackgrounds.com */
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		[sizes.down('xl')]: {
			width: '80%'
		},
		[sizes.down('md')]: {
			width: '70%'
		},
		[sizes.down('xs')]: {
			width: '60%'
		}
	},
	nav: {
		margin: '10px 0',
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		alignItems: 'center',
		color: 'white',
		'& a': {
			// textDecoration: 'none',
			color: 'white'
		}
	},
	palettes: {
		marginBottom: '20px',
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '2.5rem',
		[sizes.down('md')]: {
			gridTemplateColumns: 'repeat(2, 50%)'
		},
		[sizes.down('xs')]: {
			gridTemplateColumns: 'repeat(1, 100%)',
			gridGap: '1.5rem'
		}
	}
};
