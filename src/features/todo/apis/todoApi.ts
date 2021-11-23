import useSWR, { SWRResponse } from 'swr';
import { API_URL } from '../../../common/constants';
import { defaultFetcher } from '../../../common/fetcher';
import { Todo } from '../models/todo';

export interface TodoQuery {
	userId?: string;
	compledted?: boolean;
}

export interface TodoApi {
	useRequestTodo(id: string): SWRResponse<Todo, Error>;
	useRequestManyTodos(query?: TodoQuery): SWRResponse<Todo[], Error>;
	useCreateTodo(): void;
	useBulkCreateTodos(): void;
	useUpdateTodo(): void;
}

export const todoApi: TodoApi = {
	useRequestTodo: (id: string): SWRResponse<Todo, Error> => {
		return useSWR<Todo, Error>(`${API_URL}/todos/${id}`, defaultFetcher);
	},
	useRequestManyTodos: (query?: TodoQuery): SWRResponse<Todo[], Error> => {
		return useSWR<Todo[], Error>(
			`${API_URL}/todos?` + query?.userId ?? `userId=${query?.userId}`,
			defaultFetcher
		);
	},
	useCreateTodo: () => {
		return (_todo: Todo): void => {
			throw Error('not implemented');
		};
	},
	useBulkCreateTodos: () => {
		return (_todos: Todo[]): void => {
			throw Error('not implemented');
		};
	},
	useUpdateTodo: () => {
		return (_todo: Todo): void => {
			throw Error('not implemented');
		};
	},
};
