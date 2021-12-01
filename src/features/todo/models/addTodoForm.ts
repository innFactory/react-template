import { ValidationMessages } from '../../../common/constants';
import * as Yup from 'yup';

export interface AddTodoFormValues {
	title: string;
}

export const addTodoFormInitialValues: AddTodoFormValues = {
	title: '',
};

export const addTodoFormValidationSchema = Yup.object().shape({
	title: Yup.string().required(ValidationMessages.REQUIRED),
});
