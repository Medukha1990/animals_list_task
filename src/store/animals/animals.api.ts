import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnimal } from '../../models/models';

const API_KEY = 'Jo6MieLpUf3u2jbMFnDVTA==LY4v2G1kvGHQ2RYH';

export const animalsApi = createApi({
	reducerPath: 'animals/api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.api-ninjas.com/',
	}),
	endpoints: (build) => ({
		searchAnimals: build.query<IAnimal[], string>({
			query: (name: string) => ({
				url: `v1/animals?name=${name}`,
				headers: {
					'X-Api-Key': API_KEY,
				},
				params: {
					q: name,
					per_page: 10,
				},
			}),
		}),
	}),
});

export const { useLazySearchAnimalsQuery } = animalsApi;
