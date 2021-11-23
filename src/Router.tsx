import { OptionsRouter } from 'react-typesafe-routes';
import AuthMiddleware from './features/authentication/components/AuthMiddleware';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import LoginPage from './pages/LoginPage';
import RestrictedPage from './pages/RestrictedPage';
import NotFoundPage from './pages/NotFoundPage';

const routeOptions = {
	showAppBar: true,
	showDrawer: true,
};

const router = OptionsRouter(routeOptions, (route) => ({
	home: route('/', {
		component: HomePage,
	}),
	favorites: route('favorites', {
		component: FavoritesPage,
	}),
	restricted: route('restricted', {
		component: RestrictedPage,
		middleware: AuthMiddleware,
	}),
	login: route('login', {
		component: LoginPage,
		options: {
			showAppBar: false,
			showDrawer: false,
		},
	}),
	fallback: route('*', {
		component: NotFoundPage,
		options: {
			showAppBar: false,
			showDrawer: false,
		},
	}),
}));

export default router;
