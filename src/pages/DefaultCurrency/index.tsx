import React from 'react';
import { Link } from "react-router-dom"


function DefaultCurrency() {
	return (
		<div className="App">
			<h1>DefaultCurrency</h1>
			<div><Link to="/calculator">Calculator</Link></div>
		</div>
	);
}

export default DefaultCurrency;
