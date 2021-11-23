import TodoList from './TodoList';
import { withApplyMockInStorybook } from '../../app/components/MockUtil';
import { useMemo } from 'react';
import { filterTodoService } from './../services/filterTodoService';
import { todoApi } from './../apis/todoApi';

interface TodoListViewContainerProps {
	isFilterCompleted: boolean;
}

const TodoListViewContainer: React.FC<TodoListViewContainerProps> = ({
	isFilterCompleted,
}) => {
	const { data: todos, error } = todoApi.useRequestManyTodos();

	const filterTodos = () => {
		const firstTodos = filterTodoService.filterFirst(todos ?? [], 10);
		if (isFilterCompleted) {
			return filterTodoService.filterCompleted(firstTodos);
		}

		return firstTodos;
	};

	const filteredTodos = useMemo(filterTodos, [isFilterCompleted, todos]);

	return (
		<TodoList
			todos={filteredTodos}
			isLoading={!todos && !error}
			error={error?.message}
		/>
	);
};

export default withApplyMockInStorybook(TodoListViewContainer);
