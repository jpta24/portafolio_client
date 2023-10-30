import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

import TestPage from './Pages/TestPage/TestPage';
import HeroPage from './Pages/HeroPage/HeroPage';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<Routes>
					<Route path='/' element={<HeroPage />} />
					<Route path='/test' element={<TestPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
