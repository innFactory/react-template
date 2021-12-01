import { withApplyMockInStorybook } from '../../app/components/MockUtil';
import AddTodoDialog, { AddTodoDialogProps } from './AddTodoDialog';
import { Todo } from '../models/todo';
import { todoApi } from './../apis/todoApi';
import { useSnackbar } from 'notistack';
import { useErrorHandler } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

type AddTodoDialogViewContainerProps = Omit<AddTodoDialogProps, 'onSave'>;

const AddTodoDialogViewContainer: React.FC<AddTodoDialogViewContainerProps> = (
	props
) => {
	const { onClose } = props;
	const createTodo = todoApi.useCreateTodo();
	const { enqueueSnackbar } = useSnackbar();
	const handleError = useErrorHandler();
	const { t } = useTranslation();

	const handleSave = (todo: Todo) => {
		try {
			createTodo(todo);
			onClose();

			enqueueSnackbar(t('todo.addTodoDialog.successMessage'), {
				variant: 'success',
			});
		} catch (error) {
			if (error instanceof Error) {
				enqueueSnackbar(error.message, { variant: 'error' });
			} else {
				handleError(error);
			}
		}
	};

	return <AddTodoDialog onSave={handleSave} {...props} />;
};

export default withApplyMockInStorybook(AddTodoDialogViewContainer);
