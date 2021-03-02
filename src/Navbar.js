import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import SnackBar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/styles';

import 'rc-slider/assets/index.css';
import styles from './styles/NavbarStyles';

const Navbar = ({ level, changeLevel, showSlider, classes, handleChangeFormat }) => {
	const [ format, setFormat ] = useState('hex');
	const [ open, setOpen ] = useState(false);

	const handleChange = e => {
		// this.setState({ format: e.target.value, open: true });
		setFormat(e.target.value);
		setOpen(true);
		handleChangeFormat(e.target.value);
	};

	const handleClose = (e, reason) => {
		setOpen(false);
	};

	return (
		<header className={classes.navbar}>
			<div className={classes.logo}>
				<Link to="/">reactcolorpicker</Link>
			</div>
			{showSlider && (
				<div>
					<span>Level: {level}</span>
					<div className={classes.slider}>
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

			<div className={classes.selectContainer}>
				<Select value={format} onChange={handleChange}>
					<MenuItem value="hex">HEX - #ffffff</MenuItem>
					<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
					<MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
				</Select>
			</div>
			<SnackBar
				open={open}
				autoHideDuration={6000}
				message={`Format Changed To: ${format.toUpperCase()}`}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						onClick={handleClose}
						key="close"
					>
						<CloseIcon />
					</IconButton>
				}
			/>
		</header>
	);
};

export default withStyles(styles)(Navbar);
