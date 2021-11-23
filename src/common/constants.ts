export const DARK_MODE_ENABLED =
	process.env['REACT_APP_DARK_MODE_ENABLED'] === 'true';

export const API_URL = process.env['REACT_APP_API_URL'];

export enum ValidationMessages {
	REQUIRED = 'Dieses Feld ist ein Pflichtfeld',
	NOT_A_EMAIL = 'Bitte geben Sie eine gültige E-Mail-Adresse an',
	NOT_A_NUMBER = 'Bitte geben Sie eine Zahl ein',
	NOT_A_URL = 'Bitte geben Sie eine gültige URL an',
}
