import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import { Delete as DeleteIcon } from '@material-ui/icons';

class MiniPalette extends PureComponent {
	render() {
		const { classes, id, paletteName, emoji, colors, handleClick, openDialog } = this.props;

		const miniColorBoxes = colors.map(color => (
			<div
				key={color.name}
				className={classes.miniColor}
				style={{ backgroundColor: color.color }}
			/>
		));

		const handleDelete = e => {
			e.stopPropagation();
			openDialog(id);
		};

		return (
			<div className={classes.root} onClick={() => handleClick(id)}>
				<DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
				<div className={classes.colors}> {miniColorBoxes}</div>
				<h5 className={classes.title}>
					{paletteName} <span className={classes.emoji}>{emoji}</span>
				</h5>
			</div>
		);
	}
}

// const MiniPalette = props => {
// 	const { classes, id, paletteName, emoji, colors, handleClick, openDialog } = props;

// 	const miniColorBoxes = colors.map(color => (
// 		<div
// 			key={color.name}
// 			className={classes.miniColor}
// 			style={{ backgroundColor: color.color }}
// 		/>
// 	));

// 	const handleDelete = e => {
// 		e.stopPropagation();
// 		openDialog(id);
// 	};

// 	return (
// 		<div className={classes.root} onClick={handleClick}>
// 			<DeleteIcon className={classes.deleteIcon} onClick={handleDelete} />
// 			<div className={classes.colors}> {miniColorBoxes}</div>
// 			<h5 className={classes.title}>
// 				{paletteName} <span className={classes.emoji}>{emoji}</span>
// 			</h5>
// 		</div>
// 	);
// };

export default withStyles(styles)(MiniPalette);
