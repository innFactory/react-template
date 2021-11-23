import { styled } from '@mui/material/styles';
import Fab from '@mui/material/Fab';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { themeState, ThemeMode } from './../themeState';
import AppBar from './AppBar';
import Drawer from './Drawer';
import { useRouteOptions } from 'react-typesafe-routes';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';
import router from '../../../Router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { DARK_MODE_ENABLED } from '../../../common/constants';

const Root = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.background.default,
	padding: theme.spacing(1),
	width: '100%',
	overflowY: 'auto',
}));

interface AppFrameProps {
	children: React.ReactNode;
}

const AppFrame: React.FC<AppFrameProps> = ({ children }) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [themeMode, setThemeMode] = useRecoilState(themeState);
	const { showAppBar, showDrawer } = useRouteOptions(router);

	const handleThemeChange = () =>
		setThemeMode(
			themeMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
		);

	return (
		<>
			{showAppBar && (
				<AppBar onToggleDrawer={() => setDrawerOpen(!drawerOpen)} />
			)}
			{showDrawer && (
				<Drawer
					open={drawerOpen}
					onClose={() => setDrawerOpen(false)}
				/>
			)}

			<Root>
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
					onError={(_error, _info) => {
						// Do something with the error
						// E.g. log to an error logging client here
					}}
				>
					{children}
				</ErrorBoundary>

				{DARK_MODE_ENABLED && (
					<Fab
						color="primary"
						onClick={handleThemeChange}
						style={{ position: 'fixed', right: 32, bottom: 32 }}
					>
						{themeMode === ThemeMode.LIGHT ? (
							<LightModeIcon />
						) : (
							<DarkModeIcon />
						)}
					</Fab>
				)}
			</Root>
		</>
	);
};

export default AppFrame;
