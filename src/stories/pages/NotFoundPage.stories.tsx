import { ComponentStory, Meta } from '@storybook/react';
import NotFoundPage from '../../pages/NotFoundPage';

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
	<NotFoundPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default {
	component: NotFoundPage,
	title: 'Pages/NotFoundPage',
} as Meta;
