import { styled } from '@mui/material/styles';
import Box from '@mui/system/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Todo } from './../models/todo';
import { useTranslation } from 'react-i18next';

const StyledTodoList = styled('div')(({ theme }) => ({
	padding: theme.spacing(1),
	'& .MuiTableHead-root': {
		backgroundColor: theme.palette.background.paper,
	},
}));

interface TodoListProps {
	todos: Todo[];
	isLoading: boolean;
	error?: string;
}

const TodoList: React.FC<TodoListProps> = ({ todos, isLoading, error }) => {
	const { t } = useTranslation();

	if (isLoading) {
		return <Typography>{t('todo.loading')}</Typography>;
	}

	if (error) {
		return <Typography>{error}</Typography>;
	}

	return (
		<StyledTodoList>
			<Table aria-label="todos">
				<TableHead>
					<TableRow>
						<TableCell>{t('todo.table.header.id')}</TableCell>
						<TableCell>{t('todo.table.header.title')}</TableCell>
						<TableCell>
							{t('todo.table.header.completed')}
						</TableCell>
					</TableRow>
				</TableHead>

				<TableBody>
					{todos.map((todo) => (
						<TodoItem key={todo.id} todo={todo} />
					))}
				</TableBody>
			</Table>

			<Box component={Typography} textAlign="right" m={1}>
				{t('todo.numberOfTodos')}: {todos.length}
			</Box>
		</StyledTodoList>
	);
};

interface TodoItemProps {
	todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	return (
		<TableRow>
			<TableCell>{todo.id}</TableCell>
			<TableCell>{todo.title}</TableCell>
			<TableCell>{String(todo.completed)}</TableCell>
		</TableRow>
	);
};

export default TodoList;
