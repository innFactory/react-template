import { ComponentStory, Meta } from '@storybook/react';
import FavoritesPage from '../../pages/FavoritesPage';

const Template: ComponentStory<typeof FavoritesPage> = (args) => (
	<FavoritesPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export default {
	component: FavoritesPage,
	title: 'Pages/FavoritesPage',
} as Meta;
