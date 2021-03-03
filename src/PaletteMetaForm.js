import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

const PaletteMetaForm = ({ palettes, handleSave, open, handleClose }) => {
	const [ newPaletteName, setNewPaletteName ] = useState('');
	const [ stage, setStage ] = useState('form');

	useEffect(
		() => {
			ValidatorForm.addValidationRule('isPaletteNameUnique', value => {
				return palettes.every(
					({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
				);
			});

			return () => {
				ValidatorForm.removeValidationRule('isPaletteNameUnique');
			};
		},
		[ palettes ]
	);

	const showEmojiPicker = () => {
		setStage('emoji');
	};

	const savePalette = e => {
		// e.native - emoji
		handleSave({ paletteName: newPaletteName, emoji: e.native });
	};

	return (
		<div>
			<Dialog open={stage === 'emoji'} onClose={handleClose}>
				<Picker title="Pick a Palette Emoji" onSelect={savePalette} />
			</Dialog>
			<Dialog
				open={stage === 'form'}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
				<ValidatorForm onSubmit={showEmojiPicker}>
					<DialogContent>
						<DialogContentText>
							Please enter a name for your new palette. Make sure its unique.
						</DialogContentText>

						<TextValidator
							margin="normal"
							fullWidth
							autoFocus
							label="Palette Name"
							value={newPaletteName}
							onChange={e => setNewPaletteName(e.target.value)}
							validators={[ 'required', 'isPaletteNameUnique' ]}
							errorMessages={[
								'Enter Palette Name',
								'Palette name is already taken'
							]}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</DialogActions>
				</ValidatorForm>
			</Dialog>
		</div>
	);
};

export default PaletteMetaForm;
