import React, { useEffect, useRef, useState } from 'react';
import './Form2.css';

export default function Form(props) {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		props.postData(email, status);
	};

	return (
		<form className="box-input" onSubmit={onSubmit}>
			<label>email</label>
			<input
				name="email"
				value={email}
				onChange={(e) => {
					setEmail(e.target.value);
				}}
			/>
			<label>status</label>
			<input
				name="status"
				value={status}
				onChange={(e) => {
					setStatus(e.target.value);
				}}
			/>
			<button type="submit">Submit</button>
		</form>
	);
}
