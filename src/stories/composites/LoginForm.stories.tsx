import { action } from '@storybook/addon-actions';
import { ComponentStory, Meta } from '@storybook/react';
import { Formik } from 'formik';
import {
	loginFormValidationSchema,
	LoginFormValues,
} from '../../features/authentication/models/loginForm';
import LoginForm from '../../features/authentication/components/LoginForm';

const initialValues: LoginFormValues = {
	username: '',
	password: '',
};

const Template: ComponentStory<typeof LoginForm> = (args) => (
	<Formik<LoginFormValues>
		initialValues={initialValues}
		validationSchema={loginFormValidationSchema}
		onSubmit={action('onSubmit')}
	>
		{(formikProps) => <LoginForm {...formikProps} {...args} />}
	</Formik>
);

export const Default = Template.bind({});
Default.args = {};

export const Submitting = Template.bind({});
Submitting.args = { isSubmitting: true };

export default {
	component: LoginForm,
	title: 'Composites/LoginForm',
} as Meta;
