import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IAnimal, IFavoriteAnimal } from '../../models/models';
import { Box, Grid, Rating } from '@mui/material';
import {
	handleToggleFavoritesClick,
	updateFavoritesWithRating,
} from '../../utils/FavoriteUtils';

import CharacteristicItems from '../CharacteristicItems/CharacteristicItems';

type Props = {
	data: IFavoriteAnimal | IAnimal;
	isFavoriteList: boolean;
	onToggleAnimal?: (data: IFavoriteAnimal[] | IAnimal[]) => void;
};

const AnimalCard = ({
	data,
	isFavoriteList,
	onToggleAnimal,
}: Props): JSX.Element => {
	const [showAllInfo, setShowAllInfo] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);

	const formattedColors = isFavoriteList
		? (data as IFavoriteAnimal)?.characteristics?.color?.value
				?.split(/(?=[A-Z])/)
				.join(', ')
		: (data as IAnimal)?.characteristics?.color
				?.split(/(?=[A-Z])/)
				?.join(', ');

	const handleSeeMoreClick = () => {
		setShowAllInfo(!showAllInfo);
	};

	return (
		<Grid key={data.name} item xs={12} sm={6}>
			<Card className='h-full flex flex-col'>
				<CardContent className='text-left'>
					<Box className='flex justify-between'>
						<Typography
							variant='h5'
							component='div'
							className='pb-6'
						>
							{data.name}
						</Typography>
						{isFavoriteList && (
							<Rating
								name='simple-controlled'
								value={data.rating}
								onChange={(event, newValue) =>
									isFavoriteList &&
									updateFavoritesWithRating(
										data as IFavoriteAnimal,
										newValue,
									)
								}
							/>
						)}
					</Box>

					<Box className='flex'>
						<Typography className='pr-2' color='text.secondary'>
							locations:
						</Typography>
						<Typography component='span'>
							{data.locations.join(', ')}
						</Typography>
					</Box>
					<Box className='flex'>
						<Typography
							className='pr-2 ml-1'
							color='text.secondary'
						>
							color:
						</Typography>
						<Typography component='span'>
							{formattedColors}
						</Typography>
					</Box>
					{showAllInfo && (
						<CharacteristicItems
							animal={data}
							isFavorite={isFavoriteList}
							onToggleAnimal={onToggleAnimal}
						/>
					)}
				</CardContent>
				<CardActions className='float-right'>
					<Button size='small' onClick={handleSeeMoreClick}>
						{showAllInfo ? 'See less' : 'See more'}
					</Button>
					<Button
						size='small'
						color={
							data?.isFavorite || isFavorite
								? 'warning'
								: 'secondary'
						}
						onClick={() =>
							handleToggleFavoritesClick(
								data as IAnimal,
								setIsFavorite,
								onToggleAnimal,
							)
						}
					>
						{data?.isFavorite || isFavorite
							? 'Remove from favorites'
							: 'Add to favorites'}
					</Button>
				</CardActions>
			</Card>
		</Grid>
	);
};

export default AnimalCard;
