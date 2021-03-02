import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

const Palette = ({ classes, palette }) => {
	const [ level, setLevel ] = useState(500);
	const [ format, setFormat ] = useState('hex');

	const changeLevel = newLevel => {
		setLevel(newLevel);
	};

	const changeFormat = val => {
		setFormat(val);
	};

	const { colors, paletteName, emoji, id } = palette;

	const colorBoxex = colors[level].map(c => (
		<ColorBox
			key={c.id}
			id={c.id}
			paletteId={id}
			background={c[format]}
			name={c.name}
			showFullPalette
		/>
	));

	return (
		<div className={classes.palette}>
			<Navbar
				showSlider
				handleChangeFormat={changeFormat}
				level={level}
				changeLevel={changeLevel}
			/>
			<div className={classes.colors}>{colorBoxex}</div>
			<Footer paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default withStyles(styles)(Palette);
