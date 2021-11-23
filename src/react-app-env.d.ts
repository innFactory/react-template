/// <reference types="react-scripts" />

import { Theme as MuiTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Theme extends MuiTheme {
		name: string;
	}
}
