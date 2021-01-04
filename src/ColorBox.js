import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { withStyles } from '@material-ui/styles';
// import './ColorBox.css';
import styles from './styles/ColorBoxStyles';

class ColorBox extends Component {
	constructor(props) {
		super(props);

		this.state = {
			copied: false
		};

		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}
	render() {
		const { name, background, id, paletteId, showFullPalette, classes } = this.props;
		const { copied } = this.state;

		// const isDarkColor = chroma(background).luminance() <= 0.08;
		// const isLightColor = chroma(background).luminance() >= 0.7;

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
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
	}
}

export default withStyles(styles)(ColorBox);
