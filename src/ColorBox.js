import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';

const ColorBox = ({ name, background, id, paletteId, showFullPalette, classes }) => {
	const [ copied, setCopied ] = useState(false);
	useEffect(
		() => {
			if (copied) {
				setTimeout(() => setCopied(false), 1500);
			}
		},
		[ copied ]
	);

	const changeCopyState = () => {
		setCopied(true);
	};

	return (
		<CopyToClipboard text={background} onCopy={changeCopyState}>
			<div className={classes.colorBox} style={{ backgroundColor: background }}>
				<div
					style={{ background }}
					className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
				/>
				<div className={`${classes.copyMessage} ${copied && classes.showCopyMessage}`}>
					<h1>Copied!</h1>
					<p className={classes.copyText}>{background}</p>
				</div>
				<div>
					<div className={classes.boxContent}>
						<span className={classes.colorName}>{name}</span>
					</div>
					<button className={classes.copyButton}>Copy</button>
				</div>
				{showFullPalette && (
					<Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
						<span className={classes.seeMore}>MORE</span>
					</Link>
				)}
			</div>
		</CopyToClipboard>
	);
};

export default withStyles(styles)(ColorBox);
