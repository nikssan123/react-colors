import React, { Component } from 'react';
import ColorBox from './ColorBox';

import './Palette.css';

class Palette extends Component {
	render() {
		const colorBoxex = this.props.colors.map((c) => <ColorBox background={c.color} name={c.name} />);
		return (
			<div className="Palette">
				<div className="Palette-colors">{colorBoxex}</div>
			</div>
		);
	}
}

export default Palette;
