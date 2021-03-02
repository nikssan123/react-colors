import React from 'react';
import { withStyles } from '@material-ui/styles';
import { SortableElement } from 'react-sortable-hoc';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
	root: {
		width: '20%',
		height: '25%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-4.75px',
		textTransform: 'uppercase',
		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.4)'
		}
	},
	boxContent: {
		position: 'absolute',
		padding: '10px',
		width: '100%',
		left: '0px',
		bottom: '0px',
		color: 'rgba(0, 0, 0, 0.5)',
		letterSpacing: '1px',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	deleteIcon: {
		transition: '0.5s all ease-in-out'
	}
};

const DragableColorBox = SortableElement(({ name, color, classes, deleteColor }) => {
	return (
		<div className={classes.root} style={{ backgroundColor: color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<IconButton onClick={() => deleteColor(name)}>
					<DeleteIcon className={classes.deleteIcon} />
				</IconButton>
			</div>
		</div>
	);
});

export default withStyles(styles)(DragableColorBox);
