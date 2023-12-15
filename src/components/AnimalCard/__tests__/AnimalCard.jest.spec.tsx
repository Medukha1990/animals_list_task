import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import AnimalCard from '../AnimalCard';
import { animalFavoriteData } from '../../../testData/animalTestData';
import { JSX } from 'react/jsx-runtime';

const mockStore = configureStore();
let store;

let animalCardComponent: JSX.Element;

beforeEach(() => {
	store = mockStore();
	animalCardComponent = (
		<Provider store={store as any}>
			<BrowserRouter>
				<AnimalCard data={animalFavoriteData} isFavoriteList={true} />
			</BrowserRouter>
		</Provider>
	);
});

it('renders the component for favorites animals', () => {
	render(animalCardComponent);

	const toSearchPageButton = screen.getByText('See more');
	expect(toSearchPageButton).toBeInTheDocument();
});

it('renders the component without favorites animals', () => {
	render(animalCardComponent);

	const toSearchPageButton = screen.getByText('See more');
	expect(toSearchPageButton).toBeInTheDocument();
});

it('"See more" button is clicked', () => {
	render(animalCardComponent);

	const seeMoreButton = screen.getByText('See more');
	fireEvent.click(seeMoreButton);

	expect(screen.getByText('See less')).toBeInTheDocument();
});

it('"See less" button is clicked', () => {
	render(animalCardComponent);

	const seeMoreButton = screen.getByText('See more');
	fireEvent.click(seeMoreButton);

	const seeLessButton = screen.getByText('See less');
	fireEvent.click(seeLessButton);

	expect(screen.getByText('See more')).toBeInTheDocument();
});
