import { configureStore } from '@reduxjs/toolkit';
import { animalsApi } from './animals/animals.api';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[animalsApi.reducerPath]: animalsApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(animalsApi.middleware),
});

setupListeners(store.dispatch);
