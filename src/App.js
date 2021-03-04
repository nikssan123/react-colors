import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Page from './Page';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
		<Route
			render={({ location }) => (
				<TransitionGroup>
					<CSSTransition key={location.key} classNames="page" timeout={500}>
						<Switch location={location}>
							<Route
								exact
								path="/"
								render={props => (
									<Page>
										<PaletteList
											palettes={palettes}
											deletePalette={deletePalette}
											{...props}
										/>
									</Page>
								)}
							/>
							<Route
								exact
								path="/palette/new"
								render={props => (
									<Page>
										<NewPaletteForm
											{...props}
											palettes={palettes}
											savePalette={savePalette}
										/>
									</Page>
								)}
							/>
							<Route
								exact
								path="/palette/:id"
								render={props => (
									<Page>
										<Palette
											palette={generatePalette(
												findPalette(props.match.params.id)
											)}
										/>
									</Page>
								)}
							/>
							<Route
								exact
								path="/palette/:paletteId/:colorId"
								render={props => (
									<Page>
										<SingleColorPalette
											palette={generatePalette(
												findPalette(props.match.params.paletteId)
											)}
											colorId={props.match.params.colorId}
										/>
									</Page>
								)}
							/>
							{/* 404 route */}
							<Route
								render={props => (
									<Page>
										<PaletteList
											palettes={palettes}
											deletePalette={deletePalette}
											{...props}
										/>
									</Page>
								)}
							/>
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			)}
		/>
	);
}

export default App;
