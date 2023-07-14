import List from './List2';
import Form from './Form2';
import '../../css/App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
	const [items, setItems] = useState([]);

	const getData = async () => {
		const response = await axios.get(
			'https://api.code4change.dev/newsletters',
			{
				params: {
					filter: {
						order: ['id DESC'],
					},
				},
			}
		);

		if (response.status === 200) {
			// handle success
			console.log(response);
			/// step 3: update data to state
			setItems(response.data);
		}
	};

	const postData = async (email, status) => {
		const response = await axios.post(
			'https://api.code4change.dev/newsletters',
			{
				email: email,
				status: status,
			}
		);

		if (response.status === 200) {
			// handle success
			alert('Create data successfully');
			// refetch data
			getData();
		}
	};

	const onDelete = async (id) => {
		const response = await axios.delete(
			'https://api.code4change.dev/newsletters/' + id
		);

		if (response.status === 200) {
			// handle success
			alert('Delete data successfully');
			// refetch data
			getData();
		}
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="App">
			<Form postData={postData} />
			<List items={items} setItems={setItems} />
		</div>
	);
}

export default App;
