import { Todo } from '../models/todo';

export interface FilterTodoService {
	filterFirst(todos: Todo[], count: number): Todo[];
	filterCompleted(todos: Todo[]): Todo[];
}

export const filterTodoService: FilterTodoService = {
	filterFirst: (todos: Todo[], count: number): Todo[] => {
		return todos.slice(0, count);
	},
	filterCompleted: (todos: Todo[]): Todo[] => {
		return todos.filter((todo) => todo.completed);
	},
};
