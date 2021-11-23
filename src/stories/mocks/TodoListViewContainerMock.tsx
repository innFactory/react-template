import { useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { mockComponent } from '../../features/app/components/MockUtil';
import TodoListViewContainer from '../../features/todo/components/TodoListViewContainer';
import TodoList from '../../features/todo/components/TodoList';
import { demoTodos } from '../../features/todo/models/todo';

mockComponent(TodoListViewContainer, (props) => {
	const { isFilterCompleted } = props;

	const completedTodos = demoTodos.filter((todo) => todo.completed);

	useEffect(() => {
		action('isFilterCompletedChanged')(isFilterCompleted);
	}, [isFilterCompleted]);

	return (
		<TodoList
			todos={isFilterCompleted ? completedTodos : demoTodos}
			isLoading={false}
		/>
	);
});
