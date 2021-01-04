import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Footer from './Footer';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);

		const { palette, colorId } = this.props;

		this._shades = this.generateShades(palette, colorId);

		this.state = {
			format: 'hex'
		};

		this.changeFormat = this.changeFormat.bind(this);
	}

	generateShades(palette, colorId) {
		let shades = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter(color => color.id === colorId));
		}

		return shades.slice(1);
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	render() {
		const { classes } = this.props;
		const { paletteName, emoji, id } = this.props.palette;

		const colorBoxes = this._shades.map(color => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color[this.state.format]}
				showFullPalette={false}
			/>
		));

		return (
			<div className={classes.palette}>
				<Navbar handleChange={this.changeFormat} showSlider={false} />
				<div className={classes.colors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`}>Go Back</Link>
					</div>
				</div>
				<Footer paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
