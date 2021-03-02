import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { Button } from '@material-ui/core';

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const useStyles = makeStyles(() => ({
	picker: {
		width: '100% !important',
		marginTop: '2rem'
	},
	addColor: {
		width: '100%',
		padding: '1rem',
		marginTop: '1rem',
		fontSize: '1.2rem'
	},
	colorInput: {
		width: '100%',
		height: '60px'
	}
}));

const ColorPickerForm = ({ paletteIsFull, addNewColor, colors }) => {
	const classes = useStyles();

	const [ currentColor, setCurrentColor ] = useState('teal');
	const [ newName, setNewName ] = useState('');

	const handleColorChange = newColor => {
		setCurrentColor(newColor.hex);
	};

	const handleSubmit = () => {
		const color = {
			color: currentColor,
			name: newName
		};
		addNewColor(color);
		// setNewName(' ');
	};

	useEffect(
		() => {
			ValidatorForm.addValidationRule('isColorNameUnique', value => {
				return colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase());
			});

			ValidatorForm.addValidationRule('isColorUnique', value => {
				return colors.every(({ color }) => color !== currentColor);
			});

			return () => {
				ValidatorForm.removeValidationRule('isColorNameUnique');
				ValidatorForm.removeValidationRule('isColorUnique');
			};
		},
		[ colors, currentColor ]
	);

	return (
		<div style={{ width: '80%' }}>
			<ChromePicker
				className={classes.picker}
				color={currentColor}
				onChange={handleColorChange}
			/>
			<ValidatorForm onSubmit={handleSubmit}>
				<TextValidator
					className={classes.colorInput}
					margin="normal"
					name={newName}
					variant="filled"
					value={newName}
					placeholder="Color Name"
					onChange={e => setNewName(e.target.value)}
					validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
					errorMessages={[
						'Enter color name',
						'Color name must be unique',
						'Color must be unique'
					]}
				/>
				<Button
					className={classes.addColor}
					disabled={paletteIsFull}
					type="submit"
					variant="contained"
					color="primary"
					style={{
						backgroundColor: paletteIsFull ? 'grey' : currentColor
					}}
				>
					{paletteIsFull ? 'Palette Full' : 'Add Color'}
				</Button>
			</ValidatorForm>
		</div>
	);
};

export default ColorPickerForm;
