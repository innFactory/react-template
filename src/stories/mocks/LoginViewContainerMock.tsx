import { action } from '@storybook/addon-actions';
import { mockComponent } from '../../features/app/components/MockUtil';
import LoginViewContainer from '../../features/authentication/components/LoginViewContainer';
import Login from '../../features/authentication/components/Login';

mockComponent(LoginViewContainer, (_props) => {
	const handleSignIn = (username: string, password: string) => {
		action('onSignIn')({ username, password });

		return false;
	};

	return <Login onSignIn={handleSignIn} />;
});
