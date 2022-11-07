import { Redirect, RouteMiddleware } from 'react-typesafe-routes';
import { useRecoilValue } from 'recoil';
import currentUserState from '../currentUserState';
import router from '../../../Router';

const AuthMiddleware: RouteMiddleware = (next) => {
	const currentUser = useRecoilValue(currentUserState);

	if (currentUser) {
		return next;
	} else {
		return () => (
			<Redirect
				to={{
					$: router.login().$,
				}}
			/>
		);
	}
};

export default AuthMiddleware;
