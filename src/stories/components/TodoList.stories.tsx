import { ComponentStory, Meta } from '@storybook/react';
import TodoList from '../../features/todo/components/TodoList';
import { demoTodos } from '../../features/todo/models/todo';

const Template: ComponentStory<typeof TodoList> = (args) => (
	<TodoList {...args} />
);

export const Loading = Template.bind({});
Loading.args = {
	todos: [],
	isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
	todos: [],
	isLoading: false,
	error: 'An error occured',
};

export const Loaded = Template.bind({});
Loaded.args = {
	todos: demoTodos,
	isLoading: false,
};

export default {
	component: TodoList,
	title: 'Components/TodoList',
} as Meta;
