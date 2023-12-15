import { store } from '../store';
import { animalsApi } from '../animals/animals.api';

describe('Redux Store Configuration', () => {
	it('should be configured with the animalsApi reducer', () => {
		const currentState = store.getState();

		expect(currentState[animalsApi.reducerPath]).toBeDefined();
	});
});
