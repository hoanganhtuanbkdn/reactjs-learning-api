/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import './List2.css';

export default function List({ items, setItems }) {
	const onDelete = (id) => {
		confirm('Do you want to delete this item');
		const newList = items.filter((item) => item.id !== id);
		setItems(newList);
	};
	return (
		<div>
			<ul className="container">
				{items.map((item, index) => (
					<li key={index} className="post-item">
						<p>{item.email}</p>
						<p>{item.status}</p>
						<button onClick={() => onDelete(item.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
