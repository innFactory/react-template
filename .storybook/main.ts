const path = require('path');
const toPath = (filePath) => path.join(process.cwd(), filePath);

module.exports = {
	stories: [
		'../src/stories/**/*.stories.mdx',
		'../src/stories/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@react-theming/storybook-addon',
		'@storybook/preset-create-react-app',
	],

	webpackFinal: async (config) => {
		return {
			...config,
			resolve: {
				...config.resolve,
				alias: {
					...config.resolve.alias,

					// alias mocks
					'../features/app/components/AppFrame': toPath(
						'src/stories/mocks/AppFrameMock.tsx'
					),
					'./../features/app/components/AppFrame': toPath(
						'src/stories/mocks/AppFrameMock.tsx'
					),

					// workaround for material ui v5: https://github.com/react-theming/storybook-addon/issues/30
					'@emotion/core': toPath('node_modules/@emotion/react'),
					'emotion-theming': toPath('node_modules/@emotion/react'),
				},
			},
		};
	},
};
