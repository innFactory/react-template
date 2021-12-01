import { action } from '@storybook/addon-actions';
import { ComponentStory, Meta } from '@storybook/react';
import { Formik } from 'formik';
import AddTodoForm from '../../features/todo/components/AddTodoForm';
import {
	addTodoFormInitialValues,
	addTodoFormValidationSchema,
	AddTodoFormValues,
} from '../../features/todo/models/addTodoForm';

const Template: ComponentStory<typeof AddTodoForm> = (args) => (
	<Formik<AddTodoFormValues>
		initialValues={addTodoFormInitialValues}
		validationSchema={addTodoFormValidationSchema}
		onSubmit={action('onSubmit')}
	>
		{(formikProps) => <AddTodoForm {...formikProps} {...args} />}
	</Formik>
);

export const Default = Template.bind({});
Default.args = {};

export default {
	component: AddTodoForm,
	title: 'Composites/AddTodoForm',
} as Meta;
