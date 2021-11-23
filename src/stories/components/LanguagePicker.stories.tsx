import { ComponentStory, Meta } from '@storybook/react';
import LanguagePicker, {
	Language,
} from '../../features/app/components/LanguagePicker';

const languages: Language[] = [
	{ code: 'de', name: 'Deutsch' },
	{ code: 'en', name: 'Englisch' },
];

const Template: ComponentStory<typeof LanguagePicker> = (args) => (
	<LanguagePicker {...args} />
);

export const Default = Template.bind({});
Default.args = {
	value: 'de',
	languages,
};

export default {
	component: LanguagePicker,
	title: 'Components/LanguagePicker',
	argTypes: {
		value: {
			options: languages,
			control: { type: 'select' },
		},
	},
} as Meta;
