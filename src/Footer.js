import React from 'react';

const Footer = props => {
	return (
		<footer className="Palette-footer">
			{props.paletteName}
			<span className="emoji">{props.emoji}</span>
		</footer>
	);
};

export default Footer;
