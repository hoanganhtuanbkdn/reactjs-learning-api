import React, { useEffect, useState } from 'react';
import './List.css';

const data = [
	{
		title: 'Cabbage',
		id: 0,
		url: 'https://images.unsplash.com/photo-1688317220306-2976558c7a2f',
	},
	{
		title: 'Garlic',
		id: 1,
		url: 'https://images.unsplash.com/photo-1682789783205-d479fd9a7523',
	},
	{
		title: 'Apple',
		id: 2,
		url: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f',
	},
	{
		title: 'Cabbage',
		id: 3,
		url: 'https://images.unsplash.com/photo-1688317220306-2976558c7a2f',
	},
	{
		title: 'Garlic',
		id: 4,
		url: 'https://images.unsplash.com/photo-1682789783205-d479fd9a7523',
	},
	{
		title: 'Apple',
		id: 5,
		url: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f',
	},
];

export default function List() {
	const [items, setItems] = useState([]);
	const [showImage, setImage] = useState('');

	useEffect(() => {
		setItems(data);
	}, []);

	const onPrev = (id) => {
		const idPrev = id - 1;
		const itemPrev = data[idPrev];
		setImage(itemPrev);
	};

	const onNext = (id) => {
		const idPrev = id + 1;
		const itemPrev = data[idPrev];
		setImage(itemPrev);
	};

	return (
		<div>
			<ul className="container">
				{items.map((item) => (
					<li key={item.id}>
						<p
							style={{
								color:
									item.title === 'Cabbage' ? 'red' : 'green',
							}}
						>
							{item.title}
						</p>
						<img
							alt=""
							src={item.url}
							style={{ width: 300 }}
							onClick={() => setImage(item)}
						/>
					</li>
				))}
			</ul>
			{showImage && (
				<div className="box">
					<img alt="" src={showImage.url} style={{ width: 700 }} />
					<div>
						{showImage.id > 0 && (
							<button onClick={() => onPrev(showImage.id)}>
								{'<'}
							</button>
						)}
						<button onClick={() => setImage('')}>Close</button>
						{showImage.id < items?.length - 1 && (
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
