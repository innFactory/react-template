import { ComponentStory, Meta } from '@storybook/react';
import Login from '../../features/authentication/components/Login';

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {};

export default {
	component: Login,
	title: 'Composites/Login',
} as Meta;
