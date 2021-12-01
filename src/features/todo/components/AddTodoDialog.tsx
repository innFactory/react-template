import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from '@mui/material';
import { Formik, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';
import {
	addTodoFormInitialValues,
	addTodoFormValidationSchema,
	AddTodoFormValues,
} from '../models/addTodoForm';
import { Todo } from '../models/todo';
import AddTodoForm from './AddTodoForm';

export interface AddTodoDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onSave: (todo: Todo) => void;
}

const AddTodoDialog: React.FC<AddTodoDialogProps> = ({
	isOpen,
	onClose,
	onSave,
}) => {
	const { t } = useTranslation();

	const handleSubmit = (
		values: AddTodoFormValues,
		formikHelpers: FormikHelpers<AddTodoFormValues>
	) => {
		const todo: Todo = { completed: false, ...values };
		onSave(todo);

		formikHelpers.setSubmitting(false);
	};

	return (
		<Dialog open={isOpen} onClose={onClose}>
			<DialogTitle>{t('todo.addTodoDialog.title')}</DialogTitle>

			<Formik<AddTodoFormValues>
				initialValues={addTodoFormInitialValues}
				validationSchema={addTodoFormValidationSchema}
				onSubmit={handleSubmit}
			>
				{(formikProps) => (
					<>
						<DialogContent>
							<AddTodoForm {...formikProps} />
						</DialogContent>

						<DialogActions>
							<Button onClick={onClose}>
								{t('todo.addTodoDialog.cancel')}
							</Button>
							<Button onClick={() => formikProps.submitForm()}>
								{t('todo.addTodoDialog.save')}
							</Button>
						</DialogActions>
					</>
				)}
			</Formik>
		</Dialog>
	);
};

export default AddTodoDialog;
