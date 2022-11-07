import { Navigate, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { withApplyMockInStorybook } from '../../app/components/MockUtil';
import { authService } from '../services/authService';
import currentUserState from '../currentUserState';
import router from '../../../Router';
import Login from './Login';

const useRefer = () => {
	const location = useLocation();

	if (!location.state?.refer) {
		return { $: router.home() };
	}

	return { $: location.state.refer };
};

const LoginViewContainer: React.FC = () => {
	const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
	const refer = useRefer();

	const handleSignIn = (username: string, password: string): boolean => {
		if (authService.signIn(username, password)) {
			setCurrentUser({
				id: '1',
				name: username,
			});
			return true;
		}

		return false;
	};

	if (currentUser) {
		return <Navigate to={refer.$} />;
	}

	return <Login onSignIn={handleSignIn} />;
};

export default withApplyMockInStorybook(LoginViewContainer);
