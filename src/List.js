import React, { useEffect, useState } from 'react';
import './List.css';

export default function List({ items }) {
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

	return (
		<div>
			<ul className="container">
				{items.map((item, index) => (
					<li key={index}>
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
