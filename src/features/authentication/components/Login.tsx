import { useState } from 'react';
import { Formik, FormikHelpers } from 'formik';
import { Stack, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import {
	LoginFormValues,
	loginFormInitialValues,
	loginFormValidationSchema,
} from '../models/loginForm';
import LoginForm from './LoginForm';
import { useTranslation } from 'react-i18next';

interface LoginProps {
	onSignIn: (username: string, password: string) => boolean;
}

const Login: React.FC<LoginProps> = ({ onSignIn }) => {
	const [error, setError] = useState<string>();
	const { t } = useTranslation();

	const handleSubmit = (
		values: LoginFormValues,
		formikHelpers: FormikHelpers<LoginFormValues>
	) => {
		if (!onSignIn(values.username, values.password)) {
			setError('Login nicht erfolgreich.');
			formikHelpers.setSubmitting(false);
		}
	};

	return (
		<Stack>
			<Typography variant="h2">{t('login.title')}</Typography>

			<Formik<LoginFormValues>
				initialValues={loginFormInitialValues}
				validationSchema={loginFormValidationSchema}
				onSubmit={handleSubmit}
			>
				{(formikProps) => <LoginForm {...formikProps} />}
			</Formik>

			{error && (
				<Alert severity="error">
					<AlertTitle>Fehler</AlertTitle>
					{error}
				</Alert>
			)}
		</Stack>
	);
};

export default Login;
