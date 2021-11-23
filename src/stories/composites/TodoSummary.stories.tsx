import { ComponentStory, Meta } from '@storybook/react';
import TodoSummary from '../../features/todo/components/TodoSummary';

const Template: ComponentStory<typeof TodoSummary> = (args) => (
	<TodoSummary {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const DisabledFilter = Template.bind({});
DisabledFilter.args = {
	disableFilter: true,
};

export default {
	component: TodoSummary,
	title: 'Composites/TodoSummary',
} as Meta;
