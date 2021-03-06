import React from 'react';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Button } from '@material-ui/core';

import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '64px'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	navBtns: {
		display: 'flex',
		marginRight: '1rem',
		'& a': {
			textDecoration: 'none'
		}
	},
	button: {
		margin: '0 0.5rem'
	},
	hiden: {
		display: 'none'
	}
}));

const PaletteFormNav = ({ open, palettes, handleSave, handleDrawerOpen }) => {
	const classes = useStyles();
	const [ formShowing, setFormShowing ] = React.useState(false);

	const closeForm = e => {
		setFormShowing(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position="fixed"
				color="default"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, {
							[classes.hiden]: open
						})}
					>
						<ChevronRightIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Create A Palette
					</Typography>
				</Toolbar>
				<div className={classes.navBtns}>
					<Link to="/">
						<Button className={classes.button} variant="contained" color="secondary">
							Go Back
						</Button>
					</Link>
					<Button
						className={classes.button}
						variant="contained"
						color="primary"
						onClick={() => setFormShowing(true)}
					>
						Save
					</Button>
				</div>
			</AppBar>
			{formShowing && (
				<PaletteMetaForm
					palettes={palettes}
					handleSave={handleSave}
					handleClose={closeForm}
				/>
			)}
		</div>
	);
};

export default PaletteFormNav;
