import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

class App extends Component {
	findPalette(id) {
		return seedColors.find(palette => palette.id === id);
	}
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={props => <PaletteList palettes={seedColors} {...props} />}
				/>
				<Route
					exact
					path="/palette/:id"
					render={props => (
						<Palette
							palette={generatePalette(this.findPalette(props.match.params.id))}
						/>
					)}
				/>
				<Route exact path="/palette/:paletteId/:colorId" render={() => <h1>Hi</h1>} />
			</Switch>
			// <Palette palette={generatePalette(seedColors[1])} />
		);
	}
}

export default App;
