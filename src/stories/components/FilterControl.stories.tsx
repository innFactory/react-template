import { ComponentStory, Meta } from '@storybook/react';
import FilterControl from '../../features/todo/components/FilterControl';

const Template: ComponentStory<typeof FilterControl> = (args) => (
	<FilterControl {...args} />
);

export const Default = Template.bind({});
Default.args = {
	isFilterCompleted: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Default,
	disabled: true,
};

export default {
	component: FilterControl,
	title: 'Components/FilterControl',
} as Meta;
