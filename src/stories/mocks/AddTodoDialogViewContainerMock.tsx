import { action } from '@storybook/addon-actions';
import { mockComponent } from '../../features/app/components/MockUtil';
import AddTodoDialog from '../../features/todo/components/AddTodoDialog';
import AddTodoDialogViewContainer from '../../features/todo/components/AddTodoDialogViewContainer';

mockComponent(AddTodoDialogViewContainer, (props) => {
	return <AddTodoDialog onSave={action('onSave')} {...props} />;
});
