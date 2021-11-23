import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CircularProgress, CssBaseline } from '@mui/material';
import { RouterSwitch } from 'react-typesafe-routes';
import { useTheme } from './theme';
import router from './Router';

const Root: React.FC = () => {
	const theme = useTheme();

	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<React.Suspense fallback={<CircularProgress />}>
					<RouterSwitch router={router} />
				</React.Suspense>
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default Root;
