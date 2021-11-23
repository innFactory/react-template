const TEST_USER = 'test';
const TEST_PASSWORD = 'test';

export interface AuthServiceDefinition {
	signIn: (username: string, password: string) => boolean;
}

export const authService: AuthServiceDefinition = {
	signIn: (username: string, password: string): boolean => {
		return username === TEST_USER && password === TEST_PASSWORD;
	},
};
