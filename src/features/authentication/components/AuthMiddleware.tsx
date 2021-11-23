import { RouteMiddleware } from 'react-typesafe-routes';
import { useLocation, Redirect } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import currentUserState from '../currentUserState';
import router from '../../../Router';

const AuthMiddleware: RouteMiddleware = (next) => {
	const currentUser = useRecoilValue(currentUserState);
	const location = useLocation();

	if (currentUser) {
		return next;
	} else {
		return () => (
			<Redirect
				to={{
					pathname: router.login().$,
					state: { refer: location.pathname },
				}}
			/>
		);
	}
};

export default AuthMiddleware;
