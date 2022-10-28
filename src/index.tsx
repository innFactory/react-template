import React from 'react';
import { RecoilRoot } from 'recoil';
import { reportWebVitals } from './reportWebVitals';
import isoCountries from 'i18n-iso-countries';
import isoDeLocale from 'i18n-iso-countries/langs/de.json';
import Root from './Root';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/comfortaa/300.css';
import '@fontsource/comfortaa/400.css';
import '@fontsource/comfortaa/500.css';
import '@fontsource/comfortaa/700.css';
import './common/i18n';
import { createRoot } from 'react-dom/client';

isoCountries.registerLocale(isoDeLocale);
const container = document.getElementById('root');
// eslint-disable-next-line
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
	<React.StrictMode>
		<RecoilRoot>
			<Root />
		</RecoilRoot>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
