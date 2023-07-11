import List from './List';
import Form from './Form';
import './App.css';
import { useState } from 'react';

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
];

function App() {
	const [items, setItems] = useState(data);
	return (
		<div className="App">
			<List items={items} />
			<Form setItems={setItems} items={items} />
		</div>
	);
}

export default App;
