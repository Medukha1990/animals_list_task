import {
	handleLikeDislikeClick,
	updateFavoritesWithRating,
} from '../../utils/FavoriteUtils';
import { act } from 'react-dom/test-utils';
import { animalFavoriteData } from '../../testData/animalTestData';

const localStorageMock = (() => {
	let store: Record<string, string> = {};

	return {
		getItem: (key: string) => store[key] || null,
		setItem: (key: string, value: string) => {
			store[key] = value.toString();
		},
		clear: () => {
			store = {};
		},
	};
})();

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn(),
}));

describe('FavoriteUtils', () => {
	afterEach(() => {
		jest.clearAllMocks();
		localStorageMock.clear();
	});

	it('updates rating in localStorage', () => {
		const initialFavorites = [
			{ name: 'Lion', rating: 4 },
			{ name: 'Tiger', rating: 3 },
		];
		localStorageMock.setItem('favorites', JSON.stringify(initialFavorites));

		const newRating = 5.0;
		act(() => {
			updateFavoritesWithRating(animalFavoriteData, newRating);
		});

		const updatedFavorites = JSON.parse(
			localStorageMock.getItem('favorites') || '[]',
		);
		expect(updatedFavorites).toEqual([
			{ name: 'Lion', rating: 5 },
			{ name: 'Tiger', rating: 3 },
		]);
	});

	it('should update liked property in characteristics', () => {
		const key = 'prey';
		const isLike = true;

		handleLikeDislikeClick(animalFavoriteData, key, { isLike });

		expect(animalFavoriteData.characteristics[key].liked).toBe(true);
	});

	it('should add new characteristic if it does not exist', () => {
		const key = 'prey';
		const isLike = false;

		handleLikeDislikeClick(animalFavoriteData, key, { isLike });

		expect(animalFavoriteData.characteristics[key].liked).toBe(false);
	});
});
