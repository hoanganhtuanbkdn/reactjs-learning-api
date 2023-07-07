import React, { useEffect, useState } from 'react';

const data = [
	{
		title: 'Cabbage',
		id: 0,
		url: 'https://images.unsplash.com/photo-1688673678101-15195a13a44a',
	},
	{
		title: 'Garlic',
		id: 1,
		url: 'https://images.unsplash.com/photo-1661956602926-db6b25f75947',
	},
	{
		title: 'Apple',
		id: 2,
		url: 'https://images.unsplash.com/photo-1661956602944-249bcd04b63f',
	},
	{
		title: 'Cabbage',
		id: 3,
		url: 'https://images.unsplash.com/photo-1688673678101-15195a13a44a',
	},
	{
		title: 'Garlic',
		id: 4,
		url: 'https://images.unsplash.com/photo-1661956602926-db6b25f75947',
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
			<ul style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
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
							style={{ width: 200 }}
							onClick={() => setImage(item)}
						/>
					</li>
				))}
			</ul>
			{showImage && (
				<div style={box}>
					<img alt="" src={showImage.url} style={{ width: 300 }} />
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

const box = {
	position: 'fixed',
	backgroundColor: 'rgba(0,0,0, 0.6)',
	top: 0,
	right: 0,
	left: 0,
	bottom: 0,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	gap: 20,
};
