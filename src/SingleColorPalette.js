import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import Footer from './Footer';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';

const styles = {
	goBack: {
		backgroundColor: 'black',
		width: '20%',
		height: props => (props.showFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4px',
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
		}
	},
	palette: {
		height: '100vh',
		display: 'flex',
		flexDirection: 'column'
	},
	colors: {
		height: '90%'
	}
};

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
