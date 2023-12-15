import { Box, Button, Grid, Typography } from '@mui/material';
import AnimalCard from '../../components/AnimalCard/AnimalCard';
import { useEffect, useState } from 'react';
import { IAnimal, IFavoriteAnimal } from '../../models/models';
import { useNavigate } from 'react-router-dom';
import AlertInfo from '../../components/AlertInfo/AlertInfo';

const HomePage = (): JSX.Element => {
	const navigate = useNavigate();
	const [data, setData] = useState<IAnimal[] | IFavoriteAnimal[]>([]);

	const handleSearchClick = () => {
		navigate('/search');
	};

	useEffect(() => {
		const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
		setData(favorites);
	}, []);

	return (
		<>
			{!data.length ? (
				<AlertInfo
					text='No favorite animals. Please go to the Search
				page and add your favorite animals'
					typeMessage='info'
				/>
			) : (
				<Box className='flex flex-wrap'>
					<Typography variant='h4' className='pb-6'>
						My favorites animals:
					</Typography>
					<Grid container spacing={2}>
						{data?.map((item, index) => (
							<AnimalCard
								key={index}
								data={item}
								onToggleAnimal={setData}
								isFavoriteList={true}
							/>
						))}
					</Grid>
				</Box>
			)}
			<Box className='mt-4'>
				<Button
					variant='contained'
					onClick={handleSearchClick}
					color='success'
				>
					To Search page
				</Button>
			</Box>
		</>
	);
};

export default HomePage;
