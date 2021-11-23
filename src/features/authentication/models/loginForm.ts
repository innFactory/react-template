import { ValidationMessages } from '../../../common/constants';
import * as Yup from 'yup';

export interface LoginFormValues {
	username: string;
	password: string;
}

export const loginFormInitialValues: LoginFormValues = {
	username: 'test',
	password: 'test',
};

export const loginFormValidationSchema = Yup.object().shape({
	username: Yup.string().required(ValidationMessages.REQUIRED),
	password: Yup.string().required(ValidationMessages.REQUIRED),
});
