import { SWRResponse } from 'swr';
import { Todo } from '../../models/todo';
import type { TodoApi, TodoQuery } from '../todoApi';

const demoTodos: Todo[] = [
	{ id: '1', title: 'Buy a cyling helmet', completed: false },
	{ id: '2', title: 'Pay electric bill', completed: true },
	{ id: '3', title: 'Make a dentist appointment', completed: false },
];

export const todoApi: TodoApi = {
	useRequestTodo: function (_id: string): SWRResponse<Todo, Error> {
		return {
			data: demoTodos[0],
			error: undefined,
			isValidating: false,
			mutate: jest.fn(),
		};
	},
	useRequestManyTodos: function (
		_query?: TodoQuery
	): SWRResponse<Todo[], Error> {
		return {
			data: demoTodos,
			error: undefined,
			isValidating: false,
			mutate: jest.fn(),
		};
	},
	useCreateTodo: () => {
		return (_todo: Todo): Promise<Todo> => {
			throw Error('not implemented');
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
