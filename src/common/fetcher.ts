export const defaultFetcher = <T>(
	...args: Parameters<typeof fetch>
): Promise<T> => fetch(...args).then((response) => response.json());
