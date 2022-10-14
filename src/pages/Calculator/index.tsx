import React from 'react';
import { Link } from "react-router-dom"
import { Button } from 'evergreen-ui';
import { useEffect, useState } from "react";
import { Combobox, TextInput, Pane, Alert, Spinner } from "evergreen-ui"
import { useSelector, useDispatch } from "react-redux";

import { setLoaded, setNumberWithCurr, setToCurrency } from 'redux/app/slice'


import "./style.scss"

function Calculator() {
	const { rates, data } = useSelector((state: any) => state.response);
	const { isLoaded, numberWithCurrInput, toCurrency } = useSelector((state: any) => state.app);
	const dispatch = useDispatch();

	const [culculeted, setCulculeted] = useState('')
	const [isAlert, setisAlert] = useState(false)



	const handleChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setNumberWithCurr(e.target.value));
	}

	const handleConvert = (e: React.MouseEvent<HTMLButtonElement>) => {

		let splited_str = numberWithCurrInput.split(' ')

		let culc = (+splited_str[0] * data.rates[toCurrency] / data.rates[splited_str[1].toLocaleUpperCase()]);

		if (culc >= 1000) {
			setCulculeted(culc.toFixed(0));
			setisAlert(!isAlert)
		} else {
			setCulculeted(culc.toFixed(2))
			setisAlert(!isAlert)
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
		<div className="culc-wrapper">
			<Pane>
				{culculeted && isAlert ? (<Alert className='alert'
					intent="success"
					title={"Your source is now sending datav " + culculeted}
					marginBottom={32}
					isRemoveable={true}
					onRemove={() => { setisAlert(!isAlert) }}
				>
					{culculeted}
				</Alert>) : (<>  </>)}
			</Pane>

			{
				isLoaded ? (<>
					<h1>Сurrency Calculator</h1>
					<div className='input-currency'>
						<TextInput name="text-input-name" placeholder={"Number + Your currency"} onChange={handleChangeNumberInput} value={numberWithCurrInput} />
						<h6> in </h6>

						<Combobox
							items={rates}
							onChange={(selected: string) => {
								dispatch(setToCurrency(selected));
							}}
							placeholder="Currency"
							selectedItem={toCurrency}
						/>
						<Button onClick={handleConvert} appearance="primary" intent="success" >Convert</Button >
					</div>


				</>) : (
					<div><Spinner delay={1000} size={100} /></div>
				)
			}
			<div><Link to="/">Default Currency</Link></div>
		</div >
	);
}

export default Calculator;
