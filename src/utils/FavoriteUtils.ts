import {
	FavoriteCharacteristics,
	IAnimal,
	IFavoriteAnimal,
} from '../models/models';

export const updateFavoritesWithRating = (
	data: IFavoriteAnimal,
	newRating: number | null,
) => {
	const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

	const updatedFavorites = favorites.map((favorite: { name: string }) =>
		favorite.name === data.name
			? { ...favorite, rating: newRating }
			: favorite,
	);

	localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
};

export const handleToggleFavoritesClick = (
	data: IAnimal,
	setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>,
	onToggleAnimal?: (data: IFavoriteAnimal[] | IAnimal[]) => void,
) => {
	const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

	const isAlreadyAdded = favorites.some(
		(favorite: { name: string }) => favorite.name === data.name,
	);

	const updatedFavorites = isAlreadyAdded
		? favorites.filter(
				(favorite: { name: string }) => favorite.name !== data.name,
		  )
		: [...favorites, { ...data, isFavorite: true }];

	localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

	onToggleAnimal && onToggleAnimal(updatedFavorites);
	setIsFavorite(!isAlreadyAdded);
};

const saveAnimalToLocalStorage = (
	animal: IFavoriteAnimal,
	onToggleAnimal?: (data: IFavoriteAnimal[] | IAnimal[]) => void,
) => {
	const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

	const updatedFavorites = favorites.map((a: { name: string }) =>
		a.name === animal.name ? animal : a,
	);
	localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
	onToggleAnimal && onToggleAnimal(updatedFavorites);
};

export const handleLikeDislikeClick = (
	animal: IFavoriteAnimal,
	key: string,
	{ isLike }: { isLike: boolean },
	onToggleAnimal?: (data: IFavoriteAnimal[] | IAnimal[]) => void,
) => {
	const characteristic = animal.characteristics[key];

	const isCharacteristicItem =
		typeof characteristic === 'object' && 'value' in characteristic;

	isCharacteristicItem
		? ((
				characteristic as FavoriteCharacteristics[keyof FavoriteCharacteristics]
		  ).liked = isLike)
		: (animal.characteristics[key] = {
				value: (characteristic as string) || '',
				liked: isLike,
		  });

	saveAnimalToLocalStorage(animal, onToggleAnimal);
};
