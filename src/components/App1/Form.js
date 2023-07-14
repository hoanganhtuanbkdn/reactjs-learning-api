import React, { useEffect, useRef, useState } from 'react';
import './Form.css';

export default function Form({ setItems, items }) {
	const onSubmit = (event) => {
		event.preventDefault();
		// alert(event.target.title.value + event.target.image.value);

		// cach 1
		// const newItems = [
		// 	{
		// 		title: event.target.title.value,
		// 		image: event.target.image.value,
		// 	},
		// 	...items,
		// ]

		// setItems(newItems)

		// cach 2
		setItems((items) => [
			{
				name: event.target.title.value,
				url: event.target.image.value,
			},
			...items,
		]);
	};

	return (
		<form className="box-input" onSubmit={onSubmit}>
			<label>Title</label>
			<input name="title" />
			<label>Image</label>
			<input name="image" />
			<button type="submit">Submit</button>
		</form>
	);
}
