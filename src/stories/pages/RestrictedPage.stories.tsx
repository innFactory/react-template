import { ComponentStory, Meta } from '@storybook/react';
import RestrictedPage from '../../pages/RestrictedPage';

const Template: ComponentStory<typeof RestrictedPage> = (args) => (
	<RestrictedPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default {
	component: RestrictedPage,
	title: 'Pages/RestrictedPage',
} as Meta;
