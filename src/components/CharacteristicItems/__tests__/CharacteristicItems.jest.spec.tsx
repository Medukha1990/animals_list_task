import { render } from '@testing-library/react';
import CharacteristicItems from '../CharacteristicItems';
import { BrowserRouter } from 'react-router-dom';
import { animalFavoriteData } from '../../../testData/animalTestData';

test('renders CharacteristicItems component', () => {
	render(
		<BrowserRouter>
			<CharacteristicItems
				animal={animalFavoriteData}
				isFavorite={true}
			/>
		</BrowserRouter>,
	);
});
