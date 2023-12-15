import { useState } from 'react';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useLazySearchAnimalsQuery } from '../../store/animals/animals.api';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import { useNavigate } from 'react-router-dom';

import AlertInfo from '../../components/AlertInfo/AlertInfo';

const SearchPage = (): JSX.Element => {
	const navigate = useNavigate();
	const [animalName, setAnimalName] = useState<string>('');
	const [fetchAnimals, { isLoading, data }] = useLazySearchAnimalsQuery();

	const updateTextField = (newText: string) => {
		setAnimalName(newText);
	};

	const handleSearchClick = () => {
		if (animalName.trim() !== '') {
			fetchAnimals(animalName);
		}
	};

	const handleHomeClick = () => {
		navigate('/');
	};

	return (
		<Box className='w-full flex flex-col '>
			<Box className='flex flex-col items-start'>
				<Box className='mb-4'>
					<Button
						variant='contained'
						onClick={handleHomeClick}
						color='success'
					>
						To Favorits
					</Button>
				</Box>
				<SearchBar
					onTextFieldChange={updateTextField}
					onSearchBtnClick={handleSearchClick}
					placeholder='Search for Animal name'
				/>
			</Box>

			{isLoading ? (
				<Box className='flex flex-col items-center justify-center h-screen'>
					<CircularProgress
						data-testid='loading-indicator'
						color='success'
					/>
				</Box>
			) : data?.length ? (
				<Box className='flex flex-wrap'>
					<Grid container spacing={2}>
						{data?.map((item, index) => (
							<AnimalCard
								key={index}
								data={item}
								isFavoriteList={false}
							/>
						))}
					</Grid>
				</Box>
			) : (
				data !== undefined && (
					<AlertInfo
						text='No animals were found with this name, please enter a correct animal name'
						typeMessage='error'
					/>
				)
			)}
		</Box>
	);
};

export default SearchPage;
