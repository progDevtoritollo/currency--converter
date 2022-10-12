import React from 'react';
import { Link } from "react-router-dom"


function Calculator() {
	return (
		<div className="App">
			<h1>Calculator</h1>

			<div><Link to="/">Default Currency</Link></div>
		</div>
	);
}

export default Calculator;
