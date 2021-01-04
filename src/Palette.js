import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class Palette extends Component {
	constructor(props) {
		super(props);

		this.state = {
			level: 500,
			format: 'hex'
		};

		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeLevel(level) {
		this.setState({
			level
		});
	}

	changeFormat(val) {
		this.setState({ format: val });
	}

	render() {
		const { classes } = this.props;
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;

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
					handleChange={this.changeFormat}
					level={level}
					changeLevel={this.changeLevel}
				/>
				<div className={classes.colors}>{colorBoxex}</div>
				<Footer paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(Palette);
