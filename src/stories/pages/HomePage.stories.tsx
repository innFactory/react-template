import { ComponentStory, Meta } from '@storybook/react';
import LoginPage from '../../pages/LoginPage';
import HomePage from '../../pages/HomePage';

const Template: ComponentStory<typeof LoginPage> = (args) => (
	<HomePage {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default {
	component: HomePage,
	title: 'Pages/HomePage',
} as Meta;
