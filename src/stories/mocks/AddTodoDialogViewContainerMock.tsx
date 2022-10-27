import { action } from '@storybook/addon-actions';
import { mockComponent } from '../../features/app/components/MockUtil';
import AddTodoDialog from '../../features/todo/components/AddTodoDialog';
import AddTodoDialogViewContainer, {
	AddTodoDialogViewContainerProps,
} from '../../features/todo/components/AddTodoDialogViewContainer';

mockComponent(
	AddTodoDialogViewContainer,
	(props: AddTodoDialogViewContainerProps) => {
		return <AddTodoDialog {...props} onSave={action('onSave')} />;
	}
);
