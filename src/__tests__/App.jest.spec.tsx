import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
let store: ReturnType<typeof mockStore>;

const initialState = {};

store = mockStore(initialState);
it('renders home page', () => {
	render(
		<MemoryRouter initialEntries={['/']}>
			<Provider store={store as any}>
				<App />
			</Provider>
		</MemoryRouter>,
	);

	const toSearchPageButton = screen.getByText('To Search page');
	expect(toSearchPageButton).toBeInTheDocument();
});

it('renders search page', () => {
	render(
		<MemoryRouter initialEntries={['/search']}>
			<Provider store={store as any}>
				<App />
			</Provider>
		</MemoryRouter>,
	);

	const toSearchPageButton = screen.getByText('To Favorits');
	expect(toSearchPageButton).toBeInTheDocument();
});
