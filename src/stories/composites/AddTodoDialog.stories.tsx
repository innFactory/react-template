import { ComponentStory, Meta } from '@storybook/react';
import AddTodoDialog from '../../features/todo/components/AddTodoDialog';

const Template: ComponentStory<typeof AddTodoDialog> = (args) => (
	<AddTodoDialog {...args} />
);

export const Open = Template.bind({});
Open.args = {
	isOpen: true,
};

export const Closed = Template.bind({});
Closed.args = {
	isOpen: false,
};

export default {
	component: AddTodoDialog,
	title: 'Composites/AddTodoDialog',
} as Meta;
