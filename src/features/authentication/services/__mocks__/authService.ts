import type { AuthServiceDefinition } from '../authService';

export const authService: AuthServiceDefinition = {
	signIn: function (_username: string, _password: string): boolean {
		return true;
	},
};
