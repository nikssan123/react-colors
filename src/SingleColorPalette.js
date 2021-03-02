import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Footer from './Footer';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

const SingleColorPalette = ({ palette, colorId, classes }) => {
	const [ format, setFormat ] = useState('hex');

	const generateShades = (palette, colorId) => {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter(color => color.id === colorId));
		}

		return shades.slice(1);
	};

	const changeFormat = val => {
		setFormat(val);
	};

	const _shades = generateShades(palette, colorId);

	const { paletteName, emoji, id } = palette;

	const colorBoxes = _shades.map(color => (
		<ColorBox
			key={color.name}
			name={color.name}
			background={color[format]}
			showFullPalette={false}
		/>
	));

	return (
		<div className={classes.palette}>
			<Navbar handleChangeFormat={changeFormat} showSlider={false} />
			<div className={classes.colors}>
				{colorBoxes}
				<div className={classes.goBack}>
					<Link to={`/palette/${id}`}>Go Back</Link>
				</div>
			</div>
			<Footer paletteName={paletteName} emoji={emoji} />
		</div>
	);
};

export default withStyles(styles)(SingleColorPalette);
