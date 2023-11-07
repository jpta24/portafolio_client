import { useState } from 'react';

import { API } from "../../config/constant";

// import axios from 'axios';

function TestPage() {
	const [test, setTest] = useState<String>("");

	// const var_env:String = process.env.REACT_APP_SERVER_URL || "not defined"

	const handleTestBackend = async () => {
        setTest(API)
		// try {
		// 	const response = await axios.get(`${process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api'}/test`);
		// 	setTest(response.data);
		// } catch (error) {
		// 	console.log(error);
		// }
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
