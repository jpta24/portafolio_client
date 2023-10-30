import { useState } from 'react';

import axios from 'axios';

function TestPage() {
	const [test, setTest] = useState(null);

	const handleTestBackend = async () => {
		try {
			const response = await axios.get('http://localhost:5005/api/test');
			setTest(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<h1>TestPage</h1>
			<button
				onClick={handleTestBackend}
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
			>
				Test Backend Conection
			</button>
			<h3>{test}</h3>
		</div>
	);
}

export default TestPage;
