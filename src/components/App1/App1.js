import List from './List';
import Form from './Form';
import '../../css/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [items, setItems] = useState([]);

	const getData = async () => {
		axios
			.get('https://api.code4change.dev/projects', {
				params: {
					filter: {
						limit: 4,
						offset: 0,
						include: [
							{
								relation: 'mediaContents',
								scope: {
									limit: 1,
								},
							},
						],
					},
				},
			})
			.then(function (response) {
				// handle success
				console.log(response);
				const list = response.data.data.map((item, index) => ({
					name: item.name,
					url:
						item.mediaContents &&
						item.mediaContents[0] &&
						item.mediaContents[0].url,
					id: index,
				}));
				/// step 3: update data to state
				setItems(list);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.finally(function () {
				console.log('finally');
				// always executed
			});
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
