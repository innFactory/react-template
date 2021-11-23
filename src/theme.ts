import createTheme, { ThemeOptions } from '@mui/material/styles/createTheme';
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { responsiveFontSizes, Theme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { themeState, ThemeMode } from './features/app/themeState';

const paletteLight: PaletteOptions = {
	mode: 'light',
};

const optionsLight: ThemeOptions = {
	palette: paletteLight,
};

const paletteDark: PaletteOptions = {
	mode: 'dark',
};

const optionsDark: ThemeOptions = {
	palette: paletteDark,
};

const lightTheme = responsiveFontSizes(createTheme(optionsLight));
lightTheme.name = 'Light theme';

const darkTheme = responsiveFontSizes(createTheme(optionsDark));
darkTheme.name = 'Dark theme';

export const listOfThemes: Theme[] = [lightTheme, darkTheme];

const getTheme = (mode: ThemeMode): Theme =>
	mode === ThemeMode.LIGHT ? lightTheme : darkTheme;

export const useTheme = (): Theme => {
	const themeMode = useRecoilValue(themeState);
	const [theme, setTheme] = useState(getTheme(themeMode));

	useEffect(() => {
		setTheme(getTheme(themeMode));
	}, [themeMode]);

	return theme;
};
