import React from 'react';
import { Link } from "react-router-dom"
import { Button } from 'evergreen-ui';
import { useEffect } from "react";
import { Combobox, TextInput, Spinner } from "evergreen-ui"
import { useSelector, useDispatch } from "react-redux";

import { setLoaded, setNumberWithCurr, setToCurrency, setIsAlert, setAlertMassage } from 'redux/app/slice';
import "./index.scss";


function Calculator() {
	const { rates, data } = useSelector((state: any) => state.response);
	const { isLoaded, numberWithCurrInput, toCurrency } = useSelector((state: any) => state.app);
	const dispatch = useDispatch();




	const handleChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setNumberWithCurr(e.target.value));
	}

	const handleConvert = (e: React.MouseEvent<HTMLButtonElement>) => {

		let splited_str = numberWithCurrInput.split(' ')

		let culc = (+splited_str[0] * data.rates[toCurrency] / data.rates[splited_str[1].toLocaleUpperCase()]);

		if (culc >= 1000) {
			dispatch(setAlertMassage(culc.toFixed(0)))
			dispatch(setIsAlert(true))
		} else {
			dispatch(setAlertMassage(culc.toFixed(2)))
			dispatch(setIsAlert(true))
		}

	}


	useEffect(() => {
		if (data !== null) {
			dispatch(setLoaded(true));
		}
		console.log(isLoaded, "isLoaded in Calculator ");
		return () => {
			dispatch(setLoaded(false));
			console.log(isLoaded, "isLoaded in Calculator unmount");
		};
	}, [isLoaded]);

	return (
		<div className="calculator block">
			{
				isLoaded ? (< >
					<h1>Сurrency Calculator</h1>
					<div>
						<TextInput className='calculator__input-currency' name="text-input-name" placeholder={"Number + Your currency"} onChange={handleChangeNumberInput} value={numberWithCurrInput} />
					</div>

					<h4> IN </h4>
					<div className="calculator__combobox">
						<Combobox
							items={rates}
							onChange={(selected: string) => {
								dispatch(setToCurrency(selected));
							}}
							placeholder="to Currency"
							selectedItem={toCurrency}
						/>
					</div>

					<Button className='calculator__button' onClick={handleConvert}  >Convert</Button >
				</>) : (
					<div><Spinner delay={1000} size={100} /></div>
				)
			}
			<Link className='link' to="/">Default Currency</Link>
		</div >
	);
}

export default Calculator;
