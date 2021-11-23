import { Todo } from '../models/todo';
import { filterTodoService } from './filterTodoService';

test('check filter completed todos works', () => {
	const todos: Todo[] = [
		{ id: '1', title: 'Todo 1', completed: false },
		{ id: '2', title: 'Todo 2', completed: true },
		{ id: '3', title: 'Todo 3', completed: false },
	];
	const expected = new Array(todos[1]);

	const result = filterTodoService.filterCompleted(todos);

	expect(result).toEqual(expected);
});
