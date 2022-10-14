import React from 'react';
import { Link } from "react-router-dom"
import { Button } from 'evergreen-ui';
import { useEffect, useState } from "react";
import { Combobox, TextInput, Pane, Alert } from "evergreen-ui"
import { useSelector } from "react-redux";


import "./style.scss"

function Calculator() {
	const { rates, data } = useSelector((state: any) => state.response);

	const [loaded, setLoaded] = useState(true);
	const [numberWithCurrInput, setNumberWithCurr] = useState('')
	const [toCurrency, setToCurrency] = useState('')
	const [culculeted, setCulculeted] = useState('')
	const [isAlert, setisAlert] = useState(false)



	const handleChangeNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(numberWithCurrInput, toCurrency);
		setNumberWithCurr(e.target.value);
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
				</Alert>) : (<></>)}
			</Pane>

			{
				loaded ? (<>
					<h1>Сurrency Calculator</h1>
					<div className='input-currency'>
						<TextInput name="text-input-name" placeholder={"Number + Your currency"} onChange={handleChangeNumberInput} value={numberWithCurrInput} />
						<h6> in </h6>

						<Combobox
							items={rates}
							onChange={(selected: string) => {
								setToCurrency(selected);
								console.log(selected);
							}}
							placeholder="Currency"
						/>
						<Button onClick={handleConvert} appearance="primary" intent="success" >Convert</Button >
					</div>


				</>) : (
					<div>Empty</div>
				)
			}
			<div><Link to="/">Default Currency</Link></div>
		</div >
	);
}

export default Calculator;
