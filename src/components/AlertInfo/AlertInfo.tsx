import { Alert, Box, Typography } from '@mui/material';

type Props = {
	text: string;
	typeMessage: 'success' | 'info' | 'warning' | 'error';
};
const AlertInfo = ({ text, typeMessage }: Props) => {
	return (
		<Box className='w-full h-full flex flex-col items-center'>
			<Alert severity={typeMessage} className='w-full'>
				<Typography
					variant='subtitle1'
					component='div'
					className='flex items-center'
				>
					<span>{text}</span>
				</Typography>
			</Alert>
		</Box>
	);
};

export default AlertInfo;
