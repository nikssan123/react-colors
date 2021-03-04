import React, { useState } from 'react';

import PaletteFormNav from './PaletteFormNav';
import ColorPickerForm from './ColorPickerForm';
import seedColors from './seedColors';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { Button } from '@material-ui/core';

import DragableColorList from './DragableColorList';
import { arrayMove } from 'react-sortable-hoc';

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex'
	},
	appBar: {
		height: '',
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
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
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		display: 'flex',
		alignItems: 'center'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		width: '100%',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		height: 'calc(100vh - 64px)',
		flexGrow: 1,
		// padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	container: {
		height: '100%',
		width: '90%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttons: {
		width: '100%'
	},
	button: {
		width: '50%'
	}
}));

export default function NewPaletteForm({ savePalette, history, palettes }) {
	const classes = useStyles();
	const maxColors = 20;

	const [ open, setOpen ] = useState(true);
	const [ colors, setColors ] = useState([ ...seedColors[0].colors ]);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const addNewColor = color => {
		setColors([ ...colors, color ]);
	};

	const deleteColor = colorName => {
		const newColors = colors.filter(color => color.name !== colorName);
		setColors([ ...newColors ]);
	};

	const addRandomColor = () => {
		const allColors = palettes.map(p => p.colors).flat();
		let rand;
		let randomColor;
		let isDuplicateColor = true;
		while (isDuplicateColor) {
			rand = Math.floor(Math.random() * allColors.length);
			randomColor = allColors[rand];
			//eslint-disable-next-line
			isDuplicateColor = colors.some(color => color.name === randomColor.name);
		}
		setColors([ ...colors, randomColor ]);
	};

	const handleSave = ({ paletteName, emoji }) => {
		const newPalette = {
			paletteName: paletteName,
			colors,
			emoji,
			id: paletteName.toLowerCase().replace(/ /g, '-')
		};

		savePalette(newPalette);
		history.push('/');
	};

	const onSortEnd = ({ oldIndex, newIndex }) => {
		setColors(arrayMove(colors, oldIndex, newIndex));
	};

	const paletteIsFull = colors.length >= maxColors;

	return (
		<div className={classes.root}>
			<PaletteFormNav
				open={open}
				palettes={palettes}
				handleSave={handleSave}
				handleDrawerOpen={handleDrawerOpen}
			/>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</div>
				<Divider width="100%" />
				<div className={classes.container}>
					<Typography gutterBottom variant="h4">
						Design Your Palette
					</Typography>
					<div className={classes.buttons}>
						<Button
							className={classes.button}
							variant="contained"
							color="secondary"
							onClick={() => setColors([])}
						>
							Clear Palette
						</Button>
						<Button
							className={classes.button}
							disabled={paletteIsFull}
							variant="contained"
							color="primary"
							onClick={addRandomColor}
						>
							Random Color
						</Button>
					</div>
					<ColorPickerForm
						paletteIsFull={paletteIsFull}
						addNewColor={addNewColor}
						colors={colors}
					/>
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				<DragableColorList
					colors={colors}
					deleteColor={deleteColor}
					axis="xy"
					onSortEnd={onSortEnd}
					distance={10}
				/>
			</main>
		</div>
	);
}
