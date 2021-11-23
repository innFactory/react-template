import { atom } from 'recoil';
import { User } from './models/user';

const currentUserState = atom<User | undefined>({
	key: 'currentUserState',
	default: undefined,
});

export default currentUserState;
