import { ComponentStory, Meta } from '@storybook/react';
import LoginPage from '../../pages/LoginPage';

const Template: ComponentStory<typeof LoginPage> = (args) => (
	<LoginPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default {
	component: LoginPage,
	title: 'Pages/LoginPage',
} as Meta;
