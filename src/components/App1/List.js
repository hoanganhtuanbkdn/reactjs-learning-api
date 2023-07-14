/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import './List.css';

export default function List({ items, setItems }) {
	const [showImage, setImage] = useState('');

	const onPrev = (id) => {
		const idPrev = id - 1;
		const itemPrev = items[idPrev];
		setImage(itemPrev);
	};

	const onNext = (id) => {
		const idPrev = id + 1;
		const itemPrev = items[idPrev];
		setImage(itemPrev);
	};

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
						<p
							style={{
								color:
									item.title === 'Cabbage' ? 'red' : 'green',
								width: 200,
							}}
						>
							{item.name}
						</p>
						<div>
							<img
								alt=""
								src={item.url}
								style={{ width: 60 }}
								onClick={() => setImage(item)}
							/>
						</div>
						<button onClick={() => onDelete(item.id)}>
							Delete
						</button>
					</li>
				))}
			</ul>
			{showImage && (
				<div className="box">
					<img alt="" src={showImage.url} style={{ width: 700 }} />
					<div className="actions">
						{showImage.id > 0 && (
							<button onClick={() => onPrev(showImage.id)}>
								{'<'}
							</button>
						)}
						<button onClick={() => setImage('')}>Close</button>
						{showImage.id < items.length - 1 && (
							<button onClick={() => onNext(showImage.id)}>
								{'>'}
							</button>
						)}
					</div>
				</div>
			)}
		</div>
	);
}
