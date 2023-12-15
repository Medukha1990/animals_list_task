import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchPage from '../SearchPage';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

const renderSearchPage = () => {
	render(
		<Provider store={store}>
			<BrowserRouter>
				<SearchPage />
			</BrowserRouter>
		</Provider>,
	);
};

test('updates the animal name state correctly', () => {
	renderSearchPage();

	expect(screen.getByRole('textbox')).toHaveValue('');

	act(() => {
		userEvent.type(screen.getByRole('textbox'), 'New Animal');
	});

	expect(screen.getByRole('textbox')).toHaveValue('New Animal');
});

test('handleHomeClick navigates to the home page', () => {
	renderSearchPage();

	act(() => {
		userEvent.click(screen.getByRole('button', { name: /to favorits/i }));
	});
});
