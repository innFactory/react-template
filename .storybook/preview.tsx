import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { withThemes } from '@react-theming/storybook-addon';
import { MemoryRouter } from 'react-router-dom';
import { addDecorator } from '@storybook/react';
import { listOfThemes } from '../src/theme';
import isoCountries from 'i18n-iso-countries';
import isoDeLocale from 'i18n-iso-countries/langs/de.json';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/comfortaa/300.css';
import '@fontsource/comfortaa/400.css';
import '@fontsource/comfortaa/500.css';
import '@fontsource/comfortaa/700.css';
import '../src/common/i18n';
import '../src/stories/mocks/index';

isoCountries.registerLocale(isoDeLocale);

const providerFn = ({ theme, children }) => {
	// workaround for material ui v5: https://github.com/react-theming/storybook-addon/issues/30
	const serialTheme = JSON.parse(JSON.stringify(theme));
	const muiTheme = createTheme(serialTheme);

	return (
		<ThemeProvider theme={muiTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
};

export const onThemeSwitch = (context) => {
	const background = context.theme.name === 'Dark theme' ? 'light' : 'dark';
	const parameters = {
		backgrounds: {
			default: background,
		},
	};
	return {
		parameters,
	};
};

const themingDecorator = withThemes(null, listOfThemes, {
	providerFn,
	onThemeSwitch,
});

const suspenseDecorator = (Story) => (
	<React.Suspense fallback={null}>
		<Story />
	</React.Suspense>
);

const routerDecorator = (Story) => (
	<MemoryRouter>
		<Story />
	</MemoryRouter>
);

addDecorator(themingDecorator);
addDecorator(suspenseDecorator);
addDecorator(routerDecorator);

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	docs: {
		inlineStories: true,
	},
};
