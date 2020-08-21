import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid} from 'react-virtualized';

// Grid data as an array of arrays
const list = [

];

function cellRenderer({columnIndex, key, rowIndex, style}) {
	return (
		<div key={key} style={style}>
			{list[rowIndex][columnIndex]}
		</div>
	);
}


function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo"/>
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<Grid
					cellRenderer={cellRenderer}
					columnCount={list[0].length}
					columnWidth={100}
					height={300}
					rowCount={list.length}
					rowHeight={30}
					width={300}
				/>
			</header>
		</div>
	);
}

export default App;
