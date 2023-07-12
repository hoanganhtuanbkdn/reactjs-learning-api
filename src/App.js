import List from './components/List';
import Form from './components/Form';
import './css/App.css';
import { useEffect, useState } from 'react';

function App() {
	const [items, setItems] = useState([]);

	const getData = async () => {
		// step 1: xac dinh api: https://api.code4change.dev/projects, phuong thuc: get,
		// step 2: fetch api
		const response = await fetch(
			'https://api.code4change.dev/projects?filter=%7B%22limit%22:10,%22offset%22:0,%22order%22:[%22id+DESC%22],%22include%22:[%7B%22relation%22:%22mediaContents%22%7D],%22where%22:%7B%22branchId%22:1%7D%7D'
		);
		const result = await response.json();
		const list = result.data.map((item, index) => ({
			name: item.name,
			url:
				item.mediaContents &&
				item.mediaContents[0] &&
				item.mediaContents[0].url,
			id: index,
		}));
		/// step 3: update data to state
		setItems(list);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<List items={items} setItems={setItems} />
			<Form setItems={setItems} />
		</div>
	);
}

export default App;
