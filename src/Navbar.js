import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import 'rc-slider/assets/index.css';
import './Navbar.css';

export default class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			format: 'hex',
			open: false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleChange(e) {
		this.setState({ format: e.target.value, open: true });
		this.props.handleChange(e.target.value);
	}

	handleClose(e, reason) {
		this.setState({ open: false });
		console.log(reason);
	}

	render() {
		const { level, changeLevel, showSlider } = this.props;
		const { format, open } = this.state;

		return (
			<header className="Navbar">
				<div className="logo">
					<Link to="/">reactcolorpicker</Link>
				</div>
				{showSlider && (
					<div className="slider-container">
						<span>Level: {level}</span>
						<div className="slider">
							<Slider
								defaultValue={level}
								min={100}
								max={900}
								onAfterChange={changeLevel}
								step={100}
							/>
						</div>
					</div>
				)}

				<div className="select-container">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
					</Select>
				</div>
				<SnackBar
					open={open}
					autoHideDuration={6000}
					message={`Format Changed To: ${format.toUpperCase()}`}
					onClose={this.handleClose}
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					action={
						<IconButton
							aria-label="close"
							color="inherit"
							onClick={this.handleClose}
							key="close"
						>
							<CloseIcon />
						</IconButton>
					}
				/>
			</header>
		);
	}
}
