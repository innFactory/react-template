import { RouteMiddleware } from 'react-typesafe-routes';
import { useRecoilValue } from 'recoil';
import currentUserState from '../currentUserState';
import router from '../../../Router';
import { Navigate, useLocation } from 'react-router-dom';

const AuthMiddleware: RouteMiddleware = (next) => {
	const currentUser = useRecoilValue(currentUserState);
	const location = useLocation();

	if (currentUser) {
		return next;
	} else {
		return () => (
			<Navigate
				to={router.login().$}
				state={{ refer: location.pathname }}
			/>
		);
	}
};

export default AuthMiddleware;
