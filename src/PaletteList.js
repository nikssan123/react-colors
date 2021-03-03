import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PaletteList = ({ palettes, classes, history, deletePalette }) => {
	const [ open, setOpen ] = useState(false);
	const [ currentId, setCurrentId ] = useState('');

	const goToPalette = id => {
		history.push(`/palette/${id}`);
	};

	const openDialog = id => {
		setOpen(true);
		setCurrentId(id);
	};

	const closeDialog = () => {
		setOpen(false);
		setCurrentId('');
	};

	const handleDelete = () => {
		deletePalette(currentId);
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<nav className={classes.nav}>
					<h1>React Colors</h1>
					<Link to="/palette/new">Create Palette</Link>
				</nav>
				<TransitionGroup className={classes.palettes}>
					{palettes.map(palette => (
						<CSSTransition key={palette.id} classNames="fade" timeout={500}>
							<MiniPalette
								key={palette.id}
								// deletePalette={deletePalette}
								openDialog={openDialog}
								{...palette}
								handleClick={() => goToPalette(palette.id)}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
			</div>
			<Dialog open={open} onClose={closeDialog} aria-labelledby="delete-dialog">
				<DialogTitle id="delete-dialog-title">Delete this palette?</DialogTitle>
				<List>
					<ListItem button onClick={handleDelete}>
						<ListItemAvatar>
							<Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
								<CheckIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={'Delete'} />
					</ListItem>
					<ListItem button onClick={closeDialog}>
						<ListItemAvatar>
							<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
								<CloseIcon />
							</Avatar>
						</ListItemAvatar>
						<ListItemText primary={'Close'} />
					</ListItem>
				</List>
			</Dialog>
		</div>
	);
};

export default withStyles(styles)(PaletteList);
