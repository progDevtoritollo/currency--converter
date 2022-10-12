
import { Route, Routes } from "react-router-dom";
import Calculator from "./Calculator"
import DefaultCurrency from "./DefaultCurrency"

export const Routing = () => {
	return (
		<Routes>
			<Route path="/calculator" element={<Calculator />} />
			<Route path="/" element={<DefaultCurrency />} />
		</Routes>
	);
};