import { Todo } from '../../models/todo';
import type { FilterTodoService } from '../filterTodoService';

export const filterTodoService: FilterTodoService = {
	filterFirst: function (_todos: Todo[], _count: number): Todo[] {
		return [];
	},
	filterCompleted: function (_todos: Todo[]): Todo[] {
		return [];
	},
};
