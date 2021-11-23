import AppFrame from '../features/app/components/AppFrame';
import LoginViewContainer from '../features/authentication/components/LoginViewContainer';

const LoginPage: React.FC = () => {
	return (
		<AppFrame>
			<LoginViewContainer />
		</AppFrame>
	);
};

export default LoginPage;
