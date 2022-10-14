/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState, useEffect } from 'react';

interface InputProps {
	placeholder: string;
	setData: (text: string) => void;
}

function TextInput({ placeholder, setData }: InputProps) {
	const [text, setText] = useState("")



	useEffect(() => {

	}, [])

	return (
		<div className="input">
			{/* <Input /> */}
		</div >
	);
}

export default TextInput;