import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/system/Box';
import FilterControl from './FilterControl';
import TodoListViewContainer from './TodoListViewContainer';
import AddTodoDialogViewContainer from './AddTodoDialogViewContainer';
import { useTranslation } from 'react-i18next';

interface TodoSummaryProps {
	disableFilter?: boolean;
}

const TodoSummary: React.FC<TodoSummaryProps> = ({ disableFilter }) => {
	const [isAddTodoDialogOpen, setIsAddTodoDialogOpen] = useState(false);
	const [isFilterCompleted, setIsFilterCompleted] = useState(false);
	const { t } = useTranslation();

	const handleAddTodoClick = () => {
		setIsAddTodoDialogOpen(true);
	};

	return (
		<>
			<Stack>
				<Stack direction="row" justifyContent="space-between">
					<FilterControl
						isFilterCompleted={isFilterCompleted}
						disabled={disableFilter}
						onIsFilterCompletedChange={setIsFilterCompleted}
					/>

					<Box m={1}>
						<Button variant="outlined" onClick={handleAddTodoClick}>
							{t('todo.summary.add')}
						</Button>
					</Box>
				</Stack>

				<TodoListViewContainer isFilterCompleted={isFilterCompleted} />
			</Stack>

			<AddTodoDialogViewContainer
				isOpen={isAddTodoDialogOpen}
				onClose={() => setIsAddTodoDialogOpen(false)}
			/>
		</>
	);
};

export default TodoSummary;
