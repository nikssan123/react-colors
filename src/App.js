import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

import './App.css';

function App() {
	const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
	const [ palettes, setPalettes ] = useState(savedPalettes || seedColors);

	useEffect(() => {
		syncLocalStorage();
	});

	const syncLocalStorage = () => {
		window.localStorage.setItem('palettes', JSON.stringify(palettes));
	};

	const findPalette = id => {
		return palettes.find(palette => palette.id === id);
	};

	const savePalette = newPalette => {
		setPalettes([ ...palettes, newPalette ]);
	};

	const deletePalette = id => {
		// console.log()
		setPalettes(palettes.filter(palette => palette.id !== id));
		syncLocalStorage();
	};

	return (
		<Switch>
			<Route
				exact
				path="/"
				render={props => (
					<PaletteList palettes={palettes} deletePalette={deletePalette} {...props} />
				)}
			/>
			<Route
				exact
				path="/palette/new"
				render={props => (
					<NewPaletteForm {...props} palettes={palettes} savePalette={savePalette} />
				)}
			/>
			<Route
				exact
				path="/palette/:id"
				render={props => (
					<Palette palette={generatePalette(findPalette(props.match.params.id))} />
				)}
			/>
			<Route
				exact
				path="/palette/:paletteId/:colorId"
				render={props => (
					<SingleColorPalette
						palette={generatePalette(findPalette(props.match.params.paletteId))}
						colorId={props.match.params.colorId}
					/>
				)}
			/>
		</Switch>
	);
}

export default App;
