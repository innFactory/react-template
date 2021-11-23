import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { FallbackProps } from 'react-error-boundary';

const serializeError = (error: unknown) => {
	if (error instanceof Error) {
		return error.message;
	}

	return JSON.stringify(error);
};

const ErrorFallback: React.FC<FallbackProps> = ({
	error,
	resetErrorBoundary,
}) => {
	const message = serializeError(error);

	return (
		<Container>
			<Stack spacing={2} p={4} alignItems="center">
				<Typography variant="h4">
					Es ist ein technischer Fehler aufgetreten. Bitte treten Sie
					mit uns in Kontakt um das Problem zu beheben.
				</Typography>

				<TextField
					label="Beschreibung"
					multiline
					rows={12}
					value={message}
					fullWidth
					disabled
				/>

				<Button onClick={resetErrorBoundary}>Zurück</Button>
			</Stack>
		</Container>
	);
};

export default ErrorFallback;
