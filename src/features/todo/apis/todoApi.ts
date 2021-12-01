import useSWR, { SWRResponse, useSWRConfig } from 'swr';
import { API_URL } from '../../../common/constants';
import { defaultFetcher } from '../../../common/fetcher';
import { Todo } from '../models/todo';

export interface TodoQuery {
	userId?: string;
	compledted?: boolean;
}

type CreateTodoHook = (todo: Todo) => Promise<Todo>;
type BulkCreateTodoHook = (todos: Todo[]) => Promise<Todo[]>;
type UpdateTodoHook = (todo: Todo) => Promise<Todo>;

export interface TodoApi {
	useRequestTodo(id: string): SWRResponse<Todo, Error>;
	useRequestManyTodos(query?: TodoQuery): SWRResponse<Todo[], Error>;
	useCreateTodo: () => CreateTodoHook;
	useBulkCreateTodos: () => BulkCreateTodoHook;
	useUpdateTodo: () => UpdateTodoHook;
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
		const { mutate } = useSWRConfig();

		return async (todo: Todo): Promise<Todo> => {
			const response = await fetch(`${API_URL}/todos`, {
				method: 'POST',
				body: JSON.stringify(todo),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});

			mutate(`${API_URL}/todos`);

			return response.json();
		};
	},
	useBulkCreateTodos: () => {
		return (_todos: Todo[]): Promise<Todo[]> => {
			throw Error('not implemented');
		};
	},
	useUpdateTodo: () => {
		return (_todo: Todo): Promise<Todo> => {
			throw Error('not implemented');
		};
	},
};
