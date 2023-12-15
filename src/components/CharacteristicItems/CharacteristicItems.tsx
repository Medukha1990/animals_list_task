import { Box, Typography } from '@mui/material';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { handleLikeDislikeClick } from '../../utils/FavoriteUtils';
import {
	IAnimal,
	IFavoriteAnimal,
	FavoriteCharacteristics,
} from '../../models/models';

type Props = {
	animal: IAnimal | IFavoriteAnimal;
	isFavorite: boolean;
	onToggleAnimal?: (data: IFavoriteAnimal[] | IAnimal[]) => void;
};

const CharacteristicItems = ({
	animal,
	isFavorite,
	onToggleAnimal,
}: Props): JSX.Element => {
	return (
		<>
			{Object.entries(animal.characteristics).map(([key, value]) => {
				const characteristicItem =
					(value as FavoriteCharacteristics[keyof FavoriteCharacteristics]) ||
					null;

				return (
					<Box className='flex justify-between' key={key}>
						<Box className='flex'>
							<Typography
								className='pr-2 ml-1'
								color='text.secondary'
							>
								{key.replace(/_/g, ' ')}:
							</Typography>
							<Typography component='span'>
								{typeof value === 'object' && value !== null
									? characteristicItem?.value
									: value}
							</Typography>
						</Box>
						<Box>
							{isFavorite && (
								<Box className='flex'>
									<Box
										className='cursor-pointer'
										onClick={() =>
											handleLikeDislikeClick(
												animal as IFavoriteAnimal,
												key,
												{
													isLike: !characteristicItem?.liked,
												},
												onToggleAnimal,
											)
										}
									>
										{characteristicItem?.liked ? (
											<ThumbUpAltIcon fontSize='small' />
										) : (
											<ThumbUpOffAltIcon fontSize='small' />
										)}
									</Box>
								</Box>
							)}
						</Box>
					</Box>
				);
			})}
		</>
	);
};

export default CharacteristicItems;
