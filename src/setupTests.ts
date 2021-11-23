// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.test' });

jest.mock('react-i18next', () => ({
	useTranslation: () => {
		return {
			t: (str: string) => str,
		};
	},
}));
