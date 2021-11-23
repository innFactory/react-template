import { render, screen, waitFor } from '@testing-library/react';
import TodoListViewContainer from './TodoListViewContainer';

jest.mock('../apis/todoApi');

test('check loading and filtering completed todos', async () => {
	render(<TodoListViewContainer isFilterCompleted={false} />);

	await waitFor(() =>
		expect(screen.getByText('todo.numberOfTodos: 3')).toBeInTheDocument()
	);

	render(<TodoListViewContainer isFilterCompleted={true} />);

	await waitFor(() =>
		expect(screen.getByText('todo.numberOfTodos: 1')).toBeInTheDocument()
	);
});
