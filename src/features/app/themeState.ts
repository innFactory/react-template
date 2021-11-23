import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { DARK_MODE_ENABLED } from '../../common/constants';

export enum ThemeMode {
	LIGHT,
	DARK,
}

const { persistAtom } = recoilPersist({
	key: 'theme',
});

export const themeState = atom<ThemeMode>({
	key: 'themeState',
	default: DARK_MODE_ENABLED
		? window.matchMedia('(prefers-color-scheme: dark)')
			? ThemeMode.DARK
			: ThemeMode.LIGHT
		: ThemeMode.LIGHT,
	effects_UNSTABLE: [persistAtom],
});
