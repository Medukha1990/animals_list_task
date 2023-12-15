import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';

const App = (): JSX.Element => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/search' element={<SearchPage />} />
		</Routes>
	);
};

export default App;
